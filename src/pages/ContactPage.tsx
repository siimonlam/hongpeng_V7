import { useState } from 'react';
import { MapPin, Phone, Mail, Send, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { dictionary } = useLanguage();
  const { contact } = dictionary;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-navy-950 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">Get In Touch</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{contact.title}</h1>
            <p className="text-xl text-gray-300 font-light">{contact.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            {contact.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {submitted ? (
                <div className="bg-navy-50 border border-navy-200 p-8 text-center">
                  <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-navy-900" />
                  </div>
                  <p className="text-navy-900 font-semibold">Message sent successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {contact.formName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {contact.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {contact.formSubject}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      {contact.formMessage}
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-navy-950 hover:bg-navy-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {contact.formSubmit}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-4">
                  {contact.hkOfficeTitle}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
                    <MapPin className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-950 text-sm">{contact.infoAddress}</p>
                      <p className="text-gray-600 text-sm">{contact.hkAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
                    <Phone className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-950 text-sm">{contact.infoPhone}</p>
                      <p className="text-gray-600 text-sm">{contact.hkPhone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-950 mb-4">
                  {contact.cambodiaOfficeTitle}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
                    <MapPin className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-950 text-sm">{contact.infoAddress}</p>
                      <p className="text-gray-600 text-sm">{contact.cambodiaAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
                    <User className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-950 text-sm">{contact.contactPerson}</p>
                      <p className="text-gray-600 text-sm">{contact.cambodiaContact}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
                    <Phone className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-950 text-sm">{contact.phoneHK}</p>
                      <p className="text-gray-600 text-sm">{contact.cambodiaPhoneHK}</p>
                      <p className="font-semibold text-navy-950 text-sm mt-2">{contact.phoneCN}</p>
                      <p className="text-gray-600 text-sm">{contact.cambodiaPhoneCN}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border-l-4 border-navy-900">
                    <Mail className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-950 text-sm">{contact.infoEmail}</p>
                      <p className="text-gray-600 text-sm">{contact.cambodiaEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
