
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="z-50">
            <img
              src="https://cdn.jsdelivr.net/gh/freshlab-web/talkaio-lp-medico@main/dist/lovable-uploads/fc743b2e-b47e-455c-a025-daf0e32c8796.png"
              alt="Talkaio Logo"
              className="h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-talkaio-dark hover:text-talkaio-blue font-medium transition-colors">
              Benefícios
            </a>
            <a href="#audience" className="text-talkaio-dark hover:text-talkaio-blue font-medium transition-colors">
              Para Quem
            </a>
            <a href="#technology" className="text-talkaio-dark hover:text-talkaio-blue font-medium transition-colors">
              Tecnologia
            </a>
            <a href="#faq" className="text-talkaio-dark hover:text-talkaio-blue font-medium transition-colors">
              FAQ
            </a>
            <Button className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white">
              <a href="#contact">Fale Conosco</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} className="text-talkaio-dark" />
            ) : (
              <Menu size={28} className="text-talkaio-dark" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-white transition-all ease-in-out duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <a 
                href="#benefits" 
                className="text-xl font-medium text-talkaio-dark hover:text-talkaio-blue" 
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#audience" 
                className="text-xl font-medium text-talkaio-dark hover:text-talkaio-blue" 
                onClick={() => setIsMenuOpen(false)}
              >
                Para Quem
              </a>
              <a 
                href="#technology" 
                className="text-xl font-medium text-talkaio-dark hover:text-talkaio-blue" 
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologia
              </a>
              <a 
                href="#faq" 
                className="text-xl font-medium text-talkaio-dark hover:text-talkaio-blue" 
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button 
                className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#contact">Fale Conosco</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
