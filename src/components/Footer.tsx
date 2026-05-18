import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, User, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { dictionary } = useLanguage();
  const { footer, nav, contact } = dictionary;

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <span className="text-lg font-bold tracking-tight block mb-4">{footer.companyName}</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">{footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: nav.home },
                { to: '/about', label: nav.about },
                { to: '/services', label: nav.services },
                { to: '/facilities', label: nav.facilities },
                { to: '/contact', label: nav.contact },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">{contact.hkOfficeTitle}</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.hkAddress}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.hkPhone}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">{contact.chinaFactoryTitle}</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.chinaFactoryAddress}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.chinaFactoryPhone}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.chinaFactoryContact}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.chinaFactoryMobile}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.chinaFactoryEmail}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">{contact.cambodiaOfficeTitle}</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.cambodiaAddress}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.cambodiaContact}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  {contact.cambodiaPhoneHK}<br />{contact.cambodiaPhoneCN}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{contact.cambodiaEmail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {footer.companyName}. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
