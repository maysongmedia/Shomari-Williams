
export interface QuoteFormData {
  zipCode: string;
  county: string;
  age: string;
  gender: 'male' | 'female' | '';
  coverageAmount: string;
  name: string;
  email: string;
  phone: string;
}

export type FormStep = 1 | 2 | 3 | 4;

export interface LearningItem {
  id: string;
  title: string;
  description: string;
  category: string[];
  image: string;
  isPremium?: boolean;
}
