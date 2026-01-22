import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Achievements from '@/components/Achievements';
import Admissions from '@/components/Admissions';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Gallery />
      <Achievements />
      <Admissions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
