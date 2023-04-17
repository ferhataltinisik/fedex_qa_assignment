class SearchPage {
    elements = {
      searchInputBox: () => cy.get('#query'),
      searchButton: () => cy.get('button:contains("Search")'),
      cardTitle: () => cy.get('.card-subtitle'),
      gender: () => cy.contains('Gender:'),
      birthYear: () => cy.contains('Birth year:'),
      eyeColor: () => cy.contains('Eye color:'),
      skincolor: () => cy.contains('Skin color:'),
      population: () => cy.contains('Population:').next(),
      climate: () => cy.contains('Climate:').next(),
      gravity: () =>  cy.contains('Gravity:').next(),
      cards: () => cy.get('.card').not(':first'),
      notFoundErrorMessage: () => cy.contains('Not found.').invoke('text'),

    }
    
  
    typeSearchText(text) {
        this.elements.searchInputBox().should('not.be.disabled').type(text);
    }

    clickOnSearchButton() {
        this.elements.searchButton().click();
    }

    enterKeyEventOnSearchInput() {
        this.elements.searchInputBox().type('{enter}');
    }


    getCardTitle() {
        return this.elements.cardTitle();
    }

    getGender() {
        return this.elements.gender();
    }

    getBirthYear() {
        return this.elements.birthYear();
    }

    getEyeColor() {
        return this.elements.eyeColor();
    }

    getSkincolor() {
        return this.elements.skincolor();
    }

    getPopulation() {
        return this.elements.population();
    }

    getClimate() {
        return this.elements.climate();
    }
    
    getGravity() {
        return this.elements.gravity();
    }

    
    getCards(){
        return this.elements.cards();
    }
    
    getNotFoundErrorMessage(){
        return this.elements.notFoundErrorMessage();
    }
  
  }
  
  module.exports = new SearchPage();
  