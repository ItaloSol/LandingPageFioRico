export interface TestimonialType {
  id: number;
  name: string;
  image: string;
  stars: number;
  text: string;
}

export interface FAQItemType {
  question: string;
  answer: string;
}

export interface ProductFeatureType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MaskType {
  id: number;
  name: string;
  description: string;
  color: string;
  lightColor: string;
  benefits: string[];
  keyIngredients: string[];
  image: string;
}