import { client } from '@/libs/client';
import { Blog } from '@/types/blog';
import Link from 'next/link';

export default async function Home() {
  const data = await client.get<{ contents: Blog[] }>({ endpoint: 'blog' });
  const blogList = data.contents;

  return (
    <main>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
