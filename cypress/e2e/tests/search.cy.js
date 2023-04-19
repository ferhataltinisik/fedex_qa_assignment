const searchPage = require('../../pages/searchPage');
import { selectRadioButton, verifyCardInfo } from '../../support/helper';

describe('Star Wars Search feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });


  it('should verify character details after searching for a planet by clicking on search button', () => {
    cy.fixture('luke.json').then((luke) => {
      searchPage.typeSearchText(luke.name)
      searchPage.clickOnSearchButton();
      searchPage.getCardTitle().should('contain', luke.name);
      searchPage.getGender().next().should('contain', luke.gender);
      searchPage.getBirthYear().next().should('contain', luke.birthYear);
      searchPage.getEyeColor().next().should('contain', luke.eyeColor);
      searchPage.getSkincolor().next().should('contain', luke.skinColor);
    });
  })


  it('should verify planet details after searching for a planet by clicking on search button', () => {
    cy.fixture('planet.json').then((planet) => {
      selectRadioButton('planets');
      cy.fixture('planet.json').then(planet => {
        searchPage.typeSearchText(planet.name)
        searchPage.clickOnSearchButton();
        searchPage.getCardTitle().should('contain', planet.name);
        searchPage.getPopulation().should('contain', planet.population);
        searchPage.getClimate().should('contain', planet.climate);
        searchPage.getGravity().should('contain', planet.gravity);
      });
    });
  })


  it('should verify planet details after searching for a planet by triggering the Enter key event on the search input', () => {
    cy.fixture('planet.json').then((planet) => {
      selectRadioButton('planets');

      cy.fixture('planet.json').then(planet => {
        searchPage.typeSearchText(planet.name)
        searchPage.enterKeyEventOnSearchInput();
        searchPage.getCardTitle().should('contain', planet.name);
        searchPage.getPopulation().should('contain', planet.population);
        searchPage.getClimate().should('contain', planet.climate);
        searchPage.getGravity().should('contain', planet.gravity);
      });
    });
  })



  it('should display more than one search result for partial matching character name', () => {
    searchPage.typeSearchText('ob')
    searchPage.enterKeyEventOnSearchInput();
    searchPage.getCards().each((card) => {
      verifyCardInfo(card);
    })

    searchPage.getCards().then(($cards) => {
      const count = $cards.length;
      expect(count).to.be.greaterThan(1);
    });
  });


  it('should verify that the search input field is cleared when switching search type', () => {
    cy.fixture('luke.json').then((luke) => {
      searchPage.typeSearchText(luke.name);
    });
    searchPage.enterKeyEventOnSearchInput();
    searchPage.elements.searchInputBox().should('have.value', '')

  });


  // # Negative scenarios
  it('should display a "Not Found" message when searching for an invalid character name ', () => {
    searchPage.typeSearchText('xxxxxx')
    searchPage.enterKeyEventOnSearchInput();
    cy.fixture('errorMessages.json').then(message => {
      searchPage.getNotFoundErrorMessage().should('contain', message.notFoundMessage);
    });
  })


  it('should display a "Not Found" message when searching for an invalid planet name', () => {
    selectRadioButton('planets');
    searchPage.typeSearchText('yyyyyy')
    searchPage.enterKeyEventOnSearchInput();
    cy.fixture('errorMessages.json').then(message => {
      searchPage.getNotFoundErrorMessage().should('contain', message.notFoundMessage);
    });
  })


  it('should display a "Not Found" message after switching search type', () => {
    selectRadioButton('planets');
    cy.fixture('planet.json').then(planet => {
      searchPage.typeSearchText(planet.name)
      searchPage.enterKeyEventOnSearchInput();
    });
    selectRadioButton('people');
    searchPage.enterKeyEventOnSearchInput();
    cy.fixture('errorMessages.json').then(message => {
      searchPage.getNotFoundErrorMessage().should('contain', message.notFoundMessage);
    });
  })

})
