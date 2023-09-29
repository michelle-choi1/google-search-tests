const { expect } = require('@playwright/test');

exports.BooksSearchPage = class BooksSearchPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchBar = page.getByRole('combobox', { name: 'Search Books' });
  }

  async search(term) {
    let originalURL = this.page.url();

    await this.searchBar.click();
    await this.searchBar.fill(term);
    await this.searchBar.press('Enter');
    
    // expect new page to load upon product search
    await expect(this.page).not.toHaveURL(originalURL);
  }
};