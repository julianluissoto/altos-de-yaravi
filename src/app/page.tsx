import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Accommodations from '@/components/sections/accommodations';
import Gallery from '@/components/sections/gallery';
import Contact from '@/components/sections/contact';
import PlacesToVisit from '@/components/sections/places-to-visit';
import LocationMap from '@/components/sections/location-map';
import Reviews from '@/components/sections/reviews';
import { AnimatedSection } from '@/components/shared/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <Hero />
         <AnimatedSection>
          <Accommodations />
        </AnimatedSection>
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
        <AnimatedSection>
          <Reviews />
        </AnimatedSection>
        <AnimatedSection>
          <PlacesToVisit />
        </AnimatedSection>
        <AnimatedSection>
          <LocationMap />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
