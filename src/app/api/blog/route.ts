import { getBlogPosts } from "@/lib/blog/rss";

export const revalidate = 1800;

export async function GET() {
  const posts = await getBlogPosts(20);

  return Response.json(
    { posts },
    {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
      },
    },
  );
}
