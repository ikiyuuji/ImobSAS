
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">
              Imob<span className="text-accent">Elite</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Somos especialistas no mercado imobiliário, oferecendo soluções completas para compra, venda, locação e regularização de imóveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-accent transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-accent transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-accent transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-accent transition-colors duration-300">Início</a>
              </li>
              <li>
                <a href="/imoveis" className="text-gray-400 hover:text-accent transition-colors duration-300">Imóveis</a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-400 hover:text-accent transition-colors duration-300">Serviços</a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-accent transition-colors duration-300">Sobre nós</a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-accent transition-colors duration-300">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="/servicos/regularizacao" className="text-gray-400 hover:text-accent transition-colors duration-300">Regularização de Imóveis</a>
              </li>
              <li>
                <a href="/servicos/documentacao" className="text-gray-400 hover:text-accent transition-colors duration-300">Documentação Imobiliária</a>
              </li>
              <li>
                <a href="/servicos/avaliacao" className="text-gray-400 hover:text-accent transition-colors duration-300">Avaliação de Imóveis</a>
              </li>
              <li>
                <a href="/servicos/consultoria" className="text-gray-400 hover:text-accent transition-colors duration-300">Consultoria Especializada</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">contato@imobelite.com.br</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">Segunda a Sexta: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} ImobElite. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
