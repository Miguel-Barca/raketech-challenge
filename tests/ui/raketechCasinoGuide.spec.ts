import {
  expect,
  Footer,
  Header,
  MainContent,
  Page,
  test,
} from './fixtures/raketech-fixture';
import { buildUrl } from '../utils/uiUrlBuilder';
import casinoGuideSites from '../utils/casinoGuideSites';
import uiPages from '../utils/uiPages';

const products: Record<any, any> = {
  CasinoGuide: 'CasinoGuide',
};

const raketechProductsURL: string = buildUrl(uiPages.raketech.products);
const product = products.CasinoGuide;

test.describe(
  'raketech domain',
  {
    tag: ['@raketech', '@ui', '@searchFunctionality'],
  },
  () => {
    test.beforeEach(
      `validates Raketech homepage - footer and header`,
      async ({ page, raketechHomepage }) => {
        await page.goto('/');

        await assertVisibilityBasePage(
          raketechHomepage.footer,
          raketechHomepage.header
        );
      }
    );

    test.afterEach(async ({ page }) => {
      await page.close();
    });

    test(`navigates to ${product} homepage`, async ({
      page,
      raketechHomepage,
      searchPage,
      productPageCasinoGuide,
    }) => {
      let popupPromise: Promise<Page>;
      let productUrl = casinoGuideSites.homepage;

      await test.step(`validate visibility homepage - main content`, async () => {
        await assertVisibilityOfMainContent(raketechHomepage.mainContent);
      });

      await searchItem(raketechHomepage.header, product);

      await test.step(`validates "results found" message`, async () => {
        await expect(
          page.getByRole('heading', {
            name: `Results For "${product}"`,
          })
        ).toBeVisible();
        await expect(searchPage.resultsFoundHeaderMessage).toBeVisible();
      });

      await test.step(`validates result count`, async () => {
        let currentPageResults = await searchPage.currentPageResultsCount();
        expect(currentPageResults).toBeGreaterThan(0);
      });

      await test.step(`validates Products Page is presented in the results`, async () => {
        let resultMatch: boolean = false;
        let productsPageLink = page
          .getByRole('heading', { name: 'Products Page' })
          .getByRole('link');

        while (!resultMatch) {
          if (await productsPageLink.isVisible()) {
            resultMatch = true;
            return;
          } else {
            await searchPage.goToNextPage();
          }
        }
      });

      await test.step(`navigates to Raketech Products Page`, async () => {
        await goToProductsPage(page, raketechProductsURL);
      });

      await test.step(`validates Raketech Products Page url`, async () => {
        await expect(page).toHaveURL(raketechProductsURL);
      });

      await test.step(`opens ${product} product card`, async () => {
        await page.getByRole('heading', { name: `${product}` }).click();
      });

      await test.step(`validates ${product} card's heading and target icons`, async () => {
        await productPageCasinoGuide.card.waitFor();
        await expect(productPageCasinoGuide.heading).toBeVisible();
        await expect(productPageCasinoGuide.targetIconHomepage).toBeVisible();
        await expect(productPageCasinoGuide.targetIconFacebook).toBeVisible();
        await expect(productPageCasinoGuide.targetIconTwitter).toBeVisible();
      });

      await test.step(`clicks ${product} homepage Icon`, async () => {
        popupPromise = page.waitForEvent('popup');
        await productPageCasinoGuide.clickLinkToCasinoGuideWebSite();
      });

      await test.step(`validates new tab url: ${productUrl}`, async () => {
        const newTab = await popupPromise;

        await expect(newTab).toHaveURL(productUrl);
        await newTab.close();
      });
    });
  }
);

/**
 * Asserts the visibility of elements in the base page.
 *
 * This function ensures that all critical elements within the footer and header
 * components are visible. It delegates the checks to `assertVisibilityOfFooterElements`
 * and `assertVisibilityOfHeaderElements`.
 *
 * @param {Footer} footer - The Footer instance containing elements to be verified for visibility.
 * @param {Header} header - The Header instance containing elements to be verified for visibility.
 */
async function assertVisibilityBasePage(footer: Footer, header: Header) {
  await assertVisibilityOfFooterElements(footer);
  await assertVisibilityOfHeaderElements(header);
}

/**
 * Helper function to assert the visibility of elements in the footer.
 *
 * This function verifies that specific elements within the footer
 *
 * @param {Footer} footer
 */
