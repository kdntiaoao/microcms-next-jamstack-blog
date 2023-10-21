import { client } from '@/libs/client';
import { Blog } from '@/types/blog';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: Blog) => ({ id: content.id }));
  return paths;
}

export default async function BlogId({ params }: Props) {
  const id = params.id;
  const blog = await client.get<Blog>({ endpoint: 'blog', contentId: id });

  return (
    <main className="markdown-content">
      <Link href="/">TOP</Link>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </main>
  );
}
