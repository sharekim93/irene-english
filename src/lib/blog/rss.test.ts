import { describe, expect, it, vi } from "vitest";

import { getBlogPosts, parseBlogRss, stripHtml, type BlogPost } from "./rss";

const fixedNow = new Date("2026-06-06T00:00:00.000Z");

const fallback: BlogPost[] = [
  {
    title: "fallback",
    link: "https://example.com/fallback",
    pubDate: fixedNow.toISOString(),
    summary: "fallback summary",
    tags: ["fallback"],
  },
];

describe("parseBlogRss", () => {
  it("parses RSS item fixtures into blog posts", () => {
    const posts = parseBlogRss(
      `
        <rss>
          <channel>
            <item>
              <title>첫 영어 루틴</title>
              <link>https://blog.naver.com/da_num/2231</link>
              <pubDate>Fri, 05 Jun 2026 09:30:00 +0900</pubDate>
              <description>매일 짧게 읽고 말하는 루틴입니다.</description>
              <category>초등영어</category>
              <category>루틴</category>
            </item>
          </channel>
        </rss>
      `,
      { now: fixedNow },
    );

    expect(posts).toHaveLength(1);
    expect(posts[0]).toMatchObject({
      title: "첫 영어 루틴",
      pubDate: "2026-06-05T00:30:00.000Z",
      summary: "매일 짧게 읽고 말하는 루틴입니다.",
      tags: ["초등영어", "루틴"],
    });
    expect(posts[0].link).toBe(
      "https://blog.naver.com/da_num/2231?fromRss=true&trackingCode=rss",
    );
  });

  it("decodes CDATA and strips HTML from title, summary, and categories", () => {
    const posts = parseBlogRss(
      `
        <rss>
          <channel>
            <item>
              <title><![CDATA[<b>파닉스 &amp; 리딩</b>]]></title>
              <link><![CDATA[https://blog.naver.com/da_num/2232]]></link>
              <pubDate>2026-06-05T00:00:00.000Z</pubDate>
              <description><![CDATA[
                <p>소리로 <strong>읽는</strong> 수업</p>
                <script>window.bad = true</script>
              ]]></description>
              <category><![CDATA[<span>파닉스</span>]]></category>
            </item>
          </channel>
        </rss>
      `,
      { now: fixedNow },
    );

    expect(posts[0].title).toBe("파닉스 & 리딩");
    expect(posts[0].summary).toBe("소리로 읽는 수업");
    expect(posts[0].tags).toEqual(["파닉스"]);
  });

  it("uses comma-separated Naver tag values as hashtags before category values", () => {
    const posts = parseBlogRss(
      `
        <rss>
          <channel>
            <item>
              <title>네이버 태그</title>
              <link>https://blog.naver.com/da_num/2236</link>
              <pubDate>2026-06-05T00:00:00.000Z</pubDate>
              <description>태그 테스트</description>
              <category><![CDATA[아이린 석성 교실]]></category>
              <tag><![CDATA[동백영어학원,초등영어,#파닉스,초등영어]]></tag>
            </item>
          </channel>
        </rss>
      `,
      { now: fixedNow },
    );

    expect(posts[0].tags).toEqual(["동백영어학원", "초등영어", "파닉스"]);
  });

  it("reads multiple tag elements and trims full-width comma separators", () => {
    const posts = parseBlogRss(
      `
        <rss>
          <channel>
            <item>
              <title>여러 태그</title>
              <link>https://blog.naver.com/da_num/2237</link>
              <pubDate>2026-06-05T00:00:00.000Z</pubDate>
              <description>태그 테스트</description>
              <tag>동백영어학원，석성초영어학원</tag>
              <tag>유아영어, 파닉스</tag>
            </item>
          </channel>
        </rss>
      `,
      { now: fixedNow },
    );

    expect(posts[0].tags).toEqual([
      "동백영어학원",
      "석성초영어학원",
      "유아영어",
      "파닉스",
    ]);
  });

  it("strips HTML entities and tags in standalone text", () => {
    expect(stripHtml("&lt;p&gt;Hello&nbsp;&amp;&nbsp;안녕&lt;/p&gt;")).toBe(
      "Hello & 안녕",
    );
  });

  it("extracts thumbnails from media tags and description images", () => {
    const posts = parseBlogRss(
      `
        <rss>
          <channel>
            <item>
              <title>미디어 썸네일</title>
              <link>https://blog.naver.com/da_num/2233</link>
              <pubDate>2026-06-05T00:00:00.000Z</pubDate>
              <media:thumbnail url="https://example.com/media.webp" />
              <description><![CDATA[
                <img src="https://example.com/description.jpg" alt="" />
              ]]></description>
            </item>
            <item>
              <title>본문 썸네일</title>
              <link>https://blog.naver.com/da_num/2234</link>
              <pubDate>2026-06-05T00:00:00.000Z</pubDate>
              <description><![CDATA[
                <p><img src="https://example.com/body.png" alt="" /></p>
              ]]></description>
            </item>
          </channel>
        </rss>
      `,
      { now: fixedNow },
    );

    expect(posts[0].thumbnail).toBe("https://example.com/media.webp");
    expect(posts[1].thumbnail).toBe("https://example.com/body.png");
  });

  it("uses the provided current date when pubDate is invalid", () => {
    const posts = parseBlogRss(
      `
        <rss>
          <channel>
            <item>
              <title>날짜 오류</title>
              <link>https://blog.naver.com/da_num/2235</link>
              <pubDate>not a date</pubDate>
              <description>날짜가 잘못된 글</description>
            </item>
          </channel>
        </rss>
      `,
      { now: fixedNow },
    );

    expect(posts[0].pubDate).toBe(fixedNow.toISOString());
  });

  it("returns an empty list when RSS has no items", () => {
    expect(parseBlogRss("<rss><channel></channel></rss>")).toEqual([]);
  });
});

describe("getBlogPosts", () => {
  it("returns fallback posts when a successful fetch has an empty item list", async () => {
    const fetcher = vi.fn(async () => new Response("<rss><channel /></rss>"));

    await expect(
      getBlogPosts(10, {
        fallback,
        fetcher: fetcher as unknown as typeof fetch,
        now: fixedNow,
      }),
    ).resolves.toEqual(fallback);
  });

  it("returns fallback posts when fetch fails", async () => {
    const fetcher = vi.fn(async () => {
      throw new Error("network unavailable");
    });

    await expect(
      getBlogPosts(10, {
        fallback,
        fetcher: fetcher as unknown as typeof fetch,
        now: fixedNow,
      }),
    ).resolves.toEqual(fallback);
  });
});
