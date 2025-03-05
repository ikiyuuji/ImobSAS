
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/ui/HeroSection';
import ServiceCard from '../components/ui/ServiceCard';
import FeaturedProperties from '../components/ui/FeaturedProperties';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import ContactForm from '../components/ui/ContactForm';
import Footer from '../components/ui/Footer';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';
import { FileText, Home, Award, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth reveal animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Home className="h-6 w-6" />,
      title: 'Compra e Venda',
      description: 'Encontre o imóvel dos seus sonhos ou venda o seu com segurança e o melhor valor de mercado.',
      link: '/servicos/compra-venda',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Regularização',
      description: 'Regularize seu imóvel com nossa equipe especializada, resolvendo pendências documentais.',
      link: '/servicos/regularizacao',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Avaliação',
      description: 'Avaliação profissional do seu imóvel baseada em critérios técnicos e mercadológicos.',
      link: '/servicos/avaliacao',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Consultoria',
      description: 'Consultoria especializada para investimentos imobiliários e questões relacionadas.',
      link: '/servicos/consultoria',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
                Nossos Serviços
              </h2>
              <p className="text-gray-600">
                Oferecemos uma gama completa de serviços imobiliários para atender todas as suas necessidades, desde a busca pelo imóvel ideal até consultoria especializada.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "reveal-on-scroll opacity-0", 
                    // Add staggered delay based on index
                    index === 0 ? "delay-0" : 
                    index === 1 ? "delay-100" : 
                    index === 2 ? "delay-200" : 
                    "delay-300"
                  )}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <FeaturedProperties />
        <TestimonialSlider />
        <ContactForm />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
