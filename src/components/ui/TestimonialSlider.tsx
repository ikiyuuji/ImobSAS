
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "A equipe da ImobElite foi excepcional em todo o processo de compra do meu apartamento. Desde a procura até a finalização da documentação, tudo foi muito bem conduzido. Recomendo a todos!",
      author: "Carlos Silva",
      role: "Empresário",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      content: "Buscava um imóvel para investimento e a consultoria fornecida pela ImobElite foi fundamental. Profissionalismo, conhecimento do mercado e atendimento personalizado fizeram toda a diferença.",
      author: "Ana Oliveira",
      role: "Investidora",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      content: "Precisava regularizar um imóvel que herdei e não sabia por onde começar. A equipe me orientou em cada etapa do processo, tornando tudo mais fácil e transparente.",
      author: "Marcos Santos",
      role: "Professor",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 300);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho e motivação para continuar oferecendo um serviço de excelência.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 h-32 w-32 text-accent/10">
              <Quote className="h-full w-full" strokeWidth={1} />
            </div>
            
            <div className={cn(
              "relative z-10 transition-opacity duration-300",
              isFading ? "opacity-0" : "opacity-100"
            )}>
              <p className="font-display mb-8 md:text-lg text-gray-700 leading-relaxed">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex items-center">
                {testimonials[activeIndex].avatar && (
                  <div className="mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-3">
            <button 
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-accent"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "w-6 bg-accent" 
                      : "w-2 bg-gray-300"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-accent"
              aria-label="Próximo depoimento"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
