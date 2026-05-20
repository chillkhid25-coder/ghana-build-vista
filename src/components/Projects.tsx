const Projects = () => {
  const projects = [
    {
      title: 'Luxury Villa Spintex',
      category: 'Residential',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a8f94aca-66c0-4c3d-9793-2cab471c9e8d/hero-modern-residence-f8fd4d4c-1779172176929.webp',
    },
    {
      title: 'Corporate HQ Accra',
      category: 'Commercial',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a8f94aca-66c0-4c3d-9793-2cab471c9e8d/commercial-project-c380e252-1779172176334.webp',
    },
    {
      title: 'Modern Apartment Complex',
      category: 'Residential',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a8f94aca-66c0-4c3d-9793-2cab471c9e8d/construction-site-180e0764-1779172176553.webp',
    },
    {
      title: 'Penthouse Interior',
      category: 'Interior Design',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a8f94aca-66c0-4c3d-9793-2cab471c9e8d/interior-design-accra-11f4dbc5-1779172176583.webp',
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-[#C5A059] text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1A2B49]">Excellence Delivered</h3>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600 max-w-md">
            Explore our latest projects that showcase our commitment to quality, aesthetics, and structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl aspect-[16/10]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B49] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#C5A059] font-bold text-sm uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.category}
                </span>
                <h4 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;