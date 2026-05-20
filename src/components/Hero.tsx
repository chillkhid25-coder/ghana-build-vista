import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a8f94aca-66c0-4c3d-9793-2cab471c9e8d/hero-modern-residence-f8fd4d4c-1779172176929.webp"
          alt="Modern Accra Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A2B49]/70" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-[#C5A059] text-white px-4 py-1.5 rounded-full mb-6">
            <Star size={16} fill="white" />
            <span className="text-xs font-bold uppercase tracking-widest">Top Rated Accra Developer</span>
            <span className="text-xs font-bold border-l border-white/30 pl-2">4.4 / 5.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Excellence in <br />
            <span className="text-[#C5A059]">The Heart of Accra</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
            Ghana UK Construction Ltd. delivers world-class real estate development and construction services. From modern residences to corporate landmarks, we build your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#C5A059] text-white font-bold rounded-md hover:bg-[#b38f4d] transition-all flex items-center justify-center gap-2 group"
            >
              Get a Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-md hover:bg-white/20 transition-all flex items-center justify-center"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;