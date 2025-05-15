import { useEffect } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";

function App() {
  useEffect(() => {
    // Update document title with keywords
    document.title = "Kit Cronograma Capilar Fio'rico | Desde 2013 Transformando Cabelos";
    
    // Find and update favicon
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.setAttribute("href", "/ico.ico");
    }
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Kit Cronograma Capilar Fio'rico!");
    window.open(`https://wa.me/5599982388533?text=${message}`, '_blank');
  };

  return (
    <div className="font-sans">
      {/* Main background with reduced opacity and proper z-index */}
      <div 
        style={{ backgroundImage: "url('/fundo3.webp')" }}
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] pointer-events-none" 
        role="presentation" 
        aria-hidden="true"
      />
      
      <header className="bg-white/95 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navegação principal">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/logo.webp" alt="Fio'rico Logo" className="h-8" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beneficios" className="text-gray-600 hover:text-teal-600 transition-colors">
                Benefícios
              </a>
              <a href="#como-funciona" className="text-gray-600 hover:text-teal-600 transition-colors">
                Como Funciona
              </a>
              <a href="#depoimentos" className="text-gray-600 hover:text-teal-600 transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-600 hover:text-teal-600 transition-colors">
                FAQ
              </a>
            </div>
            <a
              href="#comprar"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-rose-600 hover:bg-rose-700 transition-colors"
            >
              Comprar
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        
        <div className="relative">
          <div 
            style={{ backgroundImage: "url('/fundo3.webp')" }}
            className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
            aria-hidden="true"
          />
          <Benefits />
        </div>
        
        <HowItWorks />
        
        <div className="relative">
          <div 
            style={{ backgroundImage: "url('/fundo3.webp')" }}
            className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
            aria-hidden="true"
          />
          <Testimonials />
        </div>
        
        <Offer />
        
        <div className="relative">
          <div 
            style={{ backgroundImage: "url('/fundo3.webp')" }}
            className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
            aria-hidden="true"
          />
          <FAQ />
        </div>
      </main>

      <Footer />

      {/* WhatsApp Floating Button with pulsing effect */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline">Fale Conosco</span>
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
        <span className="absolute -inset-1 rounded-full bg-green-500/20 animate-pulse"></span>
      </button>
    </div>
  );
}

export default App;