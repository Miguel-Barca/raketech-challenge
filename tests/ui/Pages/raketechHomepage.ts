import { Page as PlaywrightPage } from '@playwright/test';
import BasePage from './basePage';
import MainContent from './mainContent';

class RaketechHomepage extends BasePage {
  public readonly page: PlaywrightPage;
  public readonly mainContent: MainContent;

  constructor(page: PlaywrightPage) {
    super(page);
    this.page = page;
    this.mainContent = new MainContent(this.page);
  }
}

export default RaketechHomepage;
