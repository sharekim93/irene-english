import React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { siteConfig } from "@/config/site";
import Location from "./Location";

vi.mock("motion/react", () => ({
  motion: {
    div: (
      props: React.ComponentProps<"div"> & {
        animate?: unknown;
        initial?: unknown;
        transition?: unknown;
        viewport?: unknown;
        whileInView?: unknown;
      },
    ) => {
      const domProps = { ...props };

      delete domProps.animate;
      delete domProps.initial;
      delete domProps.transition;
      delete domProps.viewport;
      delete domProps.whileInView;

      return <div {...domProps} />;
    },
  },
}));

vi.mock("next/image", () => ({
  default: ({
    alt,
    src,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    src?: string | { src: string };
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={typeof src === "string" ? src : src?.src} {...props} />
  ),
}));

vi.mock("react-naver-maps", () => ({
  Container: ({
    children,
    ...props
  }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => (
    <div data-testid="naver-map-container" {...props}>
      {children}
    </div>
  ),
  Marker: () => <div data-testid="naver-map-marker" />,
  NaverMap: ({ children }: React.PropsWithChildren) => (
    <div data-testid="naver-map">{children}</div>
  ),
  NavermapsProvider: ({ children }: React.PropsWithChildren) => (
    <div data-testid="naver-map-provider">{children}</div>
  ),
}));

describe("Location", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  });

  it("keeps the static location fallback when the Naver client id is missing", () => {
    delete process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;

    render(<Location />);

    expect(screen.getByText(siteConfig.name)).toBeInTheDocument();
    expect(screen.getByText(/위도/)).toHaveTextContent(
      String(siteConfig.coordinates.latitude),
    );
    expect(screen.queryByTestId("naver-map")).not.toBeInTheDocument();
  });

  it("always renders the Naver map link", () => {
    render(<Location />);

    expect(
      screen.getByRole("link", { name: "네이버 지도 열기" }),
    ).toHaveAttribute("href", siteConfig.placeUrl);
  });

  it("renders the mocked Naver map when the client id is present", () => {
    process.env.NEXT_PUBLIC_NAVER_CLIENT_ID = "test-client-id";

    render(<Location />);

    expect(screen.getByTestId("naver-map-provider")).toBeInTheDocument();
    expect(screen.getByTestId("naver-map")).toBeInTheDocument();
    expect(screen.getByTestId("naver-map-marker")).toBeInTheDocument();
  });
});
