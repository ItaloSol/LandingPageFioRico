import React from "react";
import { Instagram, Mail, Phone, MapPin, CreditCard } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Fio'rico</h3>
            <p className="text-gray-400 mb-4">
              Transformando cabelos com produtos profissionais de alta qualidade para todos os tipos de fio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/revera_professional" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#comprar" className="text-gray-400 hover:text-white transition-colors">
                  Comprar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:ricardodoarel20@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  ricardodoarel20@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+5599982388533" className="text-gray-400 hover:text-white transition-colors">
                  (99) 98238-8533
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Paulista, 1000, São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Pagamento</h3>
            <p className="text-gray-400 mb-4">
              Aceitamos diversas formas de pagamento com total segurança.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-8 w-12 bg-white rounded flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-gray-800" />
              </div>
              <div className="h-8 w-12 bg-white rounded flex items-center justify-center">
                <span className="text-sm font-bold text-gray-800">PIX</span>
              </div>
              <div className="h-8 w-12 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">BOLETO</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fio'rico. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Desenvolvido por{" "}
              <a 
                href="https://www.instagram.com/landingpagecraft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                landingpagecraft
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;