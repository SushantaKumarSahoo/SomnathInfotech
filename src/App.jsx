import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';

const PCBuilds = React.lazy(() => import('./components/PCBuilds'));
const Stats = React.lazy(() => import('./components/Stats'));
const Process = React.lazy(() => import('./components/Process'));
const Accessories = React.lazy(() => import('./components/Accessories'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-surface text-slate-800 dark:text-on-surface font-body antialiased overflow-x-hidden tech-grid-bg transition-colors duration-300 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Suspense fallback={<div className="h-32 w-full"></div>}>
            <PCBuilds />
            <Stats />
            <Process />
            <Accessories />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-32 w-full"></div>}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
