import Navbar from "../src/component/navbar";
import Footer from "../src/component/footer";
import ArticleDetail from "../src/component/article-detail";
import OtherNewsSection from "../src/component/other-article-section";

export default function BlogNewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ArticleDetail />
      <OtherNewsSection />
      <Footer />
    </main>
  );
}