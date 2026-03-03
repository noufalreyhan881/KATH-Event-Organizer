import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Navbar from "../../src/component/navbar";
import Footer from "../../src/component/footer";

async function deleteArticle(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  if (!id) return;

  await prisma.article.delete({
    where: { id },
  });

  revalidatePath("/admin/blog-news");
}

export default async function AdminBlogNewsPage() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manajemen Berita & Blog</h1>
          <Link
            href="/admin/blog-news/create"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-200"
          >
            + Tambah Artikel Baru
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Judul Artikel
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tanggal Dibuat
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 font-medium">{article.title}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-600">
                      {new Date(article.createdAt).toLocaleDateString("id-ID")}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link
                      href={`/admin/blog-news/edit?id=${article.id}`}
                      className="text-blue-600 hover:text-blue-900 font-medium mr-4"
                    >
                      Edit
                    </Link>
                    <form action={deleteArticle} className="inline ml-4">
                      <input type="hidden" name="id" value={article.id} />
                      <button type="submit" className="text-red-600 hover:text-red-900 font-medium">
                        Hapus
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </main>
  );
}