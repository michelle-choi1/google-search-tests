// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/google-home.page');
const { ResultsPage } = require('../pages/google-search-results.page');
const { BooksSearchPage } = require('../pages/google-books-search.page');
const { BookListingPage } = require('../pages/google-book-listing.page');

//  #2. Write a test to search for a book of your choice under the "Books" tab that Google offers.  Click on that book result and ensure you've made it to the correct book, then check the ability to add that book to your library (you don't have to actually log into a Google account, but try to assert you've made it to the login page after clicking the add to library option).

test.describe('2. Search for a book and add to Library', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    
    // The closest thing I could find to the "'Books' tab" was the All Apps button on top right corner -> Books

    // Assuming we want to test the navigation feature instead of going directly to Google Books?
    // await page.goto('https://books.google.com/');
    
    await page.goto('https://www.google.com/');
    const homePage = new HomePage(page);
    await homePage.navToBooks();
  });
  
  test('can search for book', async ({ page }) => {
    const booksPage = new BooksSearchPage(page);
    const resultsPage = new ResultsPage(page);
  
    // Search for an item
    await booksPage.search('very hungry caterpillar');
  
    // Get first search result
    const firstResultLink = resultsPage.firstResult
  
    // Make sure chosen Book result is relevant (contains search term and has correct author)
    await expect(firstResultLink).toContainText('The Very Hungry Caterpillar');
    await expect(resultsPage.firstBookResultAuthor).toContainText('Eric Carle');
  });

  test('can add book to library', async ({ page }) => {
    const booksPage = new BooksSearchPage(page);
    const resultsPage = new ResultsPage(page);
    const bookListing = new BookListingPage(page);
  
    // Search for an item
    await booksPage.search('very hungry caterpillar');
  
    // Click on first Books result
    await resultsPage.firstResult.click();

    // Books listing page opens with a preview of the book pages. Exit preview so we can access the "Add to my library" button
    await bookListing.exitPreview();

    // Promise set up in anticipation of login page
    const loginPagePromise = page.waitForEvent('popup');

    // Attempt to "Add to my library"
    await bookListing.addToMyLibrary();

    // Verifying Google login page appears
    const loginPage = await loginPagePromise;
    await expect(loginPage).toHaveTitle('Sign in - Google Accounts');
  });

});

