import React from "react";
import { MASKS } from "../constants";
import { CheckCircle, Leaf, Heart, ShieldCheck } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <ShieldCheck className="h-6 w-6" />,
  Leaf: <Leaf className="h-6 w-6" />,
  CheckCircle: <CheckCircle className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
};

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transforme Seus Cabelos com Produtos Profissionais
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as três etapas essenciais do nosso kit para um cabelo mais saudável e radiante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASKS.map((mask) => (
            <div
              key={mask.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`h-48 ${mask.lightColor} overflow-hidden relative`}>
                <img
                  src={mask.image}
                  alt={`Máscara de ${mask.name}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 ${mask.color} text-white font-bold px-4 py-1 rounded-full`}>
                  {mask.name}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Máscara de {mask.name}</h3>
                <p className="text-gray-600 mb-4">{mask.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefícios:</h4>
                  <ul className="space-y-1">
                    {mask.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ingredientes-chave:</h4>
                  <ul className="space-y-1">
                    {mask.keyIngredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <Leaf className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;