import React from 'react';
import { ChevronRight } from 'lucide-react';
import PropertyCard from '../common/PropertyCard';
import Button from '../common/Button';

const FeaturedProperties: React.FC = () => {
  // Mock data - Será substituído por dados reais da API
  const properties = [
    {
      id: '1',
      title: 'Casa de Luxo em Alphaville',
      address: 'Alphaville, Barueri - SP',
      price: 2500000,
      beds: 4,
      baths: 3,
      area: 350,
      image: '/properties/house-1.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Apartamento Moderno',
      address: 'Vila Nova Conceição, São Paulo - SP',
      price: 1800000,
      beds: 3,
      baths: 2,
      area: 120,
      image: '/properties/apartment-1.jpg'
    },
    {
      id: '3',
      title: 'Cobertura Duplex',
      address: 'Moema, São Paulo - SP',
      price: 3200000,
      beds: 4,
      baths: 4,
      area: 280,
      image: '/properties/penthouse-1.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Confira nossa seleção de propriedades exclusivas para você encontrar o seu lar ideal ou
              fazer um excelente investimento.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 md:mt-0"
            icon={<ChevronRight className="h-4 w-4" />}
            iconPosition="right"
          >
            Ver todos os imóveis
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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