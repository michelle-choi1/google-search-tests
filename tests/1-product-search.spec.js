// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/google-home.page');
const { ResultsPage } = require('../pages/google-search-results.page');

//  #1. Write a test to search for a product/object of your choice and ensure it is properly returning the expected result.

test.describe('1. Search and verify result', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('https://www.google.com/');
  });
  
  test('can search for an object', async ({ page }) => {
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);
  
    // Search for an item
    await homePage.search('water bottle');

    // Get first search result
    const firstResultLink = resultsPage.firstResult
  
    // Make sure chosen result is relevant (contains search term)
    // Note: I chose to just check the first one but given more time, I would have probably tested more results!
    await expect(firstResultLink).toContainText('water bottle', {ignoreCase: true});
  });
  
  test('can search for a specific product', async ({ page }) => {
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);
  
    // Expect search bar to be "focused"
    await expect(homePage.searchBar).toBeFocused();
  
    // Search for an item
    await homePage.search('hydro flask water bottle 32 oz');
  
    // Get first search result
    const firstResultLink = resultsPage.firstResult
    
    // More specific, relevant checks on the search result
    await expect(firstResultLink).toContainText('hydro flask', {ignoreCase: true});
    await expect(firstResultLink).toContainText('water bottle', {ignoreCase: true});
    await expect(firstResultLink).toContainText('32 oz', {ignoreCase: true});
  });

});

