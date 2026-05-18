import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { languageNames, type Language } from '../i18n';

export function Header() {
  const { language, dictionary, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { nav } = dictionary;

  const facilitySubLinks = [
    { to: '/facilities', label: nav.facilitiesAll },
    { to: '/facilities/dongguan', label: nav.facilitiesDongguan },
    { to: '/facilities/cambodia', label: nav.facilitiesCambodia },
  ];

  const links = [
    { to: '/', label: nav.home },
    { to: '/about', label: nav.about },
    { to: '/services', label: nav.services },
    { to: '/contact', label: nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isFacilitiesActive = location.pathname.startsWith('/facilities');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFacilitiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setFacilitiesOpen(false);
    setMenuOpen(false);
    setMobileFacilitiesOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight">HONG PENG</span>
          </Link>

          <nav className="hidden lg:flex items-center h-full">
            {links.slice(0, 3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`h-full flex items-center px-5 text-sm font-medium transition-colors border-b-2 ${
                  isActive(link.to)
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative h-full" ref={dropdownRef}>
              <button
                onClick={() => setFacilitiesOpen(!facilitiesOpen)}
                className={`h-full flex items-center gap-1.5 px-5 text-sm font-medium transition-colors border-b-2 ${
                  isFacilitiesActive
                    ? 'border-white text-white'
                    : 'border-transparent text-gray-300 hover:text-white'
                }`}
              >
                {nav.facilities}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${facilitiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {facilitiesOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border-t-4 border-navy-900 py-2 z-50">
                  {facilitySubLinks.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      className={`block px-5 py-3 text-sm transition-colors ${
                        isActive(sub.to)
                          ? 'bg-navy-50 text-navy-900 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-navy-900'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`h-full flex items-center px-5 text-sm font-medium transition-colors border-b-2 ${
                isActive('/contact')
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-300 hover:text-white'
              }`}
            >
              {nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{languageNames[language === 'en' ? 'zh' : 'en' as Language]}</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-800">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {links.slice(0, 3).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium ${
                  isActive(link.to)
                    ? 'text-white bg-navy-800'
                    : 'text-gray-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium ${
                  isFacilitiesActive
                    ? 'text-white bg-navy-800'
                    : 'text-gray-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                {nav.facilities}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileFacilitiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileFacilitiesOpen && (
                <div className="ml-4 border-l-2 border-navy-700 space-y-1">
                  {facilitySubLinks.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm ${
                        isActive(sub.to)
                          ? 'text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium ${
                isActive('/contact')
                  ? 'text-white bg-navy-800'
                  : 'text-gray-300 hover:text-white hover:bg-navy-800'
              }`}
            >
              {nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
