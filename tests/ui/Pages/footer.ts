import { type Page as PlaywrightPage, type Locator } from '@playwright/test';
import raketechSocialSites from '../../utils/raketechSocialSites';
import raketechImages from '../../utils/raketechImages';

class Footer {
  public readonly page: PlaywrightPage;
  public readonly footer: Locator;
  public readonly footerAbout: Locator;
  public readonly footerAffiliationCloud: Locator;
  public readonly footerCareers: Locator;
  public readonly footerCompany: Locator;
  public readonly footerContactEmail: Locator;
  public readonly footerCopyright: Locator;
  public readonly footerCopyrightFacebook: Locator;
  public readonly footerCopyrightInstagram: Locator;
  public readonly footerCopyrightLinkedIn: Locator;
  public readonly footerCopyrightTwitter: Locator;
  public readonly footerCopyrightSymbol: Locator;
  public readonly footerCopyrightCreatedBy: Locator;
  public readonly footerFinancialReports: Locator;
  public readonly footerGeneralPressReleases: Locator;
  public readonly footerGetInTouch: Locator;
  public readonly footerGovernance: Locator;
  public readonly footerInvestors: Locator;
  public readonly footerLogo: Locator;
  public readonly footerPlaybook: Locator;
  public readonly footerPrivacyPolicies: Locator;
  public readonly footerProducts: Locator;
  public readonly footerRaketechInfo: Locator;
  public readonly footerResponsibilities: Locator;
  public readonly footerSharesAndShareholders: Locator;
  public readonly footerSubscribe: Locator;
  public readonly footerWhatWeDo: Locator;
  public readonly footerWidgets: Locator;
  public readonly footerWhyInvestInUs: Locator;

  constructor(page: PlaywrightPage) {
    this.page = page;
    this.footer = page.getByTestId('footer-outer');
    this.footerWidgets = page.getByTestId('footer-widgets');
    this.footerAbout = this.footerWidgets.getByRole('link', { name: 'About' });
    this.footerAffiliationCloud = this.footerWidgets.getByRole('link', {
      name: 'AffiliationCloud',
    });
    this.footerCareers = this.footerWidgets.getByRole('link', {
      name: 'Careers',
    });
    this.footerCompany = this.footerWidgets.getByRole('heading', {
      name: 'Company',
    });
    this.footerContactEmail = this.footerWidgets.getByRole('link', {
      name: 'Contact@raketech.com',
    });
    this.footerCopyright = page.getByTestId('copyright');
    this.footerCopyrightFacebook = page.locator(
      `a[href='${raketechSocialSites.facebook}']`
    );
    this.footerCopyrightInstagram = page.locator(
      `a[href='${raketechSocialSites.instagram}']`
    );
    this.footerCopyrightLinkedIn = page.locator(
      `a[href='${raketechSocialSites.linkedIn}']`
    );
    this.footerCopyrightTwitter = page.locator(
      `a[href='${raketechSocialSites.twitter}']`
    );
    this.footerCopyrightSymbol = page.getByText('© 2024 Raketech.');
    this.footerCopyrightCreatedBy = page.getByText('Crafted by BRND WGN');
    this.footerFinancialReports = this.footerWidgets.getByRole('link', {
      name: 'Financial Reports',
    });
    this.footerGeneralPressReleases = this.footerWidgets.getByRole('link', {
      name: 'General Press Releases',
    });
    this.footerGetInTouch = this.footerWidgets.getByRole('heading', {
      name: 'Get in Touch',
    });
    this.footerGovernance = this.footerWidgets.getByRole('link', {
      name: 'Governance',
      exact: true,
    });
    this.footerInvestors = this.footerWidgets.getByRole('heading', {
      name: 'Investors',
    });
    this.footerLogo = this.page.locator(
      `img[data-src='${raketechImages.logo.src}']`
    );
    this.footerPlaybook = this.footerWidgets.getByRole('link', {
      name: 'Playbook',
    });
    this.footerPrivacyPolicies = this.footerWidgets.getByRole('link', {
      name: '& Privacy Policies',
    });
    this.footerProducts = this.footerWidgets.getByRole('link', {
      name: 'Products',
    });
    this.footerRaketechInfo = this.footerWidgets.getByText(
      'Raketech Group Holding plc,'
    );
    this.footerResponsibilities = this.footerWidgets.getByRole('link', {
      name: 'Responsibilities',
    });
    this.footerSharesAndShareholders = this.footerWidgets.getByRole('link', {
      name: 'Shares & Shareholders',
    });
    this.footerSubscribe = this.footerWidgets.getByRole('link', {
      name: 'Subscribe',
    });
    this.footerWhatWeDo = this.footerWidgets.getByRole('link', {
      name: 'What We Do',
    });
    this.footerWhyInvestInUs = this.footerWidgets.getByRole('link', {
      name: 'Why invest in us?',
    });
  }
}

export default Footer;
