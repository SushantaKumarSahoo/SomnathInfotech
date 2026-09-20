import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUpDefault from 'react-countup';
import { siteData } from '../data/siteData';

const CountUp = CountUpDefault.default ? CountUpDefault.default : CountUpDefault;


export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-14 sm:py-16 lg:py-20 border-y border-slate-200 dark:border-outline-variant/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-surface-container-lowest dark:via-surface dark:to-surface-container-lowest relative overflow-hidden transition-colors">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/10 dark:bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteData.stats.map(({ value, suffix, label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
              className="flex flex-col items-center text-center space-y-2 sm:space-y-3"
            >
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-cyan-400 dark:text-primary-container">{icon}</span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white dark:text-on-surface">
                {inView ? (
                  <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </span>
              <span className="text-[11px] sm:text-[12px] font-mono font-semibold text-slate-400 dark:text-outline tracking-wider uppercase">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
