import { type Page as PlaywrightPage, type Locator } from '@playwright/test';
import BasePage from './basePage';

class SearchPage extends BasePage {
  public readonly page: PlaywrightPage;
  public readonly container: Locator;
  public readonly nextEntries: Locator;
  public readonly noResultsMessage: Locator;
  public readonly previousEntries: Locator;
  public readonly resultsFoundHeaderMessage: Locator;

  constructor(page: PlaywrightPage) {
    super(page);
    this.page = page;
    this.nextEntries = page.getByRole('link', { name: 'Next Entries »' });
    this.noResultsMessage = page.getByText('Sorry, no results were found.');
    this.previousEntries = page.getByRole('link', {
      name: '« Previous Entries',
    });
    this.resultsFoundHeaderMessage = page.getByText(/^\d+ results found$/);
  }

  async currentPageResultsCount() {
    let locatorSearchResult = this.page.locator(`article[class='result']`);

    return locatorSearchResult.count();
  }

  async goToNextPage() {
    await this.nextEntries.click();
  }

  async goToPreviousPage() {
    await this.previousEntries.click();
  }
}

export default SearchPage;
