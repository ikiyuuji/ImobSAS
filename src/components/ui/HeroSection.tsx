
import React, { useState, useEffect } from 'react';
import { ArrowRight, Home, Search, Check } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const slides = [
    {
      id: 1,
      background: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Encontre seu lar dos sonhos',
      subtitle: 'Imóveis selecionados com a qualidade que você merece'
    },
    {
      id: 2,
      background: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Regularização e consultoria imobiliária',
      subtitle: 'Seu patrimônio seguro e valorizado com nossa assessoria'
    },
    {
      id: 3,
      background: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Atendimento personalizado',
      subtitle: 'Entendemos suas necessidades para oferecer as melhores opções'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const features = [
    'Imóveis exclusivos',
    'Consultoria especializada',
    'Regularização documental',
    'Assessoria completa'
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 bg-black',
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.background})`,
              opacity: 0.7
            }}
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      <div className="container relative mx-auto px-4 md:px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={cn(
            'flex flex-col justify-center transition-all duration-1000 delay-300',
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          )}>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm text-accent backdrop-blur-sm mb-6 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              Imobiliária de Confiança
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {slides[activeSlide].title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              {slides[activeSlide].subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<Search className="h-5 w-5" />}
                onClick={() => window.location.href = '/imoveis'}
              >
                Buscar imóveis
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
                onClick={() => window.location.href = '/servicos'}
              >
                Nossos serviços
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center">
            {/* Animated slide indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300',
                    activeSlide === index ? 'bg-accent w-6' : 'bg-white/40'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
