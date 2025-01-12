import type { Metadata } from 'next';
import { Josefin_Sans, Poppins } from 'next/font/google';
import './globals.css';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins',
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Josefin',
});

export const metadata: Metadata = {
  title: 'KoinX',
  description:
    'KoinX is a cutting-edge financial technology company specializing in providing a platform for calculating taxes for cryptocurrency investors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' >
      <body className={`${poppinsFont.variable} ${josefinSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
