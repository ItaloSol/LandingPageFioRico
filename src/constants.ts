import { FAQItemType, MaskType, ProductFeatureType, TestimonialType } from "./types";

export const PRODUCT_PRICE = 250;
export const INSTALLMENTS = 12;
export const INSTALLMENT_PRICE = PRODUCT_PRICE / INSTALLMENTS;

export const MASKS: MaskType[] = [
  {
    id: 1,
    name: "Nutrição",
    description: "Nutre profundamente os fios, devolvendo os lipídios e proteínas perdidos, combatendo o ressecamento.",
    color: "bg-amber-600",
    lightColor: "bg-amber-100",
    benefits: [
      "Combate o ressecamento",
      "Devolve brilho natural",
      "Repõe lipídios e aminoácidos"
    ],
    keyIngredients: [
      "Óleo de Argan",
      "Manteiga de Karité",
      "Proteínas Vegetais"
    ],
    image: "/mas_nutri.webp"
  },
  {
    id: 2,
    name: "Hidratação",
    description: "Resgata a umidade natural dos cabelos, deixando-os macios, brilhantes e fáceis de pentear.",
    color: "bg-teal-600",
    lightColor: "bg-teal-100",
    benefits: [
      "Maciez imediata",
      "Reduz o frizz",
      "Facilita o desembaraço"
    ],
    keyIngredients: [
      "Ácido Hialurônico",
      "Aloe Vera",
      "Glicerina Vegetal"
    ],
    image: "/mas_hidra.webp"
  },
  {
    id: 3,
    name: "Reconstrução",
    description: "Recupera a estrutura interna e externa dos fios danificados, reduzindo a quebra e fortalecendo o cabelo.",
    color: "bg-rose-600",
    lightColor: "bg-rose-100",
    benefits: [
      "Reduz quebra dos fios",
      "Fortalece a estrutura capilar",
      "Sela as cutículas danificadas"
    ],
    keyIngredients: [
      "Queratina Vegetal",
      "Proteínas do Trigo",
      "Ceramidas"
    ],
    image: "/mas_recon.webp"
  }
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: "Mariana Silva",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.webp",
    stars: 5,
    text: "Depois de anos sofrendo com química, meu cabelo finalmente está saudável de novo. O kit Fio'rico trouxe vida aos meus fios em apenas 3 semanas!"
  },
  {
    id: 2,
    name: "Camila Alves",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.webp",
    stars: 5,
    text: "Nunca acreditei em produtos para cabelo até experimentar este kit. A diferença é visível desde a primeira aplicação. Meu cabelo está mais forte e brilhante!"
  },
  {
    id: 3,
    name: "Rafael Mendes",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.webp",
    stars: 4,
    text: "Como homem, nunca dei muita atenção para tratamentos capilares. Comecei a usar depois que minha namorada insistiu e os resultados são impressionantes."
  }
];

export const FEATURES: ProductFeatureType[] = [
  {
    title: "Fórmula Concentrada",
    description: "Ingredientes em alta concentração para resultados profissionais desde a primeira aplicação.",
    icon: "Shield"
  },
  {
    title: "Sem Parabenos",
    description: "Livre de parabenos, sulfatos e outros ingredientes prejudiciais à saúde dos seus fios.",
    icon: "Leaf"
  },
  {
    title: "Tratamento Completo",
    description: "Sistema 3 em 1 que contempla todas as necessidades do seu cabelo em um único kit.",
    icon: "CheckCircle"
  },
  {
    title: "Testado Dermatologicamente",
    description: "Seguro para todos os tipos de cabelo e testado por especialistas.",
    icon: "Heart"
  }
];

export const FAQ_ITEMS: FAQItemType[] = [
  {
    question: "Como funciona o cronograma capilar?",
    answer: "Alterne entre nutrição (1x/semana), hidratação (1-2x/semana) e reconstrução (15/15 dias). Mantenha 2-3 dias de intervalo entre as máscaras."
  },
  {
    question: "O produto serve para qual tipo de cabelo?",
    answer: "Funciona em todos os tipos: lisos, ondulados, cacheados, crespos e quimicamente tratados. Fórmula profissional balanceada para todas as texturas."
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "Frete grátis para todo Brasil. Capitais: 3-5 dias úteis. Interior: 5-7 dias. Regiões Norte e Nordeste: 7-10 dias úteis."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Garantia incondicional de satisfação. Se não gostar, devolvemos seu dinheiro ou trocamos o produto, sem questionamentos."
  },
  {
    question: "Qual a quantidade de produto em cada embalagem?",
    answer: "3 máscaras de 300g cada (total 900g). Rendimento: 3-4 meses (cabelos curtos), 2-3 meses (médios), 1,5-2 meses (longos)."
  },
  {
    question: "Os produtos têm registro na ANVISA?",
    answer: "Sim! Todos os produtos são registrados na ANVISA (MS: 2.5351.0001.001-1), testados dermatologicamente e fabricados em laboratório certificado."
  },
  {
    question: "Posso usar em cabelos com química?",
    answer: "Sim! Ideal para cabelos com coloração, descoloração, alisamento ou relaxamento. Recupera danos e protege os fios."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Cartão de crédito em até 12x sem juros, PIX (5% de desconto) e boleto (3% de desconto). Todas as transações são seguras."
  }
];