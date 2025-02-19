import { test, expect } from '@playwright/test'

test('test-03', async ({ page }) => {
    // going to flipkart website
    await page.goto('https://www.flipkart.com/');

    // validating search box
    await page.getByPlaceholder('Search for Products, Brands').click();
    await page.getByPlaceholder('Search for Products, Brands').fill('i phone 16 pro max');
    await page.getByPlaceholder('Search for Products, Brands').press('Enter');
    
    // taking screenshot
    await page.getByRole('link', { name: 'Apple iPhone 16 Pro Max (White Titanium, 256 GB) Add to Compare Apple iPhone 16' }).click();
    await page.screenshot({ path: './screenshots/iphone.jpeg' });
});