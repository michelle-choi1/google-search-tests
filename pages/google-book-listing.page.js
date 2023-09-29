const { expect } = require('@playwright/test');

exports.BookListingPage = class BookListingPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.exitPreviewButton = page.getByLabel('Close preview dialog');
    this.addToLibrary = page.getByRole('link', { name: 'Add to my library' });
  }

  // test('test', async ({ page }) => {
  //   await page.goto('https://books.google.com/?hl=en');
  //   await page.getByRole('combobox', { name: 'Search Books' }).click();
  //   await page.getByRole('combobox', { name: 'Search Books' }).fill('very hungry caterpillar');
  //   await page.getByRole('combobox', { name: 'Search Books' }).press('Enter');
  //   await page.getByRole('link', { name: 'The Very Hungry Caterpillar books.google.com › books' }).first().click();
  //   await page.frameLocator('iframe[name="s7Z8Jb"]').locator('.selection-layer').first().click();
  //   await page.frameLocator('iframe[name="s7Z8Jb"]').locator('#viewport div').filter({ hasText: 'Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...' }).nth(1).click();
  // });
  
  async exitPreview() {   
    await this.exitPreviewButton.click();
    // Given more time, I would have added an expect for this
  }

  async addToMyLibrary() {
    await this.addToLibrary.click();
    // Given more time, I might have added an expect for this
  }
};