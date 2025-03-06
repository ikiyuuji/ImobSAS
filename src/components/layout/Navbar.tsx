import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '../common/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Imóveis', href: '/imoveis' },
    { 
      name: 'Serviços', 
      href: '/servicos',
      dropdown: [
        { name: 'Regularização', href: '/servicos/regularizacao' },
        { name: 'Documentação', href: '/servicos/documentacao' },
        { name: 'Avaliação', href: '/servicos/avaliacao' },
      ] 
    },
    { name: 'Sobre nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-white">
              Imob<span className="gradient-text">Elite</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    className={cn(
                      "px-4 py-2 rounded-md flex items-center transition-colors",
                      "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <a 
                    href={link.href} 
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors",
                      "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                  </a>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md bg-background/95 backdrop-blur-md shadow-lg ring-1 ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="py-1">
                      {link.dropdown.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-md text-white/80 hover:text-white transition-colors"
              onClick={() => window.location.href = '/buscar'}
            >
              <Search className="h-5 w-5" />
            </button>
            <Button 
              variant="outline"
              size="sm" 
              icon={<Phone className="h-4 w-4" />}
            >
              (11) 99999-9999
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-10 p-2 rounded-md text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden transition-transform duration-300 ease-in-out transform',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="pt-20 px-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <div className="py-2">
                    <div className="flex items-center justify-between px-4 py-2 text-white/80 font-medium">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 border-l border-white/10">
                      {link.dropdown.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-white/80 hover:text-white"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="px-4 py-3 text-white/80 hover:text-white font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="mt-8 space-y-4">
            <Button 
              variant="ghost"
              className="w-full justify-start"
              onClick={() => window.location.href = '/buscar'}
              icon={<Search className="h-4 w-4" />}
            >
              Buscar Imóveis
            </Button>
            <Button 
              variant="primary"
              className="w-full justify-start"
              icon={<Phone className="h-4 w-4" />}
            >
              (11) 99999-9999
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
