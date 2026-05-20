import { Building2, Home, Hammer, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Residential Development',
      description: 'Designing and building modern, high-quality homes tailored to contemporary lifestyles in Accra.',
      icon: <Home className="w-10 h-10 text-[#C5A059]" />,
    },
    {
      title: 'Commercial Construction',
      description: 'Developing state-of-the-art office spaces and retail centers that drive business growth.',
      icon: <Building2 className="w-10 h-10 text-[#C5A059]" />,
    },
    {
      title: 'Renovations & Refurbishment',
      description: 'Transforming existing structures into modern masterpieces with precision and care.',
      icon: <Hammer className="w-10 h-10 text-[#C5A059]" />,
    },
    {
      title: 'Real Estate Consultation',
      description: 'Expert advice on land acquisition and property investment in the Ghanaian market.',
      icon: <Users className="w-10 h-10 text-[#C5A059]" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#1A2B49] text-sm font-bold uppercase tracking-[0.3em] mb-4">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#1A2B49]">Comprehensive Real Estate Solutions</h3>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h4 className="text-xl font-bold text-[#1A2B49] mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;