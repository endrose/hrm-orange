# hrm-orange ui automation simple

<h2>Example Automation test with playwright.</h2>

Run ui :

```bash
npx playwright test --ui
```

Run single file :

```bash
npx playwright test verifyErrorMessage.spec.js --headed
```

Run report :

```bash
npx playwright show-report
```

<h2>Allure Report</h2>
Generate report :

```bash
npm run generate-report
```

Or

```bash
npx allure generate ./allure-results --clean
```

Open report :

```bash
npm run open-report
```

Or

```bash
google-chrome --allow-file-access-from-files allure-report/index.html
```
