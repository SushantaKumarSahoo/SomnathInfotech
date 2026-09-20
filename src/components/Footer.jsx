import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { isDark } = useTheme();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Computer Repair', href: '#services' },
        { label: 'Certified Reselling', href: '#services' },
        { label: 'Custom PC Building', href: '#pc-builds' },
        { label: 'Accessories & Peripherals', href: '#accessories' },
      ],
    },
    {
      title: 'Standards',
      links: [
        { label: 'Diagnostic Process', href: '#process' },
        { label: 'Warranty Assurance', href: '#about' },
        { label: 'About Us', href: '#about' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Direct Support', href: '#contact', highlight: true },
        { label: 'Privacy Policy', href: '#contact' },
        { label: 'Terms of Service', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-surface-container-lowest text-slate-300 dark:text-on-surface-variant border-t border-slate-800 dark:border-outline-variant/20 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 max-w-[1440px] mx-auto" ref={ref}>
        {/* Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800 dark:border-outline-variant/20"
        >
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Somnath Infotech Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-slate-700 dark:border-outline-variant/40"
                src={isDark ? siteData.brand.logoDark : siteData.brand.logoLight}
              />
              <span className="text-xl sm:text-2xl font-heading font-extrabold text-white dark:text-on-surface">
                {siteData.brand.name}
              </span>
            </div>
            <p className="text-[13px] font-body text-slate-400 dark:text-on-surface-variant max-w-sm leading-relaxed">
              High-precision computer engineering, certified motherboard diagnostics, bespoke workstation design, and genuine peripheral sourcing.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {['terminal', 'memory', 'support'].map(icon => (
                <motion.span
                  key={icon}
                  whileHover={{ scale: 1.15, color: '#22d3ee' }}
                  className="w-8 h-8 rounded-lg bg-slate-800 dark:bg-surface-container flex items-center justify-center text-slate-400 dark:text-outline hover:text-cyan-400 dark:hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-base font-heading font-bold text-white dark:text-on-surface">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-[13px] font-body transition-colors duration-150 hover:underline underline-offset-4 ${
                        link.highlight
                          ? 'text-cyan-400 dark:text-primary font-semibold'
                          : 'text-slate-400 dark:text-on-surface-variant hover:text-cyan-400 dark:hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-slate-500 dark:text-outline text-center sm:text-left">
            © {new Date().getFullYear()} Somnath Infotech. All Rights Reserved. Engineered for Precision.
          </p>
          <span className="text-[11px] font-mono text-cyan-400 dark:text-primary flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 dark:bg-primary-container" />
            Proudly serving our local tech community.
          </span>
        </div>
      </div>
    </footer>
  );
}
