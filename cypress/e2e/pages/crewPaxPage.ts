export class CrewPaxPage {

    navigateToCrewPax() {
        cy.intercept('POST', 'https://test.ship-docs.ttsw.com.pl/api/persons/basic-data/get-all?groupType=ON_BOARD&personType=CREW_MEMBER').as("requestCrewPax");
        cy.get(':nth-child(4) > .p-element > .p-panelmenu-header-link > .p-menuitem-text').click();
        cy.wait("@requestCrewPax").its('response.statusCode').should('eq', 200);
    }
    verifyElementsOnCrewPaxPage() {
        const elementsToCheck = [
            'Last Name',
            'First Name',
            'Middle Name',
            'Rank',
            'Nationality',
            'Signing on date',
            'Signing on place',
            'Signing off date',
            'Signing off place'
        ];

        elementsToCheck.forEach((element, index) => {
            const nth = index + 1;
            cy.get(`#pr_id_10-table > thead > tr > th:nth-child(${nth}) > span`).should('have.text', element);
        });

        cy.get('#test-id-panel-header-save-button').should('exist');
        cy.get('#test-id-panel-header-add-button > span.p-button-icon.fas.fa-plus').should('exist');
    }
    addNewElement() {
        cy.intercept('POST', 'https://test.ship-docs.ttsw.com.pl/api/persons/basic-data').as("requestData");

        cy.get('#p-panel-8-label').click();

        cy.get('span.fas.fa-plus').click();

        cy.get('#pr_id_11-table > .p-datatable-tbody > :nth-child(1) > :nth-child(1)').type('lastName');
        cy.get('#pr_id_11-table > .p-datatable-tbody > :nth-child(1) > :nth-child(2)').type('firstName');
        cy.get('#pr_id_11-table > .p-datatable-tbody > :nth-child(1) > :nth-child(3)').type('middleName');
        cy.get('.p-highlight > [width="175px"]').click();
        cy.get('.p-dropdown-trigger-icon').click();
        cy.get('#pr_id_13_list > p-dropdownitem:nth-child(1) > li > span.ng-star-inserted').click();
        cy.get('#pr_id_11-table > .p-datatable-tbody > :nth-child(1) > :nth-child(6)').type('18/12/2022');

        cy.get('#pr_id_11-table > .p-datatable-tbody > :nth-child(1) > :nth-child(7)').click();
        cy.get('.p-dropdown-trigger-icon').click();
        cy.get('#pr_id_15_list > :nth-child(4) > .p-ripple > .ng-star-inserted').click();

        // cy.get('#p-panel-8-titlebar > app-panel-header.ng-star-inserted > .panel-header-wrapper > .app-panel-header-body > :nth-child(5) > #test-id-panel-header-save-button > .p-button-icon').click();
        cy.get('#test-id-panel-header-save-button > .p-button-icon').eq(1).click();

        cy.get('.p-toast-message-content').should('have.text', "ErrorRank is required")
        cy.wait("@requestData").its('response.statusCode').should('eq', 400);
    }
}