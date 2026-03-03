import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Navbar from "../../../src/component/navbar";
import Footer from "../../../src/component/footer";

export default async function DeleteArticlePage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const article = await prisma.article.findUnique({
    where: { id: parseInt(searchParams.id) },
  });

  async function deleteArticle() {
    "use server";
    await prisma.article.delete({
      where: { id: parseInt(searchParams.id) },
    });
    redirect("/admin/blog-news");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-8">Hapus Artikel</h1>
        <div className="bg-white shadow-md rounded-lg p-8">
          <p className="text-gray-800 mb-4">
            Apakah Anda yakin ingin menghapus artikel dengan judul:
          </p>
          <p className="font-semibold text-lg mb-6">{article?.title}</p>
          <form action={deleteArticle} className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-200"
            >
              Ya, Hapus
            </button>
            <button
              type="button"
              onClick={() => redirect("/admin/blog-news")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded shadow transition duration-200"
            >
              Batal
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
