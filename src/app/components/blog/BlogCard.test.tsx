import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { BlogPost } from "@/lib/blog/rss";
import BlogCard from "./BlogCard";

const post: BlogPost = {
  title: "아이린 영어 학습 이야기",
  link: "https://example.com/blog/post",
  pubDate: "2026-06-05T00:00:00.000Z",
  summary: "초등 영어 루틴을 소개합니다.",
  tags: ["초등영어", "파닉스"],
};

describe("BlogCard", () => {
  it("labels the external blog link as 자세히 보기", () => {
    render(<BlogCard post={post} />);

    expect(screen.getByRole("link", { name: "자세히 보기" })).toHaveAttribute(
      "href",
      post.link,
    );
  });

  it("uses the Irene English fallback when no thumbnail is provided", () => {
    render(<BlogCard post={post} />);

    expect(screen.getByText("Irene English Note")).toBeInTheDocument();
    expect(screen.getByText("아이린 석성 학습 이야기")).toBeInTheDocument();
    expect(
      screen
        .getByTestId("blog-image-fallback")
        .querySelector(".rounded-full"),
    ).not.toBeInTheDocument();
  });
});
