import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';

export default function PCBuilds() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-100/70 dark:bg-surface-container-lowest/50 border-t border-slate-200 dark:border-outline-variant/30 relative transition-colors" id="pc-builds">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-14 space-y-3"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-700 dark:text-primary px-3.5 py-1 rounded-full bg-white dark:bg-surface-container border border-slate-200 dark:border-outline-variant/40 font-semibold transition-colors">
            Tailored System Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-bold text-slate-900 dark:text-on-surface tracking-tight transition-colors leading-tight">
            Build a PC That Works for You
          </h2>
          <p className="text-sm sm:text-base font-body text-slate-600 dark:text-on-surface-variant max-w-3xl transition-colors">
            Engineered for peak reliability, balanced thermal performance, and pure aesthetics. Select your primary workload to get started with zero guesswork.
          </p>
        </motion.div>

        {/* Build Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {siteData.pcBuilds.map((build, i) => (
            <motion.div
              key={build.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-surface-container-low/70 flex flex-col justify-between group shadow-sm transition-all relative ${
                build.featured
                  ? 'border-2 border-cyan-500/70 dark:border-primary-container/40 hover:border-cyan-500 dark:hover:border-primary-container shadow-lg shadow-cyan-500/10 dark:shadow-primary-container/10'
                  : 'border border-slate-200 dark:border-outline-variant/40 hover:border-cyan-500/60 dark:hover:border-primary-container/60'
              }`}
            >
              {build.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -top-3 right-4 sm:right-6 px-2.5 py-0.5 rounded-full bg-cyan-600 dark:bg-primary-container text-white dark:text-on-primary-container text-[10px] font-bold tracking-wider uppercase"
                >
                  Most Popular
                </motion.div>
              )}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[13px] font-mono font-bold ${build.featured ? 'text-cyan-700 dark:text-primary' : 'text-slate-400 dark:text-outline'}`}>
                    TIER {build.tier}
                  </span>
                  <span className="material-symbols-outlined text-cyan-600 dark:text-primary-container">{build.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-on-surface mb-2">{build.title}</h3>
                <p className="text-[13px] font-body text-slate-500 dark:text-outline mb-4">{build.desc}</p>
                <div className="space-y-2 text-[12px] sm:text-[13px] font-heading font-semibold text-slate-600 dark:text-on-surface-variant">
                  {build.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-primary-container shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 dark:border-outline-variant/30 flex items-center justify-between text-[12px] sm:text-[13px] font-heading font-semibold">
                <span className="text-slate-500 dark:text-outline">Ideal: {build.ideal}</span>
                <span className="text-cyan-700 dark:text-primary group-hover:text-cyan-600 dark:group-hover:text-primary-container cursor-pointer">
                  Consult →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
