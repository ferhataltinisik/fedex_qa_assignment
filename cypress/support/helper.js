
export const selectRadioButton = (radioBtnValue) => {
    cy.get(`input[value='${radioBtnValue}']`).then(($radioBtn) => {
        if ($radioBtn.is(':checked')) {
            // Radio button is already selected
            cy.log(`${radioBtnValue} radio button is already selected`);
        } else {
            // Select radio button
            cy.get(`#${radioBtnValue}`).check();
            cy.log(`Selected ${radioBtnValue} radio button`);
        }
    });
};


export const verifyCardInfo = (card) => {
    cy.wrap(card.find('.card-subtitle')).next().should('be.visible');
    cy.wrap(card.find('div:contains("Gender:")')).next().should('be.visible');
    cy.wrap(card.find('div:contains("Birth year:")')).next().should('be.visible');
    cy.wrap(card.find('div:contains("Eye color:")')).next().should('be.visible');
    cy.wrap(card.find('div:contains("Skin color:")')).next().should('be.visible');
}