import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';

export default function TrustBar() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="border-y border-slate-200 dark:border-outline-variant/30 bg-white/70 dark:bg-surface-container-lowest/70 backdrop-blur-sm py-6 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteData.trustPillars.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.4)' }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-surface-container-low/40 border border-slate-200/80 dark:border-outline-variant/20 transition-all cursor-default"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-cyan-50 dark:bg-surface-container flex items-center justify-center text-cyan-700 dark:text-primary-container border border-cyan-200 dark:border-primary-container/20 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">{icon}</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-base font-heading font-semibold text-slate-900 dark:text-on-surface truncate">{title}</h4>
                <p className="text-[11px] font-mono font-semibold text-slate-500 dark:text-outline tracking-wider uppercase">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
