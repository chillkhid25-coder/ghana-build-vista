import { Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const businessUrl = "https://ghanaukconstruction.com"; // Business Website URL

  return (
    <footer className="bg-[#1A2B49] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter">
              GHANA UK <span className="text-[#C5A059]">CONSTRUCTION</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Leading the way in real estate development in Accra. We bring international standards and local expertise to every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/ghana-uk-construction-ltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#C5A059] transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <MapPin className="text-[#C5A059] shrink-0" size={20} />
                <span className="text-gray-400 text-sm">
                  Spintex Road, next to Action Chapel International, behind Empire Concretes, Accra
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-[#C5A059] shrink-0" size={20} />
                <span className="text-gray-400">026 704 7175</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-4 border-b border-white/10 pb-2 inline-block">Scan to Visit</h4>
            <div className="bg-white p-3 rounded-xl inline-block shadow-lg border-4 border-[#C5A059]">
              <QRCodeSVG value={businessUrl} size={120} level="H" includeMargin={false} />
            </div>
            <p className="text-xs text-gray-400 font-medium">Scan this QR code with your phone to access our website instantly.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Ghana UK Construction Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6 flex items-center justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;