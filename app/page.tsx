import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SocialSection from '@/components/SocialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}