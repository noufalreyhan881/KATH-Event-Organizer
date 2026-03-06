import BlogDetailPage from "@/features/blog/pages/BlogDetailPage";

export default async function Page({ params }: { params: { slug: string } }) {
  // The page component now only passes the slug to the feature component.
  // Data fetching and rendering are handled inside BlogDetailPage.
  return <BlogDetailPage slug={params.slug} />;
}