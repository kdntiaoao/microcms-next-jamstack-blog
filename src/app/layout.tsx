import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: '日常のレシピブック',
  description:
    '毎日を彩る小さな発見と学びのレシピを提供。Markdownのヒントから旅行の楽しみ方、心を落ち着かせる瞑想の方法まで、日常をもっと豊かにするためのヒントが満載です。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
