import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navibar from './component/Shared/Navibar';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={notoSans.className}>
        <Navibar />
        {children}
      </body>
    </html>
  );
}
