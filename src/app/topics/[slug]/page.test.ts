import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";

describe("topic page metadata", () => {
  it("places local SEO primary keywords in local topic titles", async () => {
    const seokseong = await generateMetadata({
      params: Promise.resolve({ slug: "suksung-elementary-english" }),
    });
    const dongbaek = await generateMetadata({
      params: Promise.resolve({ slug: "dongbaek-station-english" }),
    });

    expect(seokseong.title).toBe(
      "석성초 영어학원 | 삼성영어 셀레나 아이린 석성",
    );
    expect(seokseong.keywords).toEqual(
      expect.arrayContaining(["석성초 영어학원", "석성초 근처 영어학원"]),
    );
    expect(dongbaek.title).toBe(
      "동백역 영어학원 | 삼성영어 셀레나 아이린 석성",
    );
    expect(dongbaek.keywords).toEqual(
      expect.arrayContaining(["동백역 영어학원", "동백역 중등 영어"]),
    );
  });
});
