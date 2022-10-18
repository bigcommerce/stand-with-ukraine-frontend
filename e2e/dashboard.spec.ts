import { test, expect } from 'playwright-test-coverage';

test.describe.configure({ mode: 'serial' });

test('configure and publish widget', async ({ page }) => {
  await page.goto('dashboard/');

  // Verify Home page
  await page
    .getByRole('heading', { name: 'Help Ukraine by adding a widget to your store' })
    .click();
  await page.getByRole('button', { name: 'Add widget to your store' }).click();

  // Color
  await expect(page).toHaveURL(/\/dashboard\/#\/setup$/);
  await page.getByRole('img', { name: 'Blue colored widget' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Placement
  await page.locator('#placement-top-left').click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Charity
  await expect(page.locator('input#unicef')).toBeDisabled();
  await page.locator('label[for=razom]').click();
  await expect(page.locator('input#unicef')).not.toBeDisabled();
  await page.locator('label[for=unicef]').click();
  await expect(page.locator('input#razom')).toBeDisabled();
  await page.locator('label[for=unicef]').click();
  await page.locator('label[for=razom]').click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Modal
  await page.getByRole('tab', { name: 'Preview' }).click();
  await page.getByRole('heading', { name: 'Help the people of Ukraine!' }).click();
  await page
    .getByText('With each day, the war in Ukraine worsens at an alarming pace. Millions of civil')
    .click();
  await page.getByRole('tab', { name: 'Configure' }).click();
  await page
    .getByPlaceholder('Pop Up Title')
    .fill('Help the people of Ukraine! <3 And show support');
  await page.getByRole('tab', { name: 'Preview' }).click();
  await expect(
    page.getByRole('heading', { name: 'Help the people of Ukraine! <3 And show support' }),
  ).toBeVisible();
  await page.getByRole('tab', { name: 'Configure' }).click();
  await page.getByText('Reset to default').click();
  await expect(page.getByPlaceholder('Pop Up Title')).toHaveValue('Help the people of Ukraine!');
  await page.getByRole('button', { name: 'Publish' }).click();

  // Review
  await expect(page).toHaveURL(/dashboard\/#\/$/);
  await expect(page.getByText('Widget was published on your store')).toBeVisible();
  await expect(page.getByText('Widget Added')).toBeVisible();
});

test('unpublish widget', async ({ page }) => {
  await page.goto('dashboard/');

  // Verify widget has been published
  await expect(page.getByText('Widget Added')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'You added the widget to your store' }),
  ).toBeVisible();

  // Remove widget
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(
    page.getByLabel('Please tell us why did you decide to remove the widget?'),
  ).toBeVisible();
  await page
    .getByLabel('Please tell us why did you decide to remove the widget?')
    .fill('Changing my store');
  await page.locator('div[role="dialog"]').getByRole('button', { name: 'Remove' }).click();

  // Verify widget was removed
  await page.getByText('Widget was removed from your store').click();
  await page
    .getByRole('heading', { name: 'Help Ukraine by adding a widget to your store' })
    .click();
});
