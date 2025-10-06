import '@styles/globals.css';
import DrawerProvider from '@/store/drawer';
import ThemeProvider from '@/store/theme';
import { cookies } from 'next/headers';
import { Montserrat, Roboto } from 'next/font/google';
import { ToasterProvider } from '@/components';
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const mode = cookieStore.get('mode');

  return (
    <html
      lang="en"
      className={[montserrat.variable, roboto.variable].join(' ')}
      data-theme={`${mode?.value ?? 'light'}`}
    >
      <ThemeProvider>
        <DrawerProvider>
          <body>
            <ToasterProvider />
            {children}
          </body>
        </DrawerProvider>
      </ThemeProvider>
    </html>
  );
}
