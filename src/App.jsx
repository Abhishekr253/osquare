import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutKit from './components/AboutKit';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HygieneSection from './components/HygieneSection';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import IntentionSection from './components/IntentionSection';
import ScrollToTop from './ScrollToTop';

function App() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={scrollToSection} />

      <main>
      <ScrollToTop />
        
        <Routes>


          {/* HOME PAGE ROUTE */}
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Banner onExplore={() => scrollToSection('about')} />
                </section>

                <AboutKit />
                <HygieneSection />
                <Products />
                <IntentionSection />
                
                <section id="contact">
                  <Footer onNavigate={scrollToSection} />
                </section>
              </>
            }
          />

          {/* DETAILS PAGE ROUTE */}
          <Route path="/details" element={<ProductDetail />} />
          <Route path="/aboutUs" element={<AboutUs />} />

        </Routes>
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;
