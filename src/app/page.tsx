import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Highlights from '@/components/sections/highlights';
import Accommodations from '@/components/sections/accommodations';
import Gallery from '@/components/sections/gallery';
import Explore from '@/components/sections/explore';
import LocationMap from '@/components/sections/location-map';
import Reviews from '@/components/sections/reviews';
import Contact from '@/components/sections/contact';
import { AnimatedSection } from '@/components/shared/animated-section';
import { FloatingWhatsapp } from '@/components/shared/floating-whatsapp';
import { ScrollToTop } from '@/components/shared/scroll-to-top';

export default function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />

      <main>
        <Hero />
        <Highlights />

        <AnimatedSection>
          <Accommodations />
        </AnimatedSection>

        <AnimatedSection>
          <Gallery />
        </AnimatedSection>

        <AnimatedSection>
          <Explore />
        </AnimatedSection>

        <AnimatedSection>
          <LocationMap />
        </AnimatedSection>

        <AnimatedSection>
          <Reviews />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsapp />
    </div>
  );
}
