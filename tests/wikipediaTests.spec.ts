import { test, expect } from '@playwright/test'

test('Wikipedia Tests', async ({ page }) => {
    // going to wikipedia website
    await page.goto('https://www.wikipedia.org/');

    // clicking english button
    await page.getByRole('link', { name: 'English' }).click();

    // asserting the Welcome heading
    await expect(page.locator('[id="Welcome_to_Wikipedia"]')).toBeVisible();

    // asserting history button
    await page.getByRole('link', { name: 'View history' }).first().click();
    await expect(page.locator('#firstHeading')).toContainText('Main Page: Revision history');

    // asserting log in button
    await page.getByRole('link', { name: 'Log in' }).first().click();
    await expect(page.locator('#firstHeading')).toContainText('Log in');

    // validating search box
    await page.getByLabel('Search Wikipedia').click();
    await page.getByLabel('Search Wikipedia').fill('Porsche');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('#firstHeading')).toContainText('Porsche');
});