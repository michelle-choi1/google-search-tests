const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchBar = page.getByLabel('Search', { exact: true });
    this.resultStats = page.locator('#result-stats');
    this.allAppsButton = page.getByLabel("Google apps");
    this.booksButton = page.frameLocator('iframe[name="app"]').getByRole('link', { name: 'Books' });
  }

  async search(term) {
    let originalURL = this.page.url();

    await this.searchBar.click();
    await this.searchBar.fill(term);
    await this.searchBar.press('Enter');
    
    // expect new page to load upon product search
    await expect(this.page).not.toHaveURL(originalURL);
    await expect(this.resultStats).toBeVisible();
  }

  async navToBooks() {
    await this.allAppsButton.click();
    await this.booksButton.click();
  }
};