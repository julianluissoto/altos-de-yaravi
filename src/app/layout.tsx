import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.altosdeyaravi.com.ar'),
  title: 'Altos de Yaraví | Departamentos en Embalse, Calamuchita',
  description:
    'Dos departamentos equipados a 300 metros del lago de Embalse, Valle de Calamuchita, Córdoba. Ideales para descansar en familia. Consultá disponibilidad.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Altos de Yaraví | alojamiento en Embalse",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "El Yaraví 75",
                "addressLocality": "Embalse",
                "addressRegion": "Córdoba",
                "postalCode": "5856",
                "addressCountry": "AR"
              },
              "telephone": "",
              "priceRange": "$$",
              "image": "https://res.cloudinary.com/julian-soto/image/upload/v1760468586/altos%20de%20yaravi/20251003_131956_cpxqtp.jpg",
              "description": "Dos departamentos a 300 metros del lago de Embalse, Valle de Calamuchita, Córdoba. Ideales para el descanso en familia.",
              "url": "https://www.altosdeyaravi.com.ar"
            })
          }}
        />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
