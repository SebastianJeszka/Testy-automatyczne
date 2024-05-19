interface Country {
    country: string;
    continent: string;
}

export class PortDocsMgmtPage {
    private sectionSelector = '[href="/port-docs-mgmt/home"] .p-button-label';
    private mapElementSelectors = [
        '#map .leaflet-overlay-pane svg g path:nth-child(3)',
        '#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g > path:nth-child(4)'
    ];
    private countryNameSelector = '.country-item span:not(.flag)';
    private countryFlagSelector = '.country-item .flag app-flag-icon img';
    private continentNameSelector = 'app-port-docs-mgmt app-world-map p-dialog .p-dialog-header span.header-title';

    navigateToSection() {
        cy.get(this.sectionSelector).click();
    }

    clickOnMapElement(selector: string) {
        cy.get(selector).click();
    }

    // Weryfikacja wszystkich kontynentów na mapie
    verifyCountriesForAllMapElements() {
        cy.readFile<Country[]>('cypress/fixtures/countries.json').then((countries) => {
            for (const selector of this.mapElementSelectors) {
                this.clickOnMapElement(selector);
                this.verifyCountryNames(countries);
                this.verifyContinentName(countries);
                this.verifyCountryFlags();
                cy.get('.p-dialog-header-close-icon').click();
            }
        });
    }

    // Weryfikacja nazw krajów na podstawie dostarczonych danych
    verifyCountryNames(countries: Country[]) {
        cy.get(this.countryNameSelector).each((countryElement) => {
            const countryName = countryElement.text().trim();
            const matchingCountry: Country | undefined = countries.find(country => country.country === countryName);

            const doesCountryExist = Boolean(matchingCountry);
            expect(doesCountryExist, `Country ${countryName} should exist in countries.json`).to.equal(true);
        });
    }

    // Weryfikacja nazw kontynentów na podstawie dostarczonych danych
    verifyContinentName(countries: Country[]) {
        cy.get(this.countryNameSelector).each((countryElement) => {
            const countryName = countryElement.text().trim();
            const matchingCountry: Country | undefined = countries.find(country => country.country === countryName);
            if (matchingCountry) {
                cy.get(this.continentNameSelector).invoke('text').then((continentName) => {
                    expect(continentName.trim()).to.equal(matchingCountry.continent);
                });
            }
        });
    }

    // Weryfikacja widoczności flag krajów i ich liczby
    verifyCountryFlags() {
        cy.get(this.countryFlagSelector).should('be.visible');
        cy.get(this.countryFlagSelector).its('length').then(flagCount => {
            cy.get(this.countryNameSelector).its('length').then(countryCount => {
                expect(countryCount).to.equal(flagCount);
            });
        });

        // Weryfikacja, czy każdy kraj ma flagę obok nazwy kraju
        cy.get(this.countryNameSelector).each((countryElement, index) => {
            const countryName = countryElement.text().trim();
            cy.get(this.countryFlagSelector).eq(index).invoke('attr', 'alt').then(altText => {
                expect(altText).to.equal(`Flag of ${countryName}`);
            });
        });
    }
}
