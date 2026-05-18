import { MapPin, CheckCircle, Building2, Users, Ruler, ShieldCheck, Phone, Mail, User, TrendingUp, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_BASE = 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/hongpeng';

export function FacilityDongguanPage() {
  const { dictionary } = useLanguage();
  const { facilityDongguan: f } = dictionary;

  const productions = [
    f.production1,
    f.production2,
    f.production3,
    f.production4,
    f.production5,
    f.production6,
  ];

  const equipment = [
    f.equipment1,
    f.equipment2,
    f.equipment3,
    f.equipment4,
    f.equipment5,
    f.equipment6,
  ];

  const customers = [
    'Belk', 'Bloomingdales', 'Brooks Brothers', 'Chico\'s',
    'Dillard\'s', 'Sweater 360', 'Wildfox', 'Lucky',
    'Ikks', 'Jack Murphy', 'Reiss', 'Temperley London',
    'Hudson Bay', 'Line Knitwear', 'RKF', 'Theory Luxe',
  ];

  return (
    <div>
      <section className="bg-navy-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>{f.location}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{f.title}</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl">{f.subtitle}</p>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src={`${STORAGE_BASE}/china_1`}
                alt="Dongguan factory interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
              <img
                src={`${STORAGE_BASE}/china_2`}
                alt="Dongguan factory production floor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Key Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">{f.overview}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Factory Profile</h3>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <Building2 className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Company Name</p>
                  <p className="text-sm font-semibold text-navy-950">{f.title}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <MapPin className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Company Address</p>
                  <p className="text-sm font-semibold text-navy-950">{f.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <Ruler className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.areaLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.areaValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <TrendingUp className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.capacityLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.capacityValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <Users className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.employeesLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.employeesValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <Phone className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.phoneLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.phoneValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <Mail className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.emailLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.emailValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <User className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.contactPersonLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.contactPersonValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-navy-900">
                <Smartphone className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{f.mobileLabel}</p>
                  <p className="text-sm font-semibold text-navy-950">{f.mobileValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets & Products */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-10 tracking-tight">{f.marketsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">Markets</h3>
              <div className="grid grid-cols-3 gap-4">
                {[f.marketUSA, f.marketEurope, f.marketOther].map((m) => (
                  <div key={m} className="bg-navy-900 border border-navy-800 p-4 text-center">
                    <p className="text-white font-bold text-lg">{m.split(' ')[1]}</p>
                    <p className="text-gray-400 text-xs mt-1">{m.split(' ')[0]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">Products</h3>
              <div className="grid grid-cols-3 gap-4">
                {[f.productLadies, f.productMens, f.productOther].map((p) => (
                  <div key={p} className="bg-navy-900 border border-navy-800 p-4 text-center">
                    <p className="text-white font-bold text-lg">{p.split(' ').pop()}</p>
                    <p className="text-gray-400 text-xs mt-1">{p.split(' ').slice(0, -1).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-8 tracking-tight">{f.productionTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productions.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-5 border border-gray-200">
                <CheckCircle className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-8 tracking-tight">{f.staffTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[f.staffOffice, f.staffKnitting, f.staffLinking, f.staffFinishing, f.staffSample, f.staffQA, f.staffOther, f.staffTotal].map((item) => (
              <div
                key={item}
                className={`p-4 border-l-4 ${
                  item === f.staffTotal
                    ? 'bg-navy-50 border-navy-900'
                    : 'bg-gray-50 border-navy-700'
                }`}
              >
                <span className={`text-sm font-medium ${item === f.staffTotal ? 'text-navy-900 font-bold' : 'text-gray-700'}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-8 tracking-tight">{f.equipmentTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item) => (
              <div key={item} className="p-5 bg-white border-l-4 border-navy-700">
                <span className="text-sm font-medium text-navy-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{f.qualityTitle}</h3>
                <p className="text-gray-600 leading-relaxed">{f.qualityDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-navy-950 mb-4 tracking-tight">{f.clientsTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">{f.clientsDescription}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {customers.map((client) => (
              <div key={client} className="px-4 py-4 bg-white border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-sm font-semibold text-gray-500">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
