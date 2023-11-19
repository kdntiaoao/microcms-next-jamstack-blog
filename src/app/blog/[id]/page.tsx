import { client } from '@/libs/client';
import { Blog } from '@/types/blog';
import Link from 'next/link';
import { loadDefaultJapaneseParser } from 'budoux';

type Props = {
  params: { id: string };
};

const parser = loadDefaultJapaneseParser();

export async function generateStaticParams() {
  const data = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content: Blog) => ({
    id: content.id,
  }));
  return paths;
}

export default async function BlogId({ params }: Props) {
  const id = params.id;
  const blog = await client.get<Blog>({ endpoint: 'blog', contentId: id });

  const dateToString = (date: string | Date) => {
    const _date = new Date(date);
    return `${_date.getFullYear()}/${_date.getMonth() + 1}/${_date.getDate()}`;
  };

  return (
    <main className="markdown-content">
      <Link href="/">TOP</Link>
      <h1>{blog.title}</h1>
      <time dateTime={blog.publishedAt}>{dateToString(blog.publishedAt)}</time>
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{
          __html: `${parser.translateHTMLString(
            '<div>' + blog.body + '</div>'
          )}`,
        }}
      ></div>
    </main>
  );
}
