import HeroSectionClient from "./HeroSectionClient";
import { getBlogPosts } from "@/lib/blog/rss";

export default async function HeroSection() {
  const posts = await getBlogPosts(3);

  return <HeroSectionClient posts={posts} />;
}
