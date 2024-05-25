import { Inter_Tight } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const inter = Inter_Tight({ subsets: ['latin'], variable: '--font-inter' });
const display = localFont({
  src: './display.ttf',
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'AKDMY',
  description:
    'TRANSFORMING THE FUTURE OF FOOTBALL. GET MENTORED BY SV2, JOIN GIVEAWAYS, & GET ACCESS TO EXCLUSIVE COMMMUNTIES.',
  openGraph: {
    images: 'https://akdmy.netlify.app/social.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
