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
