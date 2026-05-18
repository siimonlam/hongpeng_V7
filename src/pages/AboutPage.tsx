import { Shield, Lightbulb, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { dictionary } = useLanguage();
  const { about } = dictionary;

  const values = [
    { icon: Award, title: about.valueQuality, desc: about.valueQualityDesc },
    { icon: Shield, title: about.valueIntegrity, desc: about.valueIntegrityDesc },
    { icon: Lightbulb, title: about.valueInnovation, desc: about.valueInnovationDesc },
  ];

  return (
    <div>
      <section className="bg-navy-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">About Us</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{about.title}</h1>
            <p className="text-xl text-gray-300 font-light">{about.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {about.description}
            </p>
            <div className="bg-navy-50 border-l-4 border-navy-900 p-8">
              <h3 className="text-xl font-bold text-navy-950 mb-3">
                {about.coreBusinessTitle}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {about.coreBusinessDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600 mb-3 text-center">Our Values</p>
          <h2 className="text-3xl font-extrabold text-navy-950 text-center mb-12 tracking-tight">
            {about.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-5">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
