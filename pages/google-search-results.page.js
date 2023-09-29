const { expect } = require('@playwright/test');

exports.ResultsPage = class ResultsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    // First search result link
    this.firstResult = page
      .getByRole('link')
      .getByRole('heading')
      .first();
    
    // Specific to Test Suite #2
    // Author of first returned result on Google Books
    this.firstBookResultAuthor = page.locator('.fl').first();

    // Specific to Test Suite #3
    // Form fields for flight search
    this.originInput = page.getByPlaceholder('Enter an origin');
    this.destinationInput = page.getByPlaceholder('Enter a destination');
    // Button to go to Google Flights page
    this.googleFlightsButton = page.getByLabel('Show flights on Google Flights');
  }

};