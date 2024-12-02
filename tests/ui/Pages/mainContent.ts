import { type Page as PlaywrightPage, type Locator } from '@playwright/test';

class MainContent {
  public readonly page: PlaywrightPage;
  public readonly container: Locator;

  constructor(page: PlaywrightPage) {
    this.page = page;
    this.container = page.locator(`div[class='container main-content']`);
  }
}

export default MainContent;
