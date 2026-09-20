import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';

export default function Accessories() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative" id="accessories">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-700 dark:text-primary-container px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-surface-container border border-cyan-300 dark:border-primary-container/30 font-semibold transition-colors">
            Hardware Showroom
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-bold text-slate-900 dark:text-on-surface tracking-tight transition-colors leading-tight">
            Premium Accessories & Hardware Peripherals
          </h2>
          <p className="text-sm sm:text-base font-body text-slate-600 dark:text-on-surface-variant max-w-2xl transition-colors">
            Explore curated components in stock and available for immediate setup, upgrade, or integration.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteData.accessories.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -3, borderColor: 'rgba(6, 182, 212, 0.4)' }}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-surface-container-low/60 border border-slate-200 dark:border-outline-variant/30 transition-all flex items-start justify-between group shadow-sm cursor-default"
            >
              <div className="space-y-2 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="material-symbols-outlined text-cyan-600 dark:text-primary">{item.icon}</span>
                  <span className={`px-2 py-0.5 rounded-full bg-slate-100 dark:bg-surface-container text-[10px] font-mono font-bold ${
                    item.stock === 'CUSTOM ORDER' ? 'text-indigo-600 dark:text-secondary' : 'text-cyan-700 dark:text-primary-container'
                  }`}>
                    {item.stock}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-on-surface">{item.title}</h4>
                <p className="text-[13px] font-body text-slate-500 dark:text-outline leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
