import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-xl md:text-2xl font-bold tracking-tighter ${isScrolled ? 'text-[#1A2B49]' : 'text-white'}`}>
            GHANA UK <span className="text-[#C5A059]">CONSTRUCTION</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-[#C5A059] transition-colors ${isScrolled ? 'text-[#1A2B49]' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0267047175"
            className="flex items-center gap-2 bg-[#C5A059] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#b38f4d] transition-colors shadow-lg"
          >
            <Phone size={16} />
            <span>026 704 7175</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-[#1A2B49]' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-[#1A2B49]' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[#1A2B49] border-b border-gray-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:0267047175"
              className="flex items-center justify-center gap-2 bg-[#1A2B49] text-white py-3 rounded-lg font-bold"
            >
              <Phone size={18} />
              <span>Call Now: 026 704 7175</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;