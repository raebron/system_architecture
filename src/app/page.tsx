'use client';

import DeckShell from '@/components/DeckShell';
import { slides } from '@/content/slides';

export default function Home() {
  return <DeckShell slides={slides} />;
}
