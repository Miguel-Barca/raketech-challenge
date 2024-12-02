import { type Page as PlaywrightPage, type Locator } from '@playwright/test';

class Header {
  public readonly page: PlaywrightPage;
  public readonly headerAbout: Locator;
  public readonly headerCareers: Locator;
  public readonly headerContact: Locator;
  public readonly headerInvestorRelation: Locator;
  public readonly headerLogo: Locator;
  public readonly headerNewsAndMedia: Locator;
  public readonly headerPlaybook: Locator;
  public readonly headerSearch: Locator;
  public readonly headerWhatWeDo: Locator;

  constructor(page: PlaywrightPage) {
    this.page = page;
    this.headerAbout = page
      .getByRole('link', { name: 'About', exact: true })
      .nth(0);
    this.headerCareers = page
      .getByRole('link', { name: 'Careers', exact: true })
      .nth(0);
    this.headerContact = page.getByRole('link', {
      name: 'Contact',
      exact: true,
    });
    this.headerInvestorRelation = page.getByRole('link', {
      name: 'Investor Relations',
      exact: true,
    });
    this.headerLogo = page.getByRole('link', { name: 'Raketech', exact: true });
    this.headerNewsAndMedia = page.getByRole('link', {
      name: 'News and media',
      exact: true,
    });
    this.headerPlaybook = page
      .getByRole('link', { name: 'Playbook', exact: true })
      .nth(0);
    this.headerSearch = page.locator('#search-btn').getByRole('link');
    this.headerWhatWeDo = page
      .getByRole('link', { name: 'What We Do', exact: true })
      .nth(0);
  }

  async clickHeaderSearchLink() {
    await this.headerSearch.click();
  }

  async confirmSearchInput() {
    await this.page.getByPlaceholder('Search').press('Enter');
  }

  async inputSearchItem(input: string) {
    await this.page.getByPlaceholder('Search').fill(input);
  }

  async searchItem(input: string) {
    await this.clickHeaderSearchLink();
    await this.inputSearchItem(input);
    await this.confirmSearchInput();
  }
}

export default Header;
