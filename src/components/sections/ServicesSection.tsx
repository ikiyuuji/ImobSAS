import React from 'react';
import { FileCheck, Home, Key, FileText, MessageSquare, Clock } from 'lucide-react';
import Button from '../common/Button';

const services = [
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Compra e Venda',
    description: 'Assessoria completa na compra e venda de imóveis, desde a avaliação até o fechamento do negócio.'
  },
  {
    icon: <Key className="h-8 w-8" />,
    title: 'Locação',
    description: 'Gestão completa de locações, incluindo avaliação, divulgação e administração do contrato.'
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: 'Regularização',
    description: 'Regularização de imóveis e documentação, garantindo segurança jurídica para sua propriedade.'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Documentação',
    description: 'Assessoria na obtenção e regularização de documentos necessários para transações imobiliárias.'
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Consultoria',
    description: 'Consultoria especializada para investimentos imobiliários e planejamento patrimonial.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Avaliação',
    description: 'Avaliação profissional do seu imóvel, considerando localização, estado e mercado.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600">
            Oferecemos uma gama completa de serviços imobiliários para atender todas as suas necessidades,
            desde a busca pelo imóvel ideal até a finalização do negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/servicos'}
          >
            Saiba mais sobre nossos serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 