import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Imob<span className="text-accent">Elite</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Sua parceira ideal para realizar sonhos e investimentos no mercado imobiliário.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/imoveis" className="text-gray-400 hover:text-accent transition-colors">
                  Imóveis
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-gray-400 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-accent transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="/servicos/compra-venda" className="text-gray-400 hover:text-accent transition-colors">
                  Compra e Venda
                </a>
              </li>
              <li>
                <a href="/servicos/locacao" className="text-gray-400 hover:text-accent transition-colors">
                  Locação
                </a>
              </li>
              <li>
                <a href="/servicos/regularizacao" className="text-gray-400 hover:text-accent transition-colors">
                  Regularização
                </a>
              </li>
              <li>
                <a href="/servicos/avaliacao" className="text-gray-400 hover:text-accent transition-colors">
                  Avaliação
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 mt-1" />
                <span className="text-gray-400">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-2" />
                <a href="tel:+551199999999" className="text-gray-400 hover:text-accent transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-2" />
                <a href="mailto:contato@imobelite.com.br" className="text-gray-400 hover:text-accent transition-colors">
                  contato@imobelite.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ImobElite. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 