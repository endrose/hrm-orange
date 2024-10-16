const { test, expect } = require('@playwright/test');

test('Reset password', async ({ page }) => {
	await page.goto(
		'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
	);

	await Promise.all([
		page.waitForNavigation(),

		await page
			.locator(
				'.orangehrm-login-forgot p.orangehrm-login-forgot-header',
			)
			.click(),
	]);
	expect(page).toHaveURL(/requestPasswordResetCode/);

	await page.getByPlaceholder('Username').fill('Admin');

	await page
		.locator('.orangehrm-forgot-password-button--reset')
		.click();

	await page.waitForTimeout(5000);
	expect(page).toHaveURL(/sendPasswordReset/);

	const textSuccess = await page
		.locator('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title')
		.textContent();

	console.log(textSuccess);

	expect(textSuccess.includes('successfully')).toBeTruthy();
});
