# google-search-tests

## Instructions to run tests locally
1. Download this repo
2. Open Terminal software
3. Navigate to this folder
4. Run `npx playwright test --ui` if you'd like to run and see the tests running visually, or `npx playwright test` if you'd like to run the tests headless
  - In ui mode, click the "Play" button on the left panel to start the tests

## Test cases
1. Test to search for a product/object and ensure it is returning the expected result
  - `tests/1-product-search.spec.js` = Test Suite #1
2. Test to search for a book under Google Books
  - `tests/2-book-search.spec.js` = Test Suite #2

## File Structure
- `pages/` - Page Object Model files
- `tests/` - Test cases

## Tech Stack
- MochaJS
- PlaywrightJS
- Github Actions
