import { expect, test } from "@playwright/test";

test("home exposes primary renewal CTAs", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: /블로그/ }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /오시는 길/ }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /전화|상담/ }).first()).toBeVisible();
});

test("blog and contact pages render key actions", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: /학원 소식|블로그/ })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "네이버 블로그 열기" }),
  ).toBeVisible();

  await page.goto("/contact");
  await expect(
    page.getByRole("heading", { name: "상담과 방문 안내", level: 1 }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /네이버 지도/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /전화/ }).first()).toHaveAttribute(
    "href",
    /^tel:/,
  );
});
