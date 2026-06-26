import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ConsultActions from "./ConsultActions";
import { siteConfig } from "@/config/site";

describe("ConsultActions", () => {
  it("renders canonical consultation actions with correct destinations", () => {
    render(<ConsultActions includeMap />);

    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveAttribute(
      "href",
      siteConfig.telHref,
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveAttribute(
      "href",
      siteConfig.kakaoChannelChatUrl,
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "href",
      siteConfig.bookingUrl,
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(screen.getByRole("link", { name: "네이버 지도" })).toHaveAttribute(
      "href",
      siteConfig.placeUrl,
    );
    expect(screen.getByRole("link", { name: "네이버 지도" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: "네이버 지도" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("keeps actions touch-friendly and wraps on narrow screens", () => {
    const { container } = render(<ConsultActions includeMap align="start" />);

    const group = container.querySelector('[data-testid="consult-actions"]');

    expect(group).toHaveClass("flex", "flex-col", "gap-3", "sm:flex-row", "sm:flex-wrap");
    expect(screen.getByRole("link", { name: "전화상담하기" })).toHaveClass(
      "min-h-11",
      "brand-primary-action",
      "brand-focus-ring",
    );
    expect(screen.getByRole("link", { name: "카카오톡 상담" })).toHaveClass(
      "min-h-11",
      "brand-secondary-action",
      "brand-kakao-action",
      "brand-focus-ring",
    );
    expect(screen.getByRole("link", { name: "네이버 예약" })).toHaveClass(
      "min-h-11",
      "brand-secondary-action",
      "brand-naver-action",
      "brand-focus-ring",
    );
    expect(screen.getByRole("link", { name: "네이버 지도" })).toHaveClass(
      "min-h-11",
      "brand-secondary-action",
      "brand-naver-action",
      "brand-focus-ring",
    );
  });
});
