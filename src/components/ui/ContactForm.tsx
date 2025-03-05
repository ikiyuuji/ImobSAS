
import React, { useState } from 'react';
import { Phone, MessageSquare, User, Send } from 'lucide-react';
import Button from '../common/Button';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we would normally send the data to a backend
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        message: '',
      });
      
      toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.', {
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
              Fale Conosco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo para receber mais informações sobre nossos imóveis e serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="overflow-hidden rounded-lg bg-accent">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/90 to-accent/70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" 
                  alt="Customer service" 
                  className="h-full w-full object-cover"
                />
                
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Pronto para encontrar o imóvel ideal?
                  </h3>
                  <p className="mb-6 text-white/90">
                    Nossa equipe está pronta para ajudar você a encontrar o imóvel perfeito ou fornecer a consultoria que você precisa.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm opacity-75">Telefone</p>
                        <p className="font-medium">(11) 99999-9999</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm opacity-75">Email</p>
                        <p className="font-medium">contato@imobelite.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 lg:p-8 shadow-lg rounded-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 py-3 px-4 block w-full rounded-md border border-gray-200 focus:border-accent focus:ring-accent focus:ring-1 focus:outline-none"
                      placeholder="Digite seu nome"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 py-3 px-4 block w-full rounded-md border border-gray-200 focus:border-accent focus:ring-accent focus:ring-1 focus:outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full rounded-md border border-gray-200 focus:border-accent focus:ring-accent focus:ring-1 focus:outline-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  fullWidth
                  icon={<Send className="h-5 w-5" />}
                >
                  Enviar mensagem
                </Button>
                
                <p className="text-xs text-gray-500 text-center pt-2">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
