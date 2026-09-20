import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';

const stepColors = ['text-cyan-600 dark:text-primary-container', 'text-cyan-700 dark:text-primary', 'text-indigo-600 dark:text-secondary', 'text-sky-700 dark:text-tertiary', 'text-cyan-600 dark:text-primary-container'];
const stageColors = ['text-cyan-700 dark:text-primary', 'text-cyan-700 dark:text-primary', 'text-indigo-600 dark:text-secondary', 'text-sky-700 dark:text-tertiary', 'text-cyan-700 dark:text-primary-container'];

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-100/70 dark:bg-surface-container-lowest/60 border-t border-slate-200 dark:border-outline-variant/30 relative transition-colors" id="process">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-700 dark:text-primary px-3.5 py-1 rounded-full bg-white dark:bg-surface-container border border-slate-200 dark:border-outline-variant/40 font-semibold transition-colors">
            Methodical Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-bold text-slate-900 dark:text-on-surface tracking-tight transition-colors leading-tight">
            Our Streamlined 5-Step Repair Process
          </h2>
          <p className="text-sm sm:text-base font-body text-slate-600 dark:text-on-surface-variant max-w-2xl transition-colors">
            From first intake to final stress-testing, experience complete transparency and zero guesswork.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteData.processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.4)' }}
              className="p-4 sm:p-5 rounded-xl bg-white dark:bg-surface-container-low/70 border border-slate-200 dark:border-outline-variant/30 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`font-mono text-base sm:text-lg font-bold ${stepColors[i]}`}>{step.step}</span>
                  <span className={`material-symbols-outlined ${stepColors[i]}`}>{step.icon}</span>
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-on-surface mb-2">{step.title}</h4>
                <p className="text-[13px] font-body text-slate-500 dark:text-outline">{step.desc}</p>
              </div>
              <div className={`mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-outline-variant/20 text-[12px] sm:text-[13px] font-heading font-semibold ${stageColors[i]}`}>
                {step.stage}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
