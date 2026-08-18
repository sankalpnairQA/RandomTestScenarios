//  run command in terminal as npx playwright codegen {URl}

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('div:nth-child(26) > .product-image-wrapper > .choose > .nav > li > a').click();
  await page.getByText('Rs.').click();
  await page.getByText('Availability: In Stock').click();
  await page.getByText('Condition: New').click();
  await page.getByText('Brand: Polo').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('button', { name: 'Continue On Cart' }).click();
  await page.getByRole('link', { name: ' API Testing' }).click();
});