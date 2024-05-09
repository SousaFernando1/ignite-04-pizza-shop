import { expect, test } from '@playwright/test'

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  await expect(
    page.getByText('-5% em relação a ontem', { exact: true }),
  ).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(
    page
      .locator('div')
      .filter({ hasText: /^20-5% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display month cancelled orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(
    page
      .locator('div')
      .filter({ hasText: /^200-5% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display month revenue amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 200,00', { exact: true })).toBeVisible()
  await expect(
    page.getByText('-10% em relação ao mês passado', { exact: true }),
  ).toBeVisible()
})
