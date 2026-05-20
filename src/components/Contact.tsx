import { useState } from 'react';
import { Phone, Mail, MapPin, Send, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import { QRCodeSVG } from 'qrcode.react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const businessUrl = "https://ghanaukconstruction.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Message sent! We will contact you shortly.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#C5A059] text-sm font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#1A2B49]">Contact Us Today</h3>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex gap-4">
              <div className="bg-[#1A2B49] p-4 rounded-lg h-fit">
                <Phone className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1A2B49] mb-1">Phone</h4>
                <p className="text-gray-600">026 704 7175</p>
                <p className="text-sm text-gray-400 mt-1">Available Mon-Sat: 8am - 6pm</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#1A2B49] p-4 rounded-lg h-fit">
                <MapPin className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1A2B49] mb-1">Location</h4>
                <p className="text-gray-600">
                  Spintex Road, next to Action Chapel International, behind Empire Concretes
                </p>
                <p className="text-sm text-gray-400 mt-1">Accra, Ghana</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-[#1A2B49] p-4 rounded-lg h-fit">
                <Mail className="text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1A2B49] mb-1">Email</h4>
                <p className="text-gray-600">info@ghanaukconstruction.com</p>
              </div>
            </div>

            {/* QR Code Section in Contact */}
            <div className="mt-12 bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-xl shadow-md mb-4">
                <QRCodeSVG value={businessUrl} size={140} level="H" />
              </div>
              <h4 className="text-[#1A2B49] font-bold mb-2 flex items-center gap-2">
                <QrCode size={20} className="text-[#C5A059]" />
                Digital Business Card
              </h4>
              <p className="text-sm text-gray-500">Scan this QR code to save our website and contact details directly to your phone.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A2B49] uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A2B49] uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all bg-white"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-[#1A2B49] uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Residential Construction Inquiry"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all bg-white"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-[#1A2B49] uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059] transition-all bg-white resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-10 py-4 bg-[#1A2B49] text-white font-bold rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;