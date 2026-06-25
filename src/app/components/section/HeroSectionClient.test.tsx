import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HeroSectionClient from "./HeroSectionClient";

describe("HeroSectionClient", () => {
  it("renders the text-first hero with the Selena character and no blog card deck", () => {
    const { container } = render(<HeroSectionClient />);

    expect(
      screen.getByRole("heading", {
        name: "영어를 잘 할 수밖에 없는 학습 시스템",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/학생중심 1:1 맞춤 수업에 최적화된 전문 선생님/),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveAttribute(
      "href",
      "tel:010-3421-4383",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "href",
      "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
    );
    expect(
      screen.queryByRole("link", {
        name: "처음 영어를 시작하는 아이에게 필요한 루틴 자세히 보기",
      }),
    ).not.toBeInTheDocument();
    expect(container.querySelector(".rounded-\\[2rem\\]")).not.toBeInTheDocument();
    expect(
      container.querySelector('[data-testid="hero-character-backdrop"]'),
    ).toBeInTheDocument();
    expect(container.querySelector(".blur-3xl")).not.toBeInTheDocument();
    expect(container.querySelector("section")).toHaveClass(
      "bg-surface-container-low",
    );
    expect(container.querySelector("section")).not.toHaveClass("bg-surface-page");
    expect(container.querySelector("section")).toHaveClass("pt-12", "pb-8");
    expect(container.querySelector("section")).not.toHaveClass("py-14");
    expect(container.querySelector(".min-h-\\[500px\\]")).not.toBeInTheDocument();
    expect(container.querySelector('img[alt=""]')).toBeInTheDocument();
  });
});
