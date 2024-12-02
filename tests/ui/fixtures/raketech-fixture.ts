import { test as base } from '@playwright/test';
import Footer from '../pages/footer';
import Header from '../pages/header';
import RaketechHomepage from '../pages/raketechHomepage';
import ProductPageCasinoGuide from '../pages/productPageCasinoGuide';
import SearchPage from '../pages/searchPage';
import MainContent from '../pages/mainContent';

type MyFixtures = {
  mainContentHomepage: MainContent;
  raketechHomepage: RaketechHomepage;
  productPageCasinoGuide: ProductPageCasinoGuide;
  searchPage: SearchPage;
};

export const test = base.extend<MyFixtures>({
  mainContentHomepage: async ({ page }, use) => {
    await use(new MainContent(page));
  },
  raketechHomepage: async ({ page }, use) => {
    await use(new RaketechHomepage(page));
  },
  productPageCasinoGuide: async ({ page }, use) => {
    await use(new ProductPageCasinoGuide(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
});

export { Footer, Header, MainContent };
export { expect, Page } from '@playwright/test';
