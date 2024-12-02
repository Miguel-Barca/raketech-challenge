import { Page as PlaywrightPage } from '@playwright/test';
import Footer from './footer';
import Header from './header';

class BasePage {
  public readonly page: PlaywrightPage;
  public readonly footer: Footer;
  public readonly header: Header;

  constructor(page: PlaywrightPage) {
    this.page = page;
    this.footer = new Footer(this.page);
    this.header = new Header(this.page);
  }
}

export default BasePage;
