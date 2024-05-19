class POCRecordsPage {

    selectors = {
        optionsIcon: '.fa-filter',
        scrollToTopButton: '#test-id-panel-header-scroll-top-button',
        scrollToBottomButton: '#test-id-panel-header-scroll-bottom-button',
        addButtonIcon: '#test-id-panel-header-add-button .fa-plus',
        saveIcon: '.fa-save.pr-2',
        navLink: '[href="/port-docs-mgmt/home"] > .p-element > .p-button-label',
        subNavLink: ':nth-child(2) > .p-element > .p-panelmenu-header-link > .p-menuitem-text',
        barcelonaElement: '#test-id-poc-records-row-6-cell-shipPortId > span',
        baseTableSelector: '#pr_id_10-table > thead > tr:nth-child({row}) > th:nth-child({col}) > span',
        elements: {
            addButton: '#test-id-panel-header-add-button > .p-button-icon',
            shipPortIdInput: '#formly_26_input_arrivalVoyNo_0',
            arrivalDateInput: '#formly_26_datepicker_arrivalDate_1 > span > input',
            arrivalTimeInput: '#formly_26_input_arrivalTime_2',
            arrivalSwDraftFore: '#formly_37_input-double-unit_arrivalSwDraft\\.fore_0',
            arrivalSwDraftAft: '#formly_37_input-double-unit_arrivalSwDraft\\.aft_1',
            arrivalSwDraftMid: '#formly_37_input-double-unit_arrivalSwDraft\\.mid_2',
            arrivalSwDraftCheckbox: '#formly_40_checkbox_arrivalSwDraft\\.mastFoulded_2 > div > div.p-checkbox-box',
            departureVoyNoInput: '#formly_56_input_departureVoyNo_1',
            departureDateInput: '#formly_56_datepicker_departureDate_2 > span > input',
            departureTimeInput: '#formly_56_input_departureTime_3',
            departureSwDraftFore: '#formly_65_input-double-unit_departureSwDraft\\.fore_0',
            departureSwDraftAft: '#formly_65_input-double-unit_departureSwDraft\\.aft_1',
            periodOfStayInput: '#formly_15_input_periodOfStay_3',
            typeOfCargoInput: '#formly_121_input_typeOfCargo_0',
            totalCargoOnBoardInput: '#formly_123_input-append_totalCargoOnBoard_0',
            cargoForDischargeInput: '#formly_125_input-append_cargoForDischarge_0',
            displacementInput: '#formly_129_input-append_displacement_1',
            numberOfPassengersToDisambarkedInput: '#formly_137_input-append_numberOfPassengersToDisambarked_0',
            numberOfPassengersToEmbarkInput: '#formly_139_input-append_numberOfPassengersToEmbarke_0',
            utcOffsetDropdownTrigger: '#utcOffset > div > div.p-dropdown-trigger',
        },
        radioButtons: {
            isArrival: '#formly_11_radio_isArrival_5 > div > div',
            arrivalShipSecurityLevel_0: '#formly_99_radio_arrivalShipSecurityLevel_0 > div > div',
            arrivalPortSecurityLevel_1: '#formly_99_radio_arrivalPortSecurityLevel_1 > div > div',
            departureShipSecurityLevel_0: '#formly_102_radio_departureShipSecurityLevel_0 > div > div',
            departurePortSecurityLevel_1: '#formly_102_radio_departurePortSecurityLevel_1 > div > div',
            ispsCompliant_0: '#formly_103_radio_ispsCompliant_0 > div > div',
            anyShipToShipActivities_0: '#formly_110_radio_anyShipToShipActivities_0 > div > div',
            inBallast_1: '#formly_123_radio_inBallast_1 > div > div',
        }
    };

    login() {
        cy.login();
    }

    navigateToPOCRecordsSection() {
        cy.get(this.selectors.navLink).click();
        cy.get(this.selectors.subNavLink).click();
    }

    navigateToBarcelonaElement() {
        cy.get(this.selectors.barcelonaElement).dblclick().wait(1000);
    }
    radioHighlight(selector: string) {
        return `${selector} .p-radiobutton-box.p-highlight > span`;
    }

    checkTableNavbarElementsExistence() {
        const elementsData = [
            { row: 1, names: ["Port/Place", "UN Code", "Port Facility", "Arrival", "Departure"] },
            { row: 2, names: ["Name", "Number", "Voy No", "Date", "Time", "SL Port", "SL Ship", "Drafts (F/A)"] },
            { row: 3, names: ["SW", "FW"] }
        ];

        elementsData.forEach(data => {
            data.names.forEach((name, index) => {
                const selector = this.selectors.baseTableSelector.replace('{row}', data.row.toString()).replace('{col}', (index + 1).toString());
                cy.get(selector).should('exist', `Element ${name} should exist on the page`);
            });
        });
    }

    checkMenuElementsExistence() {
        const menuElements = {
            "Options": this.selectors.optionsIcon,
            "Scroll to Top": this.selectors.scrollToTopButton,
            "Scroll to Bottom": this.selectors.scrollToBottomButton,
            "Add": this.selectors.addButtonIcon,
            "Save": this.selectors.saveIcon
        };

        for (const [elementName, selector] of Object.entries(menuElements)) {
            cy.get(selector).should('be.visible', `Element ${elementName} should be visible on the page`);
        }
    }

    checkElementsExistence() {
        Object.entries(this.selectors.elements).forEach(([elementName, selector]) => {
            if (selector.includes('.p-radiobutton-box.p-highlight')) {
                selector = this.radioHighlight(selector);
            }
            cy.get(selector).should('exist', `Element ${elementName} should exist on the page`);
        });
    }

    addNewRecord() {
        cy.get(this.selectors.elements.addButton).click().wait(500);
        cy.get('#test-id-poc-records-row-0-cell-shipPortId').click();
        cy.get('#test-id-poc-records-row-0-cell-shipPortId > p-celleditor > p-dropdown > div > div.p-dropdown-trigger > span').click();
        cy.get('#pr_id_12_list > :nth-child(1) > .p-ripple > .ng-star-inserted').click();
        cy.get('#pr_id_10-table > .p-datatable-tbody > #test-id-poc-records-row-0 > #test-id-poc-records-row-0-cell-arrivalVoyNo').type('123');
        cy.get('#pr_id_10-table > .p-datatable-tbody > #test-id-poc-records-row-0 > #test-id-poc-records-row-0-cell-arrivalDate').click();
        cy.get('.p-datepicker-buttonbar > :nth-child(1) > .p-button-label').click();
        cy.get('#pr_id_10-table > .p-datatable-tbody > #test-id-poc-records-row-0 > #test-id-poc-records-row-0-cell-departureVoyNo').type('123');
        cy.get('#pr_id_10-table > .p-datatable-tbody > #test-id-poc-records-row-0 > #test-id-poc-records-row-0-cell-departureDate').click();
        cy.get(':nth-child(3) > :nth-child(6) > .p-ripple').click();
    }
}

export default new POCRecordsPage();
