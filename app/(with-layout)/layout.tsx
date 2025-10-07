import '@styles/globals.css';

export default async function WithLayout({
  children,
  footer,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
