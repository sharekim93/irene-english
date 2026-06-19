import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { topicPages } from "@/config/site";
import LocalTopicPage from "./LocalTopicPage";

const seokseongTopic = topicPages.find(
  (topic) => topic.slug === "suksung-elementary-english",
);

if (!seokseongTopic || seokseongTopic.intent !== "local") {
  throw new Error("Missing local SEO test fixture");
}

function expectLinkWithHref(name: string, href: string | RegExp) {
  const links = screen.getAllByRole("link", { name });

  expect(
    links.some((link) => {
      const actualHref = link.getAttribute("href") ?? "";

      return typeof href === "string" ? actualHref === href : href.test(actualHref);
    }),
  ).toBe(true);
}

describe("LocalTopicPage", () => {
  it("renders local SEO content, program links, FAQs, nearby links, and CTAs", () => {
    render(<LocalTopicPage topic={seokseongTopic} />);

    expect(
      screen.getByRole("heading", { name: "석성초 영어학원 찾는 학부모님께" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("석성초 학부모님이 자주 고민하는 영어 시작점"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Hey! Hazel 자세히 보기" }),
    ).toHaveAttribute("href", "/programs/hey-hazel");
    expect(
      screen.getByText("석성초 저학년도 수업이 가능한가요?"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "동백역 영어학원 안내" }),
    ).toHaveAttribute("href", "/topics/dongbaek-station-english");
    expectLinkWithHref("전화상담하기", "tel:010-3421-4383");
    expectLinkWithHref("카카오 상담", "https://pf.kakao.com/_auFFn/chat");
    expectLinkWithHref(
      "네이버 예약",
      "https://m.booking.naver.com/booking/6/bizes/1456434/items/6925790",
    );
    expectLinkWithHref("네이버 지도", /map\.naver\.com/);
  });
});
