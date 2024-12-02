## Dependencies

- Playwright v1.49.0
- Node v21.7.1
- npm v10.8.2
- VSCode 1.95.3

> Pre requirements:

- [iTerm setup](https://iterm2.com/documentation-one-page.html) (macOS only)
- [Playwright setup](https://playwright.dev/docs/intro#installing-playwright)
- [Node.js and npm setup](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [VS Code setup](https://code.visualstudio.com/learn/get-started/basics)

## Fork and clone the project

1. Copy the project URL https://github.com/Miguel-Barca/raketech-technical-challenge.git;
2. Fork the project following the [GitHub instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo) - (use the parameter --clone=true);
3. Navigate to project directory `cd raketech-technical-challenge`

## Run the project

- Through the terminal:
  - navigate to the project folder;
  - run the following script commands:
    - Part One: UI Test

    ```console
    npm run test:ui:crossBrowser
    ```
    - Part Two: API Test
    ```console
    npm run test:api
    ```

- Through VSCode:
  - [Playwright - getting started with VSCode](https://playwright.dev/docs/getting-started-vscode);
