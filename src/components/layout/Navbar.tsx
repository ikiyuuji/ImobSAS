
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
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-gray-900">
              Imob<span className="text-accent">Elite</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    className="px-4 py-2 rounded-md text-gray-700 hover:text-accent flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <a 
                    href={link.href} 
                    className="px-4 py-2 rounded-md text-gray-700 hover:text-accent"
                  >
                    {link.name}
                  </a>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="py-1">
                      {link.dropdown.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
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
            <a href="/buscar" className="text-gray-600 hover:text-accent transition-colors">
              <Search className="h-5 w-5" />
            </a>
            <Button 
              variant="primary" 
              size="sm" 
              icon={<Phone className="h-4 w-4" />}
            >
              (11) 99999-9999
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-accent"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-lg',
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <div className="py-2">
                    <div className="flex items-center justify-between px-4 py-2 text-gray-700 font-medium">
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 mt-1 border-l-2 border-gray-100">
                      {link.dropdown.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-gray-600 hover:text-accent"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="px-4 py-3 text-gray-700 hover:text-accent font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <a href="/buscar" className="flex items-center px-4 py-3 text-gray-700 hover:text-accent">
              <Search className="h-5 w-5 mr-2" />
              <span>Buscar imóveis</span>
            </a>
            <Button 
              variant="primary" 
              fullWidth 
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
