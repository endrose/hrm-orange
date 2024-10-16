const { test, expect } = require('@playwright/test');
const { log } = require('console');

test('Verify error message', async ({ page }) => {
	//
	await page.goto(
		'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
	);
	await page.getByPlaceholder('Username').fill('Admin');
	await page
		.locator("input[placeholder='Password']")
		.fill('admin123*');
	await page.locator("button[type='submit']").click();

	await page.waitForTimeout(5000);

	const message = await page
		.locator('.oxd-alert-content-text')
		.textContent();

	console.log('Error message : ' + message);

	expect(message === 'Invalid credentials').toBeTruthy();
});
