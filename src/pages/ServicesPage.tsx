import {
  Palette,
  Package,
  Cpu,
  Scissors,
  ClipboardCheck,
  Truck,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_BASE = 'https://liqbuhtnlclwwilrvpgs.supabase.co/storage/v1/object/public/hongpeng';

const workflowSteps = [
  { step: 1,  en: 'Knitting',                zh: '織片' },
  { step: 2,  en: 'Panel Checking',           zh: '查片' },
  { step: 3,  en: 'Linking',                  zh: '縫盤' },
  { step: 4,  en: 'Checking Linking',         zh: '查縫盤' },
  { step: 5,  en: 'Stitching',                zh: '車縫' },
  { step: 6,  en: 'Checking Stitching',       zh: '查車縫' },
  { step: 7,  en: 'Lighting',                 zh: '燈檢' },
  { step: 8,  en: 'Washing',                  zh: '洗水' },
  { step: 9,  en: 'Ironing',                  zh: '燙衣' },
  { step: 10, en: 'Measuring',                zh: '量度尺寸' },
  { step: 11, en: 'Labelling',                zh: '車嘜頭' },
  { step: 12, en: 'Initial Inspect',          zh: '初步查驗' },
  { step: 13, en: 'Mending',                  zh: '修補' },
  { step: 14, en: 'Rechecking',               zh: '覆查' },
  { step: 15, en: '100% Inspection',          zh: '全件查驗' },
  { step: 16, en: 'Measuring Before Packing', zh: '包裝前量度' },
  { step: 17, en: 'Internal QC Checking',     zh: '內部品質檢查' },
  { step: 18, en: 'Packing',                  zh: '包裝' },
];

export function ServicesPage() {
  const { dictionary, language } = useLanguage();
  const { services } = dictionary;

  const serviceItems = [
    { icon: Palette,        title: services.service1Title, desc: services.service1Desc },
    { icon: Package,        title: services.service2Title, desc: services.service2Desc },
    { icon: Cpu,            title: services.service3Title, desc: services.service3Desc },
    { icon: Scissors,       title: services.service4Title, desc: services.service4Desc },
    { icon: ClipboardCheck, title: services.service5Title, desc: services.service5Desc },
    { icon: Truck,          title: services.service6Title, desc: services.service6Desc },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">
              {language === 'zh' ? '服務項目' : 'What We Do'}
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
              {services.title}
            </h1>
            <p className="text-2xl text-blue-200 font-light mt-1 mb-4">
              {services.subtitle}
            </p>
            <p className="text-xl text-gray-300 font-light">{services.description}</p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {serviceItems.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 hover:bg-navy-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white mb-5 group-hover:bg-navy-700 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Workflow */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
            {language === 'zh' ? '生產流程' : 'Production Flow'}
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight mb-2">
            {services.processTitle}
          </h2>
          <p className="text-gray-500 mb-14 max-w-2xl text-base">
            {language === 'zh'
              ? '每件成衣均經過18道嚴格生產工序，從織片到最終包裝，層層把關，確保品質。'
              : 'Every garment passes through 18 rigorous production stages — from raw knitting panels to final packed product, quality-checked at every step.'}
          </p>

          <div className="flex flex-wrap items-stretch justify-center gap-y-4">
            {workflowSteps.map(({ step, en, zh }, index) => (
              <div key={step} className="flex items-center">
                <div className="group w-[140px] sm:w-[150px] overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={`${STORAGE_BASE}/china_flow_${step}.png`}
                      alt={language === 'zh' ? zh : en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center shadow">
                      <span className="text-white text-xs font-bold leading-none">{step}</span>
                    </div>
                  </div>
                  <div className="p-3 pb-4">
                    <p className="text-xs font-bold text-navy-900 leading-tight">
                      {language === 'zh' ? zh : en}
                    </p>
                    {language === 'zh' && (
                      <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{en}</p>
                    )}
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-blue-400 mx-1 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
