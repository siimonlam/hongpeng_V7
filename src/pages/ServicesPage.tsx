import {
  Palette,
  Package,
  Cpu,
  Scissors,
  ClipboardCheck,
  Truck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ServicesPage() {
  const { dictionary } = useLanguage();
  const { services } = dictionary;

  const serviceItems = [
    { icon: Palette, title: services.service1Title, desc: services.service1Desc },
    { icon: Package, title: services.service2Title, desc: services.service2Desc },
    { icon: Cpu, title: services.service3Title, desc: services.service3Desc },
    { icon: Scissors, title: services.service4Title, desc: services.service4Desc },
    { icon: ClipboardCheck, title: services.service5Title, desc: services.service5Desc },
    { icon: Truck, title: services.service6Title, desc: services.service6Desc },
  ];

  const processSteps = [
    services.processStep1,
    services.processStep2,
    services.processStep3,
    services.processStep4,
    services.processStep5,
    services.processStep6,
  ];

  return (
    <div>
      <section className="bg-navy-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">What We Do</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{services.title}</h1>
            <p className="text-xl text-gray-300 font-light">{services.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            {services.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {serviceItems.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 hover:bg-navy-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white mb-5 group-hover:bg-navy-700 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3 text-center">Workflow</p>
          <h2 className="text-3xl font-extrabold text-center mb-16 tracking-tight">
            {services.processTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 mx-auto bg-white text-navy-950 rounded-full flex items-center justify-center font-extrabold text-lg mb-3">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
