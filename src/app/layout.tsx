import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Altos de Yaraví | Cabañas y Refugios en Embalse, Calamuchita',
  description: 'Descubre nuestros refugios y cabañas en Embalse de Calamuchita, Córdoba. Un lugar ideal para el descanso, la naturaleza y la aventura. ¡Reserva tu estancia!',
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
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Belleza&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Altos de Yaraví | alojamiento en Embalse",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "El Yaraví 72",
              "addressLocality": "Embalse",
              "addressRegion": "Córdoba",
              "postalCode": "5856",
              "addressCountry": "AR"
            },
            "telephone": "",
            "priceRange": "$$",
            "image": "https://res.cloudinary.com/julian-soto/image/upload/v1760468586/altos%20de%20yaravi/20251003_131956_cpxqtp.jpg",
            "description": "Departamentos en Embalse de Calamuchita, Córdoba. Ideal para el descanso, la naturaleza y la aventura.",
            "url": "https://altosdeyaravi.com.ar" // Reemplazar con tu URL final
          }) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
