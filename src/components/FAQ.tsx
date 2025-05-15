import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../constants";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block p-2 bg-teal-100 text-teal-700 rounded-full mb-4">
            <HelpCircle className="h-6 w-6" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o Kit Cronograma Capilar Fio'rico
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Lista de perguntas frequentes">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-200 hover:border-teal-100 focus-within:border-teal-200 focus-within:ring-2 focus-within:ring-teal-100"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-teal-500" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-teal-500" aria-hidden="true" />
                  )}
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 bg-gradient-to-b from-white to-gray-50">
                  <div className="prose prose-gray max-w-none">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-teal-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está pronta para ajudar você a escolher o melhor tratamento para seus cabelos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ricardodoarel20@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white rounded-full transition-colors duration-300"
            >
              ricardodoarel20@gmail.com
            </a>
            <span className="text-gray-400 hidden sm:inline">ou</span>
            <a
              href="tel:+5599982388533"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white hover:bg-teal-700 rounded-full transition-colors duration-300"
            >
              (99) 98238-8533
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;