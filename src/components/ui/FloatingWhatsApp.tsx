
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      // Open WhatsApp directly if user clicks when popup is not open
      window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20imóveis.', '_blank');
    }
  };
  
  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20imóveis.', '_blank');
    setIsOpen(false);
  };
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {isOpen && (
        <div 
          className={cn(
            "mb-4 max-w-xs w-full rounded-lg bg-white shadow-lg p-4 transform transition-all duration-300",
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Atendimento</h4>
                <p className="text-xs text-gray-500">Geralmente responde em minutos</p>
              </div>
            </div>
            <button 
              onClick={handleToggle}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">
            Olá! Como podemos ajudar você hoje?
          </p>
          
          <button
            onClick={handleChatClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 text-sm font-medium transition-colors"
          >
            Iniciar conversa
          </button>
        </div>
      )}
      
      <button
        onClick={handleToggle}
        className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
