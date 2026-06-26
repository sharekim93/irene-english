import { expect, test } from "@playwright/test";

test("home exposes primary design-system consultation actions", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "영어를 잘 할 수밖에 없는 학습 시스템",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "전화상담하기" }).first()).toHaveAttribute(
    "href",
    "tel:010-3421-4383",
  );
  await expect(page.getByRole("link", { name: "카카오톡 상담" }).first()).toHaveAttribute(
    "href",
    "https://pf.kakao.com/_auFFn/chat",
  );
  await expect(page.getByRole("link", { name: "네이버 예약" }).first()).toHaveAttribute(
    "href",
    "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
  );
  await expect(page.getByRole("link", { name: "오시는 길" }).first()).toBeVisible();
});

test("blog and contact pages render key local-service actions", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: /학원 소식|블로그/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "네이버 블로그 열기" })).toBeVisible();

  await page.goto("/contact");
  await expect(
    page.getByRole("heading", { name: "상담과 방문 안내", level: 1 }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "전화상담하기" }).first()).toHaveAttribute(
    "href",
    "tel:010-3421-4383",
  );
  await expect(page.getByRole("link", { name: "카카오톡 상담" }).first()).toHaveAttribute(
    "href",
    "https://pf.kakao.com/_auFFn/chat",
  );
  await expect(page.getByRole("link", { name: "네이버 예약" }).first()).toHaveAttribute(
    "href",
    "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
  );
  await expect(page.getByRole("link", { name: /네이버 지도/ }).first()).toBeVisible();
});
