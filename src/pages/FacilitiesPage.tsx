import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_BASE = 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/hongpeng';

export function FacilitiesPage() {
  const { dictionary } = useLanguage();
  const { facilities } = dictionary;

  const facilityList = [
    {
      name: facilities.facility1Name,
      location: facilities.facility1Location,
      description: facilities.facility1Description,
      link: '/facilities/dongguan',
      image: `${STORAGE_BASE}/china_1.png`,
    },
    {
      name: facilities.facility2Name,
      location: facilities.facility2Location,
      description: facilities.facility2Description,
      link: '/facilities/cambodia',
      image: `${STORAGE_BASE}/cambiodia_1.png`,
    },
    {
      name: facilities.facility3Name,
      location: facilities.facility3Location,
      description: facilities.facility3Description,
      link: null,
      image: null,
    },
  ];

  const capabilities = [
    facilities.capability1,
    facilities.capability2,
    facilities.capability3,
    facilities.capability4,
    facilities.capability5,
    facilities.capability6,
  ];

  return (
    <div>
      <section className="bg-navy-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">Global Presence</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{facilities.title}</h1>
            <p className="text-xl text-gray-300 font-light">{facilities.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            {facilities.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilityList.map((facility) => (
              <div
                key={facility.name}
                className="group border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-56 relative overflow-hidden bg-gray-100">
                  {facility.image ? (
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-navy-100 flex items-center justify-center">
                      <MapPin className="w-16 h-16 text-navy-300" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-950 mb-1">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-navy-600 font-medium mb-3">
                    {facility.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                  {facility.link && (
                    <Link
                      to={facility.link}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-navy-900 hover:text-navy-700 transition-colors"
                    >
                      {facilities.viewDetails}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600 mb-3 text-center">Capabilities</p>
          <h2 className="text-3xl font-extrabold text-navy-950 text-center mb-12 tracking-tight">
            {facilities.capabilitiesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-3 bg-white px-5 py-4 border border-gray-200"
              >
                <CheckCircle className="w-5 h-5 text-navy-700 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
