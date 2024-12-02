import { defineConfig, devices } from '@playwright/test';
import environmentBaseUrl from './tests/utils/environmentBaseUrl';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: environmentBaseUrl.production.raketech,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    testIdAttribute: 'id',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api',
      use: {
        baseURL: environmentBaseUrl.swapi.homepage,
        headless: true,
      },
      testMatch: 'tests/api/*.spec.ts',
    },

    {
      name: 'ui',
      testMatch: 'tests/ui/*.spec.ts',
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'tests/ui/*.spec.ts',
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      testMatch: 'tests/ui/*.spec.ts',
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      testMatch: 'tests/ui/*.spec.ts',
    },
  ],
});
