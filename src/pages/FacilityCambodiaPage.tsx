import { MapPin, Factory, Ruler, TrendingUp, Phone, Mail, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_BASE = 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/hongpeng';

export function FacilityCambodiaPage() {
  const { dictionary } = useLanguage();
  const { facilityCambodia: f } = dictionary;

  const departments = [
    {
      title: f.deptKnittingTitle,
      desc: f.deptKnittingDesc,
      images: [`${STORAGE_BASE}/cambiodia_3.jpg`],
    },
    {
      title: f.deptLinkingTitle,
      desc: f.deptLinkingDesc,
      images: [
        `${STORAGE_BASE}/cambiodia_4.jpg`,
        `${STORAGE_BASE}/cambiodia_5.png`,
      ],
    },
    {
      title: f.deptWashingTitle,
      desc: f.deptWashingDesc,
      images: [
        `${STORAGE_BASE}/cambiodia_6.jpg`,
        `${STORAGE_BASE}/cambiodia_7.png`,
      ],
    },
    {
      title: f.deptSewingTitle,
      desc: f.deptSewingDesc,
      images: [
        `${STORAGE_BASE}/cambiodia_8.jpg`,
        `${STORAGE_BASE}/cambiodia_9.png`,
      ],
    },
    {
      title: f.deptInspectionTitle,
      desc: f.deptInspectionDesc,
      images: [
        `${STORAGE_BASE}/cambiodia_10.png`,
        `${STORAGE_BASE}/cambiodia_11.png`,
      ],
    },
  ];

  return (
    <div>
      {/* Hero with images */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] lg:h-[600px]">
          <div className="relative">
            <img
              src={`${STORAGE_BASE}/cambiodia_1.png`}
              alt="XinHongPeng Cambodia Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/30" />
          </div>
          <div className="relative hidden md:block">
            <img
              src={`${STORAGE_BASE}/cambiodia_2.png.jpg`}
              alt="XinHongPeng Cambodia Factory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/30" />
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
              <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-3">
                <MapPin className="w-4 h-4" />
                <span>{f.location}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                {f.title}
              </h1>
              <p className="text-lg text-gray-300 font-light max-w-xl">{f.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">{f.overview}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
              <Ruler className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {f.areaLabel}
                </p>
                <p className="text-lg font-bold text-navy-950">{f.areaValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
              <TrendingUp className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {f.capacityLabel}
                </p>
                <p className="text-lg font-bold text-navy-950">{f.capacityValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
              <Factory className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  {f.equipmentLabel}
                </p>
                <p className="text-sm font-semibold text-navy-950">{f.equipmentValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department sections */}
      {departments.map((dept, index) => (
        <section
          key={dept.title}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-2xl font-extrabold text-navy-950 mb-4 tracking-tight">{dept.title}</h2>
                <p className="text-gray-600 leading-relaxed">{dept.desc}</p>
              </div>
              <div className={`grid gap-4 ${dept.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {dept.images.map((img) => (
                  <div key={img} className="overflow-hidden border border-gray-200">
                    <img
                      src={img}
                      alt={dept.title}
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact section */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-8 text-center tracking-tight">{f.contactTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{f.location}</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800">
                <User className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{f.contactPerson}</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800">
                <Phone className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">HK: {f.contactPhoneHK}</p>
                  <p className="text-sm text-gray-300">CN: {f.contactPhoneCN}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800">
                <Mail className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{f.contactEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
