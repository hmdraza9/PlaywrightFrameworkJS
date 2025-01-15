```bash
npx playwright test test
```
OR
```bash
npx playwright test google
```

Set the base URL for tests 'http://google.com/' or use `process.env.BASE_URL`. 

Execute this to use `process`:
```bash
npm install --save-dev @types/node

```


to DEBUG - Add '--debug' after the test command, for example:
npx playwright test google --debug
npx playwright test test --debug

.
.


****Page / Context / Browser****

*Pages open in same browser window but under same context and same browser.
When Context is different but under the same browser, two windows open and we still see one chromium in task bar of the computer.
When Browser is different (hence the context also is different), then we see additional window chromium opened in task bar of the computer.*


#### Install Playwright & Select Configurations
- npm init playwright@latest

Playwright will download the browsers needed as well as create the following files.

- node_modules
- playwright.config.js
- package.json
- package-lock.json
- tests/
    example.spec.js
- tests-examples/
    demo-todo-app.spec.js

  
#### dotenv Package Installation Command
- npm install dotenv --save

#### csv-parse Package Installation Command
- npm install csv-parse

#### faker-js plugin for test data generation
- npm install @faker-js/faker --save-dev

#### luxon plugin for custom dates
- npm install --save luxon

## How to update to playwright to the latest version
- npm install -D @playwright/test@latest
- npx playwright install --with-deps     #Also download new browser binaries and their dependencies:

## Playwright Important Commands

  npx playwright install
   - Install Browsers manually.
    
  npx playwright test
   - Runs the end-to-end tests.

  npx playwright test --ui
   - Starts the interactive UI mode.

  npx playwright test --project=chromium
   - Runs the tests only on Desktop Chrome.

  npx playwright test example
  -  Runs the tests in a specific file.

  npx playwright test --debug
  - Runs the tests in debug mode.

  npx playwright codegen
- Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

### And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

## Allure Report with Playwright [Screenshots, Videos & Traces]
- Step1: Install Allure Report command-line tool
  ### npm install -g --save-dev allure-commandline
  
- Step2: Install the Allure Playwright adapter.
  ### npm install --save-dev allure-playwright

- Step3: Add below config in playwright.config.js file.
  ### reporter:[
  ### ['html'],
  ### ['allure-playwright']
  ### ],

- Step4: Run Playwright tests.
  ### npx playwright test

- Step5: Generate Allure Report
  ### npx allure serve allure-results

  or

  ### allure generate allure-results --clean
  ### allure open


## Install BDD Cucumber for playwright
- npm install playwright @cucumber/cucumber@latest