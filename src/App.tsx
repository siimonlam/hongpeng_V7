import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { FacilityDongguanPage } from './pages/FacilityDongguanPage';
import { FacilityCambodiaPage } from './pages/FacilityCambodiaPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/facilities/dongguan" element={<FacilityDongguanPage />} />
            <Route path="/facilities/cambodia" element={<FacilityCambodiaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
