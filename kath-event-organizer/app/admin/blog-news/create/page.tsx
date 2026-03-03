import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Navbar from "../../../src/component/navbar";
import Footer from "../../../src/component/footer";

export default function CreateArticlePage() {
  async function createArticle(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const image = formData.get("image") as string;

    await prisma.article.create({
      data: {
        title,
        content,
        image,
      },
    });

    redirect("/admin/blog-news");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tambah Artikel Baru</h1>
        <form action={createArticle} className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Judul Artikel
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
              URL Gambar
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
              Konten Artikel
            </label>
            <textarea
              name="content"
              id="content"
              rows={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-200"
            >
              Simpan Artikel
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
