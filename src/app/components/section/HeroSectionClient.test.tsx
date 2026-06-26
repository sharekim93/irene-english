import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HeroSectionClient from "./HeroSectionClient";

describe("HeroSectionClient", () => {
  it("renders the text-first hero with Selena imagery and canonical consultation actions", () => {
    const { container } = render(<HeroSectionClient />);

    expect(
      screen.getByRole("heading", {
        name: "영어를 잘 할 수밖에 없는 학습 시스템",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/학생중심 1:1 맞춤 수업에 최적화된 전문 선생님/).textContent,
    ).toBe(`학생중심 1:1 맞춤 수업에 최적화된 전문 선생님이 매일 확인하고
AI 셀레나 말하기 루틴으로 반복의 힘을 만듭니다`);
    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveAttribute(
      "href",
      "tel:010-3421-4383",
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveAttribute(
      "href",
      "https://pf.kakao.com/_auFFn/chat",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "href",
      "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
    );
    expect(container.querySelector('[data-testid="consult-actions"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="hero-character-backdrop"]')).toHaveClass(
      "rounded-full",
      "bg-brand-soft",
    );
    expect(container.querySelector("section")).toHaveClass(
      "bg-surface-container-low",
      "px-5",
      "pt-12",
      "pb-8",
    );
    expect(container.querySelector(".blur-3xl")).not.toBeInTheDocument();
    const characterImage = container.querySelector('img[alt=""]');
    expect(characterImage).toHaveClass("h-full", "w-full", "object-cover", "object-top");
  });
});