async function assertVisibilityOfFooterElements(footer: Footer) {
  await test.step('assert visibility of footer elements', async () => {
    await expect(footer.footer).toBeVisible();
    await expect(footer.footerAbout).toBeVisible();
    await expect(footer.footerAffiliationCloud).toBeVisible();
    await expect(footer.footerCareers).toBeVisible();
    await expect(footer.footerCompany).toBeVisible();
    await expect(footer.footerContactEmail).toBeVisible();
    await expect(footer.footerCopyright).toBeVisible();
    await expect(footer.footerCopyrightFacebook).toBeVisible();
    await expect(footer.footerCopyrightInstagram).toBeVisible();
    await expect(footer.footerCopyrightLinkedIn).toBeVisible();
    await expect(footer.footerCopyrightTwitter).toBeVisible();
    await expect(footer.footerCopyrightSymbol).toBeVisible();
    await expect(footer.footerCopyrightCreatedBy).toBeVisible();
    await expect(footer.footerFinancialReports).toBeVisible();
    await expect(footer.footerGeneralPressReleases).toBeVisible();
    await expect(footer.footerGetInTouch).toBeVisible();
    await expect(footer.footerGovernance).toBeVisible();
    await expect(footer.footerInvestors).toBeVisible();
    await expect(footer.footerLogo).toBeVisible();
    await expect(footer.footerPlaybook).toBeVisible();
    await expect(footer.footerPrivacyPolicies).toBeVisible();
    await expect(footer.footerProducts).toBeVisible();
    await expect(footer.footerRaketechInfo).toBeVisible();
    await expect(footer.footerResponsibilities).toBeVisible();
    await expect(footer.footerSharesAndShareholders).toBeVisible();
    await expect(footer.footerSubscribe).toBeVisible();
    await expect(footer.footerWhatWeDo).toBeVisible();
    await expect(footer.footerWidgets).toBeVisible();
    await expect(footer.footerWhyInvestInUs).toBeVisible();
  }),
    { box: true };
}

/**
 * Helper function to assert the visibility of elements in the header.
 *
 * This function verifies that specific elements within the header
 *
 * @param {Header} header - - The Header instance containing the elements to assert.
 */
async function assertVisibilityOfHeaderElements(header: Header) {
  await test.step('assert visibility of header elements', async () => {
    await expect(header.headerAbout).toBeVisible();
    await expect(header.headerCareers).toBeVisible();
    await expect(header.headerContact).toBeVisible();
    await expect(header.headerInvestorRelation).toBeVisible();
    await expect(header.headerLogo).toBeVisible();
    await expect(header.headerNewsAndMedia).toBeVisible();
    await expect(header.headerPlaybook).toBeVisible();
    await expect(header.headerSearch).toBeVisible();
    await expect(header.headerWhatWeDo).toBeVisible();
  }),
    { box: true };
}

/**
 * Helper function to assert the visibility of elements in the main content.
 *
 * This function verifies that specific elements within the main content
 *
 * @param {MainContent} mainContent - The MainContent instance containing the elements to assert.
 */
async function assertVisibilityOfMainContent(mainContent: MainContent) {
  await test.step('assert visibility of main content', async () => {
    await expect(mainContent.container).toBeVisible();
  }),
    { box: true };
}

/**
 * Performs a search using the Header's Search functionality.
 *
 * This function navigates opens the Header Search Container and executes a search
 * with the provided item through the Header component.
 *
 * @param {Header} header - The Header instance that contains the search functionality.
 * @param {string} item - The item to search for.
 */
async function searchItem(header: Header, item: string) {
  await test.step('navigate to the Search Container', async () => {
    await header.searchItem(item);
  }),
    { box: true };
}

/**
 * Navigates to the Search Results using the provided href.
 *
 * This function searches through all links within the "Products Page" heading
 * to find a link that matches the specified href. If a matching link is found,
 * it clicks on the link to navigate to the corresponding page. If no matching
 * link is found, an error is thrown.
 *
 * @param {Page} page - The Playwright page instance to interact with the browser.
 * @param {string} href - The href substring to search for within the links.
 * @throws {Error} Throws an error if no matching link is found.
 */
async function goToProductsPage(page: Page, href: string) {
  const productsPageLocator = page
    .getByRole('heading', { name: 'Products Page' })
    .getByRole('link');

  const allLinks = await productsPageLocator.all();
  const allLinkHrefs = await Promise.all(
    allLinks.map((link) => link.getAttribute('href'))
  );

  for (let i = 0; i < allLinks.length; i++) {
    const linkHref = allLinkHrefs[i];
    if (linkHref?.includes(href)) {
      await allLinks[i].click();
      return;
    }
  }

  throw (new Error(`No link matching "${href}" found.`), { box: true });
}
