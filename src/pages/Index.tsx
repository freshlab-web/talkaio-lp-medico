
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntegrationCarousel from '@/components/IntegrationCarousel';
import Problem from '@/components/Problem';
import Benefits from '@/components/Benefits';
import Audience from '@/components/Audience';
import Technology from '@/components/Technology';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <IntegrationCarousel />
      <Problem />
      <Benefits />
      <Audience />
      <Technology />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
