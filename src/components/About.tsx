import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1A2B49] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#C5A059] z-0" />
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a8f94aca-66c0-4c3d-9793-2cab471c9e8d/construction-site-180e0764-1779172176553.webp"
              alt="About Ghana UK Construction"
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#C5A059] p-8 rounded-lg shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm uppercase font-bold tracking-widest">Years of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#C5A059] text-sm font-bold uppercase tracking-[0.3em] mb-4">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A Legacy of Quality & <br />Trust in Accra
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Ghana UK Construction Ltd. is a premier real estate developer based in Accra, Ghana. We combine international standards with local expertise to deliver exceptional value to our clients.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Located on Spintex Road, next to Action Chapel International, we are at the heart of Accra's development corridor, perfectly positioned to serve your construction needs.
            </p>

            <ul className="space-y-4">
              {[
                'Uncompromising quality standards',
                'Transparent pricing & project timelines',
                'Expert team of architects & engineers',
                'Strong focus on sustainability',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#C5A059]" size={20} />
                  <span className="text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;