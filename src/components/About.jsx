import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const { isDark } = useTheme();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-100/80 dark:bg-surface-container-lowest/70 border-t border-slate-200 dark:border-outline-variant/30 relative transition-colors" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl bg-white dark:bg-surface-container-low border border-slate-200 dark:border-outline-variant/40 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-100 dark:bg-surface-container-high border border-cyan-500/30 dark:border-primary-container/30 flex items-center justify-center mb-5 sm:mb-6">
                <img alt="Somnath Infotech" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg" src={isDark ? siteData.brand.logoDark : siteData.brand.logoLight} />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-on-surface mb-3 sm:mb-4">
                Precision Engineering Since Day One
              </h3>
              <p className="text-sm sm:text-base font-body text-slate-600 dark:text-on-surface-variant leading-relaxed mb-5 sm:mb-6">
                Founded on integrity, engineering rigor, and personalized customer care. Whether you are troubleshooting a failing office workstation or commissioning an elite studio machine, we treat every system with precision craftsmanship.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-outline-variant/30">
                {[
                  { icon: 'verified_user', text: 'Certified Bench Technicians' },
                  { icon: 'lock', text: 'Zero-Data Loss Protocol Guaranteed' },
                  { icon: 'handshake', text: 'Local Community Trusted Partner' },
                ].map(({ icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-sm font-heading font-semibold text-slate-800 dark:text-on-surface"
                  >
                    <span className="material-symbols-outlined text-cyan-600 dark:text-primary-container">{icon}</span>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-700 dark:text-primary-container px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-surface-container border border-cyan-300 dark:border-primary-container/30 font-semibold transition-colors inline-block">
              About Somnath Infotech
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-bold text-slate-900 dark:text-on-surface tracking-tight transition-colors leading-tight">
              Technology Solutions You Can Rely On
            </h2>
            <p className="text-base sm:text-lg font-body text-slate-700 dark:text-on-surface-variant leading-relaxed">
              Somnath Infotech is a dedicated local technology hub providing comprehensive computer repair, computer reselling, custom PC assembly, and authorized accessories & peripherals.
            </p>
            <p className="text-sm sm:text-base font-body text-slate-500 dark:text-outline leading-relaxed">
              We reject the disposable hardware mindset. Instead of pushing unnecessary full-system replacements, our technicians inspect down to component traces and power controllers to deliver cost-effective, long-lasting fixes. When building custom rigs, we hand-tune memory timings, verify airflow dynamics, and deliver whisper-quiet systems that outperform off-the-shelf computers.
            </p>
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-5 sm:px-6 py-3 rounded-full bg-white dark:bg-surface-container hover:bg-slate-100 dark:hover:bg-surface-container-high border border-slate-300 dark:border-outline-variant text-slate-800 dark:text-on-surface font-heading font-semibold text-sm shadow-sm transition-all text-center"
              >
                Meet Our Team
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-5 sm:px-6 py-3 rounded-full bg-cyan-50 dark:bg-primary-container/10 border border-cyan-500/40 dark:border-primary-container/40 text-cyan-800 dark:text-primary-container font-heading font-semibold text-sm hover:bg-cyan-100/60 dark:hover:bg-primary-container/20 transition-all text-center"
              >
                Visit Our Tech Lab
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
