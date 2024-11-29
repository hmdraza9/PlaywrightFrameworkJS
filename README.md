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
