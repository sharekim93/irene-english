import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Footer from "./Footer";

describe("Footer", () => {
  it("uses the same warm surface family as the home hero", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveClass(
      "bg-surface-container-low",
      "text-gray-700",
      "border-border-warm",
    );
    expect(footer).not.toHaveClass("bg-gray-900", "text-white");
  });

  it("keeps the phone consultation link available", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: "전화 010-3421-4383" }),
    ).toHaveAttribute("href", "tel:010-3421-4383");
  });
});
