import { Montserrat, Roboto } from 'next/font/google';
import '@styles/globals.css';
import type { Metadata } from 'next';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '700', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Place quest',
  description: 'Sell and rent houses, apartments',
};

export default function RootLayout({
  children,
  footer,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[montserrat.variable, roboto.variable].join(' ')}
    >
      <body data-theme="light">
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
