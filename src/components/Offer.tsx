import React from "react";
import { ShoppingCart, Package, CheckCircle2, Sparkles, TruckIcon, Calendar, ShieldCheck } from "lucide-react";
import { INSTALLMENT_PRICE, INSTALLMENTS, PRODUCT_PRICE } from "../constants";

const Offer: React.FC = () => {
  return (
    <>
      <section className="py-8 md:py-16 bg-gradient-to-br from-teal-50 to-rose-50" id="comprar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                    Adquira seu Kit Cronograma Capilar Hoje
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
                    Transforme seus cabelos com nosso sistema profissional de tratamento. Resultados visíveis desde a primeira aplicação!
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <Package className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">O Kit Inclui:</h3>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-amber-500" />
                            <span>1 Máscara de Nutrição (300g)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-teal-500" />
                            <span>1 Máscara de Hidratação (300g)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-rose-500" />
                            <span>1 Máscara de Reconstrução (300g)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-purple-500" />
                            <span>1 Shampoo 3 em 1 (500ml)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Sparkles className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Benefícios do Kit:</h3>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-teal-500" />
                            <span>Tratamento completo para todos os tipos de cabelo</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-teal-500" />
                            <span>Fórmula profissional com ativos concentrados</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-teal-500" />
                            <span>Rendimento de até 3 meses de tratamento</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                          Preço Promocional
                        </span>
                        <div className="mt-1 flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-teal-600">
                            R$ {PRODUCT_PRICE},00
                          </span>
                        </div>
                        <span className="text-sm text-rose-600 font-medium mt-1">
                          Economize R$ 59,70
                        </span>
                      </div>
                    </div>

                    <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                          Parcelamento
                        </span>
                        <div className="mt-1">
                          <span className="text-2xl font-bold text-gray-900">
                            {INSTALLMENTS}x de R$ {INSTALLMENT_PRICE.toFixed(2)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 mt-1">
                          Sem juros no cartão
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-rose-600 text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:bg-rose-700 hover:shadow-lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Comprar Agora
                  </a>

                  <div className="mt-4 text-center text-sm text-gray-500">
                    Aceitamos todos os cartões, Pix e boleto
                  </div>

                  <div className="mt-6 space-y-4 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <TruckIcon className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Frete Grátis</h4>
                        <p className="text-sm text-gray-600">Entrega para todo o Brasil sem custo adicional.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Receba em até 7 dias</h4>
                        <p className="text-sm text-gray-600">Envio rápido com código de rastreamento.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Garantia de 7 dias</h4>
                        <p className="text-sm text-gray-600">Insatisfeito? Devolvemos seu dinheiro.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-rose-500 p-8 lg:p-0 flex items-center justify-center">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -top-6 -left-6 bg-white rounded-full shadow-lg p-3 z-10 animate-pulse">
                    <div className="bg-rose-600 text-white font-bold rounded-full p-2">
                      <div className="text-center p-1">
                        <div className="text-xs uppercase">Oferta</div>
                        <div className="text-xl">Limitada</div>
                      </div>
                    </div>
                  </div>

                  <img
                    src="https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg"
                    alt="Kit Cronograma Capilar Fio'rico"
                    className="rounded-xl shadow-2xl transform rotate-3 relative z-0"
                  />

                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-10">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-amber-600 rounded-lg flex items-center justify-center">
                        <img 
                          src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg"
                          alt="Nutrição"
                          className="h-10 w-10 rounded object-cover"
                        />
                      </div>
                      <div className="h-12 w-12 bg-teal-600 rounded-lg flex items-center justify-center">
                        <img 
                          src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg"
                          alt="Hidratação"
                          className="h-10 w-10 rounded object-cover"
                        />
                      </div>
                      <div className="h-12 w-12 bg-rose-600 rounded-lg flex items-center justify-center">
                        <img 
                          src="https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg"
                          alt="Reconstrução"
                          className="h-10 w-10 rounded object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Produtos Individuais
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Escolha suas máscaras favoritas separadamente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Máscara de Nutrição */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-amber-100 relative">
                <img
                  src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg"
                  alt="Máscara de Nutrição"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-amber-600 text-white font-bold px-4 py-1 rounded-full">
                  Nutrição
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Máscara de Nutrição</h3>
                <p className="text-gray-600 mt-2">300g de produto</p>
                <div className="mt-4 space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                      <span>Rico em óleos essenciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                      <span>Repõe lipídios naturais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                      <span>Combate ressecamento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                      <span>Ação prolongada</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Com Óleo de Argan</span>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Vegano</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-900">R$ 69,90</span>
                </div>
                <button className="mt-4 w-full bg-amber-600 text-white py-2 px-4 rounded-xl hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Comprar
                </button>
              </div>
            </div>

            {/* Máscara de Hidratação */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-teal-100 relative">
                <img
                  src="https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg"
                  alt="Máscara de Hidratação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-teal-600 text-white font-bold px-4 py-1 rounded-full">
                  Hidratação
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Máscara de Hidratação</h3>
                <p className="text-gray-600 mt-2">300g de produto</p>
                <div className="mt-4 space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-500" />
                      <span>Hidratação profunda</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-500" />
                      <span>Reduz o frizz</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-500" />
                      <span>Maciez imediata</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-500" />
                      <span>Brilho intenso</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Com Ácido Hialurônico</span>
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Sem Parabenos</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-900">R$ 69,90</span>
                </div>
                <button className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Comprar
                </button>
              </div>
            </div>

            {/* Máscara de Reconstrução */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-rose-100 relative">
                <img
                  src="https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg"
                  alt="Máscara de Reconstrução"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-rose-600 text-white font-bold px-4 py-1 rounded-full">
                  Reconstrução
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Máscara de Reconstrução</h3>
                <p className="text-gray-600 mt-2">300g de produto</p>
                <div className="mt-4 space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-500" />
                      <span>Fortalecimento intenso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-500" />
                      <span>Reduz quebra</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-500" />
                      <span>Recupera danos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-500" />
                      <span>Proteção térmica</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">Com Queratina</span>
                    <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">Com Ceramidas</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-900">R$ 69,90</span>
                </div>
                <button className="mt-4 w-full bg-rose-600 text-white py-2 px-4 rounded-xl hover:bg-rose-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Comprar
                </button>
              </div>
            </div>

            {/* Pill Food Suplemento */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-purple-100 relative">
                <img
                  src="https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg"
                  alt="Pill Food Suplemento"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-purple-600 text-white font-bold px-4 py-1 rounded-full">
                  Suplemento
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Pill Food</h3>
                <p className="text-gray-600 mt-2">Suplemento alimentar (60 cápsulas)</p>
                <div className="mt-4 space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span>Cabelos mais fortes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span>Unhas resistentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      <span>Pele hidratada</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Sem açúcar</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Sem glúten</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">100% natural</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-gray-900">R$ 89,90</span>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;