import './globals.css'
import { Navbar } from './components/navbar';

export const metadata = {
  title: 'Estimation App',
  description: 'Rough Estimate of A Structure',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className='flex'>
        <header>
          <Navbar />
        </header>
        <main className='grow'>
          {children}
        </main>
      </body>
    </html>
  );
}

