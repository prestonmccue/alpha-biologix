import type { Metadata } from 'next';
import { Manrope, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import { LanguageSelector } from '@/components/language-selector';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Alpha Biologix | Premium Peptides for Medical Professionals',
  description:
    'Alpha Biologix supplies pharmaceutical-grade peptides to licensed medical professionals with verified quality, transparent documentation, and nationwide distribution.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${ibmPlexSans.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <LanguageSelector />
        </LanguageProvider>
      </body>
    </html>
  );
}
