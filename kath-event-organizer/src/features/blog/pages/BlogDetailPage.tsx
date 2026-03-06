import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ArticleDetail from "@/features/blog/components/article-detail";
import OtherNewsSection from "@/features/blog/components/other-article-section";

// Assuming types are defined somewhere like src/features/blog/types.ts
type Article = {
  id: number;
  title: string;
  image: string;
  createdAt: Date;
  content: string;
};

interface BlogDetailPageProps {
  slug: string;
}

export default async function BlogDetailPage({ slug }: BlogDetailPageProps) {
  // Mock Data (Prisma removed)
  // In a real application, you would use slug to fetch the article data
  // e.g., const article = await getArticleBySlug(slug);

  const mockArticle: Article = {
    id: 1,
    title: "Introducing KATH Event Organizer",
    image: "/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg",
    createdAt: new Date(),
    content: `You are reading an article with slug: ${slug}. We are excited to launch KATH, your premier partner for creating unforgettable events. Our team is dedicated to bringing your vision to life with creativity and precision.`,
  };

  const article = mockArticle;
  
  const otherArticles: Article[] = [
    { ...mockArticle, id: 2, title: "Top 5 Event Trends" },
    { ...mockArticle, id: 3, title: "How to Choose Venue" },
    { ...mockArticle, id: 4, title: "The Art of Planning" }
  ];


  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ArticleDetail article={article} />
      <OtherNewsSection articles={otherArticles} />
      <Footer />
    </main>
  );
}