import Navbar from "../src/component/navbar";
import Footer from "../src/component/footer";
import ArticleDetail from "../src/component/article-detail";
import OtherNewsSection from "../src/component/other-article-section";
import { prisma } from "@/lib/prisma"; // Pastikan path ini sesuai dengan setup Prisma Anda

export default async function BlogNewsPage({
  searchParams,
}: {
  searchParams: { id?: string };
}) {
  let article;
  if (searchParams.id) {
    article = await prisma.article.findUnique({
      where: { id: parseInt(searchParams.id) },
    });
  } else {
    article = await prisma.article.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }

  const otherArticles = await prisma.article.findMany({
    where: {
      id: {
        not: article?.id,
      },
    },
    orderBy: { createdAt: "desc" },
    take: 4,
  });


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