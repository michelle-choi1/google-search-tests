// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/google-home.page');
const { ResultsPage } = require('../pages/google-search-results.page');

//  #3. Write a test to search for flights to "Anywhere" and ensure results are returned using Google Flights.

test.describe('3. Search for a flight', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('https://www.google.com/');
  });
  
  test('can search for a flight to anywhere using Google Flights', async ({ page }) => {
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);
  
    // Search for a flight to "anywhere"
    await homePage.search('flights to anywhere');

    // Expect Google Flights-specific form fields
    await expect(resultsPage.originInput).toBeVisible();
    await expect(resultsPage.destinationInput).toBeVisible();

    // Go to Google Flights for more flight options
    await resultsPage.googleFlightsButton.click();
    await expect(page).toHaveTitle('Google Flights - Find Cheap Flight Options & Track Prices');
  });

});

