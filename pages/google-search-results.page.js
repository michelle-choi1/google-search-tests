const { expect } = require('@playwright/test');

exports.ResultsPage = class ResultsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstResult = page
      .getByRole('link')
      .getByRole('heading')
      .first();
    this.firstBookResultAuthor = page.locator('.fl').first();
  }

};