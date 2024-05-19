export class MyPortsPage {
    login() {
        cy.login();
    }

    navigateToSpecificPage() {
        cy.get('[href="/port-docs-mgmt/home"] > .p-element > .p-button-label').click();
        cy.get(':nth-child(3) > .p-element > .p-panelmenu-header-link > .p-menuitem-text').click();
    }

    verifyElements() {
        const textElementsToCheck = [
            'Country',
            'Port',
            'UN Locator',
            'UTC Offset',
            'Docs Guide',
            'Port Facility',
            'Agency - Name',
            'Contact Person'
        ];

        const buttonElementsToCheck = [
            '#test-id-panel-header-add-button',
            '#test-id-panel-header-save-button'
        ];

        textElementsToCheck.forEach(element => {
            cy.contains('span', element).should('exist').and('be.visible');
        });

        buttonElementsToCheck.forEach(selector => {
            cy.get(selector).should('exist').and('be.visible');
        });
    }
    performActions() {
        cy.get('.p-button-icon.fas.fa-plus').click();
        cy.get('#pr_id_10-table > .p-datatable-tbody > :nth-child(1) > [width="12.5%"]').should('exist').click();
        cy.get('.p-dropdown-trigger-icon').should('exist').click();
        cy.get('#pr_id_12_list > :nth-child(1) > .p-ripple').should('exist').click();
        cy.get('#pr_id_10-table > .p-datatable-tbody > :nth-child(1) > [width="13%"]').should('exist').click();
        cy.get('.p-highlight > [width="13%"]').should('exist').click();
        cy.get('#pr_id_13_list > :nth-child(1) > .p-ripple > .ng-star-inserted').should('exist').click();
        cy.get('[draggable="false"] > [width="6%"]').should('exist').click();
        cy.get('.p-dropdown').should('exist').click();
        cy.get(':nth-child(2) > :nth-child(3) > .small-text').should('exist').click();
        cy.get('[draggable="false"] > [width="21%"]').type('testowy tekst');
        cy.get('#pr_id_10-table > .p-datatable-tbody > :nth-child(1) > [width="7%"]').type('0001');
        cy.get('#pr_id_10-table > .p-datatable-tbody > :nth-child(1) > [width="15%"]').type('test');
        cy.get('#p-panel-7-titlebar > app-panel-header.ng-star-inserted > .panel-header-wrapper > .app-panel-header-body > :nth-child(5) > #test-id-panel-header-save-button > .p-button-icon').click();
    }
}
