export interface Slide {
  id: string;
  title: string;
  narration: string;
  component: React.ComponentType<{ isPresenting: boolean }>;
}

export interface CharacterProps {
  className?: string;
  expression?: 'happy' | 'stressed' | 'angry' | 'sleeping' | 'embarrassed' | 'cool';
  animated?: boolean;
}
