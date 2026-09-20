import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';

const colorMap = {
  cyan: {
    iconBg: 'bg-cyan-50 dark:bg-surface-container',
    iconText: 'text-cyan-600 dark:text-primary-container',
    iconBorder: 'border-cyan-200 dark:border-primary-container/30',
    checkText: 'text-cyan-600 dark:text-primary-container',
    linkText: 'text-cyan-700 dark:text-primary',
  },
  indigo: {
    iconBg: 'bg-indigo-50 dark:bg-surface-container',
    iconText: 'text-indigo-600 dark:text-secondary',
    iconBorder: 'border-indigo-200 dark:border-secondary/30',
    checkText: 'text-indigo-600 dark:text-secondary',
    linkText: 'text-cyan-700 dark:text-primary',
  },
  sky: {
    iconBg: 'bg-sky-50 dark:bg-surface-container',
    iconText: 'text-sky-700 dark:text-tertiary-container',
    iconBorder: 'border-sky-200 dark:border-tertiary-container/30',
    checkText: 'text-sky-700 dark:text-tertiary-container',
    linkText: 'text-cyan-700 dark:text-primary',
  },
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-700 dark:text-primary-container px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-surface-container border border-cyan-300 dark:border-primary-container/30 font-semibold transition-colors">
            Our Core Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-bold text-slate-900 dark:text-on-surface tracking-tight transition-colors leading-tight">
            Everything You Need for Your Computer
          </h2>
          <p className="text-sm sm:text-base font-body text-slate-600 dark:text-on-surface-variant max-w-2xl transition-colors">
            Comprehensive end-to-end hardware, system, and maintenance services for individuals, businesses, and creators.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {siteData.services.map((service, i) => {
            const c = colorMap[service.color] || colorMap.cyan;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 16px 36px -8px rgba(0, 229, 255, 0.14)' }}
                className="rounded-2xl bg-white dark:bg-surface-container-low/60 border border-slate-200 dark:border-outline-variant/30 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:border-cyan-400/40 dark:hover:border-primary-container/35"
              >
                <div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${c.iconBg} flex items-center justify-center ${c.iconText} border ${c.iconBorder} mb-5 sm:mb-6`}>
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-on-surface mb-2">{service.title}</h3>
                  <p className="text-[13px] font-body text-slate-600 dark:text-on-surface-variant mb-5 sm:mb-6">{service.desc}</p>
                  <ul className="space-y-2.5 sm:space-y-3 border-t border-slate-100 dark:border-outline-variant/20 pt-4 sm:pt-5 mb-6 sm:mb-8">
                    {service.features.map(f => (
                      <li key={f} className="flex items-start gap-2 sm:gap-2.5 text-[13px] font-body text-slate-600 dark:text-outline">
                        <span className={`material-symbols-outlined ${c.checkText} text-[18px] mt-0.5 shrink-0`}>check_circle</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={service.link} className={`inline-flex items-center gap-2 text-sm font-heading font-semibold ${c.linkText} group`}>
                  <span>Learn More</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[16px]">arrow_forward</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
