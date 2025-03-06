import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactForm from '@/components/ui/ContactForm';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProperties />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
