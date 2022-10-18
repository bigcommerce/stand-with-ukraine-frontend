import { test, expect } from 'playwright-test-coverage';

test('widget and modal', async ({ page }) => {
  await page.goto('widget/');

  // Validate widget is showing
  await expect(page.getByText('Help the people of Ukraine!')).toBeVisible();

  // Open Modal
  await page.getByText('Support').click();

  // Verify Modal functions
  await expect(page.getByRole('heading', { name: 'Help the people of Ukraine!' })).toBeVisible();
  await expect(
    page.getByText(
      'With each day, the war in Ukraine worsens at an alarming pace. Millions of civil',
    ),
  ).toBeVisible();
  await expect(page.locator('strong:has-text("Razom")')).toBeVisible();
  await page
    .locator(
      'p:has-text("Razom, which means “together” in Ukrainian is providing critical humanitarian")',
    )
    .getByRole('link', { name: 'See more' })
    .click();

  // Validate Support link works
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#charity-razom').getByRole('link', { name: 'Support' }).click(),
  ]);
  await expect(page1).toHaveURL(/https:\/\/razomforukraine\.humanitru\.com/);
  await page1.close();
  await page.locator('#close-swu-modal').click();

  // Collapse Widget
  await page.locator('#close-swu-widget').click();
  await expect(page.getByText('Help the people of Ukraine!')).not.toBeVisible();

  // Expand Widget
  await page.locator('#swu-widget-flag').click();
  await expect(page.getByText('Help the people of Ukraine!')).toBeVisible();

  // Fully Close Widget
  await page.locator('#close-swu-widget').click();
  await page.locator('#close-swu-widget').click();
});
