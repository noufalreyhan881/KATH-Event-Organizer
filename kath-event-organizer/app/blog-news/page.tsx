import Navbar from "../src/component/navbar";
import Footer from "../src/component/footer";
import ArticleDetail from "../src/component/article-detail";
import OtherNewsSection from "../src/component/other-article-section";

export default async function BlogNewsPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  // Mock Data (Prisma removed)
  const mockArticle = {
    id: 1,
    title: "Introducing KATH Event Organizer",
    image: "/images/fa8073312e772a6fbf1c0ec2c2f307b5.jpg",
    createdAt: new Date(),
    content: "We are excited to launch KATH, your premier partner for creating unforgettable events. Our team is dedicated to bringing your vision to life with creativity and precision.",
  };

  const article = mockArticle;
  
  const otherArticles = [
    { ...mockArticle, id: 2, title: "Top 5 Event Trends" },
    { ...mockArticle, id: 3, title: "How to Choose Venue" },
    { ...mockArticle, id: 4, title: "The Art of Planning" }
  ];


  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Pastikan komponen ArticleDetail dan OtherNewsSection telah disesuaikan untuk menerima props */}
      <ArticleDetail article={article} />
      <OtherNewsSection articles={otherArticles} />
      <Footer />
    </main>
  );
}