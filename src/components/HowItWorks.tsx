import React from "react";
import { ArrowRight } from "lucide-react";
import { MASKS } from "../constants";

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Como Funciona o Cronograma Capilar
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Um sistema completo e fácil de seguir para transformar seus cabelos em apenas algumas semanas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 relative">
          {MASKS.map((mask, index) => (
            <React.Fragment key={mask.id}>
              <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                <div className={`${mask.color} text-white h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mask.name}</h3>
                <p className="text-gray-600 max-w-xs">
                  {index === 0 && "Comece nutrindo profundamente os fios para repor lipídios e proteínas."}
                  {index === 1 && "Continue com hidratação para devolver a umidade natural e reduzir o frizz."}
                  {index === 2 && "Finalize com reconstrução para fortalecer e selar as cutículas dos fios."}
                </p>
                <div className={`mt-4 py-2 px-4 rounded-full ${mask.lightColor} text-sm font-medium ${mask.color.replace('bg-', 'text-')}`}>
                  {index === 0 && "1 vez por semana"}
                  {index === 1 && "1-2 vezes por semana"}
                  {index === 2 && "a cada 15 dias"}
                </div>
              </div>
              
              {index < MASKS.length - 1 && (
                <div className="hidden md:block">
                  <ArrowRight className="h-10 w-10 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Dicas para Resultados Profissionais
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-teal-600 font-medium">1</span>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">Lavagem prévia:</span> Lave bem os cabelos antes de aplicar as máscaras para remover resíduos e impurezas.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-teal-600 font-medium">2</span>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">Tempo de pausa:</span> Deixe a máscara agir por 15-20 minutos, usando uma touca térmica para potencializar os resultados.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-teal-600 font-medium">3</span>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">Enxágue completo:</span> Remova todo o produto para evitar acúmulo e garantir cabelos leves e naturais.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-teal-600 font-medium">4</span>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">Sequência:</span> Respeite o intervalo recomendado entre cada etapa do cronograma para resultados otimizados.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;