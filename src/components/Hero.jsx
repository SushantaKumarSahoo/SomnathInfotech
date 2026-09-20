import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" id="home">
      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[250px] sm:h-[350px] bg-sky-200/50 dark:bg-secondary-container/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10 transition-colors" />
      <div className="absolute top-1/3 right-5 sm:right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cyan-200/40 dark:bg-primary-container/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10 transition-colors" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-surface-container-low border border-cyan-500/30 dark:border-primary-container/30 shadow-sm transition-colors">
              <span className="text-[11px] font-mono flex items-center gap-1.5 text-cyan-800 dark:text-primary font-semibold">
                <span className="material-symbols-outlined text-[16px] text-cyan-600 dark:text-primary-container">bolt</span>
                {siteData.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-display font-extrabold text-slate-900 dark:text-on-surface tracking-tight leading-tight lg:leading-[1.15] transition-colors"
            >
              {siteData.hero.headlinePart1} <br />
              <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 dark:from-primary-container dark:via-tertiary dark:to-secondary text-transparent bg-clip-text">
                {siteData.hero.headlinePart2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg font-body text-slate-600 dark:text-on-surface-variant max-w-2xl leading-relaxed transition-colors"
            >
              {siteData.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-primary-container dark:to-tertiary-container text-white dark:text-on-primary-container font-heading text-sm font-bold ambient-glow-cyan hover:brightness-110 transition-all"
              >
                <span>Get a Quote</span>
                <span className="material-symbols-outlined">chevron_right</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#services"
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/80 dark:bg-surface-container/60 hover:bg-slate-100 dark:hover:bg-surface-container hover:border-cyan-500/50 dark:hover:border-primary-container/50 border border-slate-300 dark:border-outline-variant/50 text-slate-800 dark:text-on-surface font-heading text-sm font-semibold transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-cyan-600 dark:text-primary">arrow_outward</span>
                <span>Explore Services</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-outline-variant/30 w-full mt-4 transition-colors"
            >
              {siteData.hero.stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-heading font-bold text-cyan-600 dark:text-primary">{value}</span>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-outline tracking-wider uppercase">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual: PC Showcase */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mx-auto max-w-lg rounded-2xl bg-white/90 dark:bg-surface-container-low/70 border border-slate-200/90 dark:border-outline-variant/40 p-4 sm:p-5 shadow-xl dark:shadow-2xl backdrop-blur-xl overflow-hidden transition-colors"
            >
              {/* Top HUD */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-200 dark:border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 dark:bg-error/70" />
                  <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-primary-container/70" />
                  <span className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-secondary/70" />
                  <span className="text-[11px] sm:text-[13px] font-mono text-slate-500 dark:text-outline ml-2">CHASSIS-TELEMETRY: ACTIVE</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-cyan-700 dark:text-primary-container px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-container font-semibold">32°C OPTIMAL</span>
              </div>

              {/* Hardware Visual */}
              <div className="relative h-60 sm:h-80 rounded-xl bg-slate-900 dark:bg-surface-container-lowest/90 border border-slate-800 dark:border-outline-variant/30 flex items-center justify-center p-4 sm:p-6 overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 dark:from-primary-container/20 via-indigo-500/10 dark:via-secondary-container/10 to-transparent" />

                {/* Animated Fans */}
                <div className="absolute left-4 sm:left-8 top-6 sm:top-10 flex flex-col gap-4 sm:gap-6 opacity-85">
                  {[1, 2].map(i => (
                    <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-cyan-400/50 dark:border-primary-container/50 animate-spin-slow flex items-center justify-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-800 dark:bg-surface-container-high border border-cyan-400 dark:border-primary-container" />
                    </div>
                  ))}
                </div>

                {/* GPU Block */}
                <motion.div
                  whileHover={{ borderColor: 'rgba(0, 229, 255, 0.8)' }}
                  className="relative z-10 w-40 sm:w-52 h-36 sm:h-44 rounded-xl bg-slate-800/90 dark:bg-surface-container-high/90 border border-cyan-400/40 dark:border-primary-container/40 p-3 sm:p-4 flex flex-col justify-between shadow-xl backdrop-blur-sm transition-all"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300 dark:text-primary-container tracking-wider font-semibold">RTX HYPER-FLOW</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 dark:bg-primary-container animate-ping" />
                  </div>
                  <div className="space-y-1.5 my-auto">
                    <div className="h-1 bg-gradient-to-r from-cyan-400/80 dark:from-primary-container/80 to-transparent rounded" />
                    <div className="h-1 w-3/4 bg-gradient-to-r from-indigo-400/80 dark:from-secondary/80 to-transparent rounded" />
                    <div className="h-1 w-1/2 bg-gradient-to-r from-cyan-400/40 dark:from-primary-container/40 to-transparent rounded" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-300 dark:text-outline font-mono pt-2 border-t border-slate-700 dark:border-outline-variant/30">
                    <span>VRM PASSIVE</span>
                    <span className="text-cyan-300 dark:text-primary font-bold">144 FPS @ 4K</span>
                  </div>
                </motion.div>

                {/* Spec Callouts */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900/90 dark:bg-surface/90 border border-cyan-400/50 dark:border-primary-container/50 text-[10px] sm:text-[11px] font-mono text-cyan-300 dark:text-primary shadow-lg backdrop-blur-md flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[14px] text-cyan-400 dark:text-primary-container">memory</span>
                  <span className="hidden sm:inline">DDR5 6000MHz Low-Latency</span>
                  <span className="sm:hidden">DDR5 6000MHz</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900/90 dark:bg-surface/90 border border-slate-700 dark:border-outline-variant text-[10px] sm:text-[11px] font-mono text-slate-200 dark:text-on-surface shadow-lg backdrop-blur-md flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[14px] text-indigo-400 dark:text-secondary">speed</span>
                  <span className="hidden sm:inline">7,400 MB/s Gen4 NVMe</span>
                  <span className="sm:hidden">7.4 GB/s NVMe</span>
                </motion.div>
              </div>

              {/* Bottom Diagnostic */}
              <div className="mt-3 sm:mt-4 flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-semibold text-slate-500 dark:text-outline px-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-cyan-600 dark:text-primary-container">verified</span>
                  100% Thermal Burn-In Passed
                </span>
                <span className="text-cyan-700 dark:text-primary font-bold">RIG-ID: #SI-9400</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
