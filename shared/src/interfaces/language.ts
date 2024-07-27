export interface Language {
  id: string;
  label: string;
  icon: string;
}

export interface Translation {
  language: Language;
  isLoading: boolean;
}
