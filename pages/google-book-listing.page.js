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
  
  async exitPreview() {   
    await this.exitPreviewButton.click();
    // Given more time, I would have added an expect for this
  }

  async addToMyLibrary() {
    await this.addToLibrary.click();
    // Given more time, I might have added an expect for this
  }
};