const { test, expect } = require('@playwright/test');

test('Valid Login page', async ({ page }) => {
	// Navigate to the URL
	await page.goto(
		'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
	);

	await page.getByPlaceholder('Username').fill('Admin');
	await page
		.locator("input[placeholder='Password']")
		.fill('admin123');
	await page.locator("button[type='submit']").click();

	await page.waitForTimeout(5000);

	await expect(page).toHaveURL(/dashboard/);
	await page.locator('img.oxd-userdropdown-img').click();
	await page.getByText('Logout').click();

	await page.waitForTimeout(3000);
	await expect(page).toHaveURL(/login/);
});
