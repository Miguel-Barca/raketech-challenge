import { type Page as PlaywrightPage, type Locator } from '@playwright/test';
import casinoGuideSites from '../../utils/casinoGuideSites';

class ProductPageCasinoGuide {
  public readonly page: PlaywrightPage;
  public readonly card: Locator;
  public readonly heading: Locator;
  public readonly targetIconFacebook: Locator;
  public readonly targetIconHomepage: Locator;
  public readonly targetIconTwitter: Locator;

  constructor(page: PlaywrightPage) {
    this.page = page;
    this.card = page.locator('.team_member_details');
    this.heading = page
      .locator('.team_member_details')
      .locator('h2')
      .filter({ hasText: 'Casinoguide' });
    this.targetIconFacebook = page
      .locator('.team_member_details')
      .locator(`a[href='${casinoGuideSites.facebook}']`)
      .locator('i[class^="icon-default-style"]');
    this.targetIconHomepage = page
      .locator('.team_member_details')
      .locator(`a[href='${casinoGuideSites.homepage}']`)
      .locator('i[class^="icon-default-style"]');
    this.targetIconTwitter = page
      .locator('.team_member_details')
      .locator(`a[href='${casinoGuideSites.twitter}']`)
      .locator('i[class^="icon-default-style"]');
  }

  async clickLinkToCasinoGuideWebSite() {
    await this.targetIconHomepage.click();
  }
}

export default ProductPageCasinoGuide;
