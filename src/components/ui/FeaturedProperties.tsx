
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import PropertyCard from '../common/PropertyCard';

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: '1',
      title: 'Apartamento de Luxo com Vista para o Mar',
      address: 'Av. Atlântica, 1500, Copacabana, Rio de Janeiro',
      price: 1250000,
      beds: 3,
      baths: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
      featured: true,
    },
    {
      id: '2',
      title: 'Casa Contemporânea com Piscina',
      address: 'Rua das Palmeiras, 250, Jardins, São Paulo',
      price: 2800000,
      beds: 4,
      baths: 3,
      area: 320,
      image: 'https://images.unsplash.com/photo-1600607687644-c7e43600be2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      id: '3',
      title: 'Cobertura Duplex com Terraço',
      address: 'Rua Bela Cintra, 1420, Consolação, São Paulo',
      price: 1850000,
      beds: 3,
      baths: 3,
      area: 180,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
              Imóveis em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Confira nossa seleção de propriedades exclusivas para você encontrar o seu lar ideal ou fazer um excelente investimento.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
            onClick={() => window.location.href = '/imoveis'}
          >
            Ver todos os imóveis
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
