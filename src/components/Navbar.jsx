import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = siteData.nav.map(n => n.href.slice(1)).reverse();
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200; // Trigger when top of section is near the top of viewport
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount in case we start scrolled down
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-surface/85 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-surface-container-lowest/60 border-b border-slate-200/80 dark:border-outline-variant/30'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-12 py-3.5 max-w-[1440px] mx-auto gap-2 lg:gap-6">
        
        {/* Left: Brand & Status */}
        <div className="flex items-center gap-4 xl:gap-6 shrink-0">
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group transition-all duration-200 active:scale-95">
            <motion.img
              whileHover={{ rotate: 5 }}
              alt="Somnath Infotech Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-200 dark:border-outline-variant/50 shadow-md shadow-cyan-500/10 dark:shadow-primary-container/20 group-hover:border-cyan-500 dark:group-hover:border-primary-container transition-colors"
              src={isDark ? siteData.brand.logoDark : siteData.brand.logoLight}
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-display font-extrabold text-slate-900 dark:text-on-surface tracking-tight flex items-center gap-1.5 transition-colors">
                {siteData.brand.name}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-primary-container inline-block" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-500 dark:text-outline tracking-wider uppercase">
                {siteData.brand.tagline}
              </span>
            </div>
          </a>

        {/* Status Badge (Large Desktop Only) */}
          <div className="hidden 2xl:flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-surface-container-low border border-slate-200 dark:border-outline-variant/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 dark:bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600 dark:bg-primary-container" />
            </span>
            <span className="text-[11px] font-mono font-semibold text-cyan-700 dark:text-primary">
              {siteData.brand.statusBadge}
            </span>
          </div>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 flex-1 overflow-visible">
          {siteData.nav.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveSection(href.slice(1))}
                className={`relative text-sm font-heading font-semibold tracking-wide transition-colors duration-200 pb-1 whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-700 dark:text-primary-container'
                    : 'text-slate-600 dark:text-on-surface-variant hover:text-cyan-600 dark:hover:text-primary'
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyan-600 dark:bg-primary-container rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0 relative z-20">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-surface-container dark:hover:bg-surface-container-high text-slate-700 dark:text-on-surface border border-slate-300/80 dark:border-outline-variant/40 transition-all shadow-sm"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined text-[20px] text-amber-300"
                >
                  light_mode
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined text-[20px] text-slate-700"
                >
                  dark_mode
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Phone Icon */}
          <a
            href="tel:+919876543210"
            title="Direct Line"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-surface-container dark:hover:bg-surface-container-high text-slate-700 dark:text-on-surface border border-slate-300/80 dark:border-outline-variant/40 hover:text-cyan-600 dark:hover:text-primary-container transition-all"
          >
            <span className="material-symbols-outlined">call</span>
          </a>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-primary-container dark:to-tertiary-container text-white dark:text-on-primary-container text-sm font-heading font-bold shadow-md shadow-cyan-600/20 dark:shadow-primary-container/30 hover:brightness-110 transition-all"
          >
            <span>Get a Quote</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-surface-container text-slate-700 dark:text-on-surface border border-slate-300 dark:border-outline-variant/40"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-surface-container-low/95 backdrop-blur-xl border-b border-slate-200 dark:border-outline-variant/40 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {siteData.nav.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setActiveSection(href.slice(1));
                    setMobileOpen(false);
                  }}
                  className={`py-2.5 px-3 rounded-lg text-sm font-heading font-semibold transition-colors ${
                    activeSection === href.slice(1)
                      ? 'text-cyan-700 dark:text-primary-container bg-cyan-50 dark:bg-surface-container'
                      : 'text-slate-700 dark:text-on-surface-variant hover:bg-slate-50 dark:hover:bg-surface-container'
                  }`}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-primary-container dark:to-tertiary-container text-white dark:text-on-primary-container text-sm font-heading font-bold shadow-md"
              >
                Get a Quote
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
