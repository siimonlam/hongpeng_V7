import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Factory, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_BASE = 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/hongpeng';

export function HomePage() {
  const { dictionary } = useLanguage();
  const { home } = dictionary;

  const stats = [
    { icon: Award, value: '20+', label: home.statsYears },
    { icon: Users, value: '4+', label: home.statsClients },
    { icon: Factory, value: '3', label: home.statsFacilities },
    { icon: Globe, value: '10+', label: home.statsCountries },
  ];

  const clients = ['Target', "Kohl's", 'Talbots', 'AEO'];

  const featuredCards = [
    {
      title: 'Premium Knitwear Manufacturing',
      desc: 'End-to-end production from raw materials to finished garments',
      image: `${STORAGE_BASE}/china_1.png`,
      link: '/services',
    },
    {
      title: 'Dongguan Production Facility',
      desc: 'State-of-the-art computerized knitting machines',
      image: `${STORAGE_BASE}/cambiodia_3.jpg`,
      link: '/facilities/dongguan',
    },
    {
      title: 'Cambodia Expansion',
      desc: 'New facility serving growing global demand',
      image: `${STORAGE_BASE}/cambiodia_1.png`,
      link: '/facilities/cambodia',
    },
    {
      title: 'Quality Assurance',
      desc: 'Rigorous inspection at every production stage',
      image: `${STORAGE_BASE}/cambiodia_10.png`,
      link: '/about',
    },
    {
      title: 'Global Export Solutions',
      desc: 'Serving retailers across 10+ countries worldwide',
      image: `${STORAGE_BASE}/cambiodia_8.jpg`,
      link: '/contact',
    },
  ];

  return (
    <div>
      {/* Hero - Boeing style: full-bleed image with blue gradient overlay */}
      <section className="relative h-[75vh] min-h-[500px] lg:min-h-[600px] overflow-hidden">
        <img
          src={`${STORAGE_BASE}/cambiodia_2.png.jpg`}
          alt="Hong Peng Knitwear Factory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-700/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-light leading-[1.2] text-white">
                {home.heroDescription}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Featured section - Boeing "Recent news" style grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-10">
            {home.heroSubtitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large featured card */}
            <Link
              to={featuredCards[0].link}
              className="lg:row-span-2 relative group overflow-hidden rounded-lg min-h-[400px] lg:min-h-0"
            >
              <img
                src={featuredCards[0].image}
                alt={featuredCards[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {featuredCards[0].title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* 4 smaller cards in 2x2 grid */}
            {featuredCards.slice(1).map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-blue-700 p-5">
                  <h3 className="text-base font-bold text-white mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-white/50 mt-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-800 mb-3">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose - Boeing style section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">Our Clients</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-950 mb-4 tracking-tight">
            {home.clientsTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            {home.clientsDescription}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-24 bg-gray-50 rounded border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-bold text-gray-400">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner - Boeing "roadblock" style */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight">
            {home.heroTitle}
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">{home.heroDescription}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 font-semibold text-sm rounded transition-all hover:bg-gray-100"
            >
              {home.ctaLearnMore}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-medium text-sm rounded transition-all hover:bg-white/10"
            >
              {home.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
