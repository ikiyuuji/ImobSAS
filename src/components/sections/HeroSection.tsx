import React from 'react';
import { Search, MapPin, Home } from 'lucide-react';
import Button from '../common/Button';
import { BackgroundBeams } from '../ui/background-beams';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background Beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Encontre o Imóvel dos{' '}
            <span className="gradient-text">Seus Sonhos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Descubra as melhores oportunidades em imóveis com a nossa experiência e compromisso em realizar o seu sonho.
          </p>

          {/* Search Bar */}
          <div className="glass-effect p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-white/90 mb-1 block">
                  Localização
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Digite a cidade ou bairro"
                    className="pl-10 w-full h-12 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="text-sm font-medium text-white/90 mb-1 block">
                  Tipo de Imóvel
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 h-5 w-5" />
                  <select
                    className="pl-10 w-full h-12 rounded-md bg-white/10 border border-white/20 text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="" className="bg-background">Todos os tipos</option>
                    <option value="casa" className="bg-background">Casa</option>
                    <option value="apartamento" className="bg-background">Apartamento</option>
                    <option value="comercial" className="bg-background">Comercial</option>
                    <option value="terreno" className="bg-background">Terreno</option>
                  </select>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="md:w-auto bg-primary hover:bg-primary-light transition-colors"
                icon={<Search className="h-5 w-5" />}
              >
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Imóveis Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1.2k+</div>
              <div className="text-white/80">Clientes Satisfeitos</div>
            </div>
            <div className="text-center hidden md:block">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 