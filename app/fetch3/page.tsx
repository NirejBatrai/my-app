// app/posts/page.tsx or similar

import Link from "next/link";
import { notFound } from "next/navigation";

// Define the Post type
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Constants
const LIMIT = 10;

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1");

  if (page < 1) notFound();

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const posts: Post[] = await res.json();

  const start = (page - 1) * LIMIT;
  const end = start + LIMIT;
  const paginatedPosts = posts.slice(start, end);

  if (paginatedPosts.length === 0) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Posts - Page {page}</h1>

      <div className="space-y-6">
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-white">{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-10">
        {page > 1 ? (
          <Link
            href={`?page=${page - 1}`}
            className="text-blue-600 hover:underline"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        {end < posts.length && (
          <Link
            href={`?page=${page + 1}`}
            className="text-blue-600 hover:underline"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
