import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Accommodations from '@/components/sections/accommodations';
import Gallery from '@/components/sections/gallery';
import Contact from '@/components/sections/contact';
import PlacesToVisit from '@/components/sections/places-to-visit';
import LocationMap from '@/components/sections/location-map';
import Reviews from '@/components/sections/reviews';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <Accommodations />
        <Gallery />
        <Reviews />
        <PlacesToVisit />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
