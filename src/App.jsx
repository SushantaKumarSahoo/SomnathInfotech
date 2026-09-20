import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import PCBuilds from './components/PCBuilds';
import Stats from './components/Stats';
import Process from './components/Process';
import Accessories from './components/Accessories';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-surface text-slate-800 dark:text-on-surface font-body antialiased overflow-x-hidden tech-grid-bg transition-colors duration-300 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <PCBuilds />
          <Stats />
          <Process />
          <Accessories />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
