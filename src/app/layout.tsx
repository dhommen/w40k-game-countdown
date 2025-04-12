import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Chaos Countdown',
  description: 'A Warhammer 40K Chaos Space Marines themed countdown timer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
