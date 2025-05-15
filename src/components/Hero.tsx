import React from "react";
import { ShoppingCart, TruckIcon, ShieldCheck } from "lucide-react";
import { INSTALLMENT_PRICE, INSTALLMENTS, PRODUCT_PRICE } from "../constants";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-50 to-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 md:mb-4">
              <img src="/logo.webp" alt="Fio'rico Logo" className="h-8" />
                <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs md:text-sm font-medium rounded-full">
                  Desde 2013
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 leading-tight">
                Seu Cronograma Capilar Profissional em Casa
              </h1>
              <p className="mt-3 md:mt-4 text-lg md:text-xl text-gray-600">
                Kit completo com 3 máscaras profissionais de 300g cada + Shampoo:
              </p>
              <div className="mt-4 space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-600"></span>
                  <p className="text-base md:text-lg text-gray-700">
                    <span className="font-semibold text-amber-600">Nutrição</span> - Repõe lipídios e proteínas
                  </p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-600"></span>
                  <p className="text-base md:text-lg text-gray-700">
                    <span className="font-semibold text-teal-600">Hidratação</span> - Devolve maciez e brilho
                  </p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-600"></span>
                  <p className="text-base md:text-lg text-gray-700">
                    <span className="font-semibold text-rose-600">Reconstrução</span> - Fortalece e recupera
                  </p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-purple-600"></span>
                  <p className="text-base md:text-lg text-gray-700">
                    <span className="font-semibold text-purple-600">Shampoo</span> - Limpeza profissional (500ml)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                <span className="text-teal-600">R$ {PRODUCT_PRICE},00</span>
                <span className="text-base md:text-lg text-gray-500 block md:inline md:ml-2">
                  ou {INSTALLMENTS}x de R$ {INSTALLMENT_PRICE.toFixed(2)}
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start mt-4">
                <div className="flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full w-full sm:w-auto">
                  <TruckIcon className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Frete Grátis</span>
                    <span className="text-xs">Entrega para todo o Brasil</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full w-full sm:w-auto">
                  <ShieldCheck className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Garantia de 7 dias</span>
                    <span className="text-xs">Devolução garantida</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#comprar"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-full bg-rose-600 text-white font-medium text-base md:text-lg w-full sm:w-auto transition-all duration-300 transform hover:scale-105 hover:bg-rose-700 hover:shadow-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Comprar Agora
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-rose-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/kit_hero.webp"
                alt="Kit Cronograma Capilar Fio'rico"
                className="relative rounded-lg shadow-2xl transform md:scale-110 object-cover h-full w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-2 md:p-3 lg:p-4 animate-bounce">
                <div className="bg-teal-600 text-white font-bold rounded-full flex items-center justify-center h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <div className="text-center">
                    <div className="text-xs md:text-sm">NOVO</div>
                    <div className="text-base md:text-lg lg:text-xl">KIT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;