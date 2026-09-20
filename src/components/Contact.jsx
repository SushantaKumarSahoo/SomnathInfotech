import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactCards = [
    {
      icon: 'call',
      iconColor: 'text-cyan-700 dark:text-primary-container',
      title: 'Support Hotline',
      line1: siteData.contact.phone1,
      line2: siteData.contact.phone2,
    },
    {
      icon: 'mail',
      iconColor: 'text-cyan-700 dark:text-primary',
      title: 'Email Inquiries',
      line1: siteData.contact.email1,
      line2: siteData.contact.email2,
    },
    {
      icon: 'location_on',
      iconColor: 'text-indigo-600 dark:text-secondary',
      title: 'Store Location',
      line1: siteData.contact.address,
      line2: siteData.contact.addressLine2,
    },
    {
      icon: 'schedule',
      iconColor: 'text-sky-700 dark:text-tertiary',
      title: 'Business Hours',
      line1: siteData.contact.hours,
      line2: siteData.contact.hoursAlt,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-3xl bg-white dark:bg-surface-container-low border border-slate-200 dark:border-outline-variant/40 p-5 sm:p-8 lg:p-14 relative overflow-hidden shadow-xl dark:shadow-2xl transition-colors"
        >
          {/* Ambient Glows */}
          <div className="absolute -right-20 -bottom-20 w-60 sm:w-96 h-60 sm:h-96 bg-cyan-200/50 dark:bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-60 sm:w-96 h-60 sm:h-96 bg-indigo-200/40 dark:bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-700 dark:text-primary-container font-semibold">
                  Direct Lab Assistance
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-display font-extrabold text-slate-900 dark:text-on-surface tracking-tight transition-colors leading-tight">
                  Need Help With Your Computer?
                </h2>
                <p className="text-base sm:text-lg font-body text-slate-600 dark:text-on-surface-variant leading-relaxed">
                  Whether you need an urgent repair, a high-performance custom PC, or genuine peripheral components, connect with Somnath Infotech today.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {contactCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-surface-container/60 border border-slate-200 dark:border-outline-variant/30"
                  >
                    <div className={`flex items-center gap-2 ${card.iconColor} mb-1`}>
                      <span className="material-symbols-outlined text-[18px]">{card.icon}</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider">{card.title}</span>
                    </div>
                    <p className="text-[13px] font-mono text-slate-900 dark:text-on-surface font-semibold">{card.line1}</p>
                    <p className="text-[12px] font-mono text-slate-500 dark:text-outline">{card.line2}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-6"
            >
              <div className="p-5 sm:p-7 lg:p-8 rounded-2xl bg-slate-50 dark:bg-surface-container-lowest/90 border border-slate-200 dark:border-outline-variant/40 shadow-lg dark:shadow-xl backdrop-blur-md">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-on-surface mb-1">Request Service or Quote</h3>
                <p className="text-[13px] font-body text-slate-500 dark:text-outline mb-5 sm:mb-6">Our senior engineers reply within 2 working hours.</p>

                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-800 dark:text-on-surface font-semibold mb-1.5 uppercase tracking-wider">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-surface border border-slate-300 dark:border-outline-variant/40 text-slate-900 dark:text-on-surface placeholder:text-slate-400 dark:placeholder:text-outline focus:border-cyan-500 dark:focus:border-primary-container focus:ring-1 focus:ring-cyan-500 dark:focus:ring-primary-container transition-all text-sm font-body outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-800 dark:text-on-surface font-semibold mb-1.5 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-surface border border-slate-300 dark:border-outline-variant/40 text-slate-900 dark:text-on-surface placeholder:text-slate-400 dark:placeholder:text-outline focus:border-cyan-500 dark:focus:border-primary-container focus:ring-1 focus:ring-cyan-500 dark:focus:ring-primary-container transition-all text-sm font-body outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-800 dark:text-on-surface font-semibold mb-1.5 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-surface border border-slate-300 dark:border-outline-variant/40 text-slate-900 dark:text-on-surface placeholder:text-slate-400 dark:placeholder:text-outline focus:border-cyan-500 dark:focus:border-primary-container focus:ring-1 focus:ring-cyan-500 dark:focus:ring-primary-container transition-all text-sm font-body outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-800 dark:text-on-surface font-semibold mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-surface border border-slate-300 dark:border-outline-variant/40 text-slate-900 dark:text-on-surface focus:border-cyan-500 dark:focus:border-primary-container focus:ring-1 focus:ring-cyan-500 dark:focus:ring-primary-container transition-all text-sm font-body outline-none">
                      <option value="repair">Computer Repair & Diagnostics</option>
                      <option value="custom_pc">Custom PC Building / Workstation</option>
                      <option value="resell">Computer Reselling & Trade-In</option>
                      <option value="accessories">Accessories & Peripherals</option>
                      <option value="other">General Hardware Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-800 dark:text-on-surface font-semibold mb-1.5 uppercase tracking-wider">Hardware Issue / System Goals</label>
                    <textarea
                      rows="3"
                      placeholder="Briefly describe your hardware problem or the computer setup you want..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-surface border border-slate-300 dark:border-outline-variant/40 text-slate-900 dark:text-on-surface placeholder:text-slate-400 dark:placeholder:text-outline focus:border-cyan-500 dark:focus:border-primary-container focus:ring-1 focus:ring-cyan-500 dark:focus:ring-primary-container transition-all text-sm font-body outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, brightness: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitted}
                    className={`w-full py-3.5 rounded-xl font-heading text-sm font-bold transition-all ${
                      submitted
                        ? 'bg-emerald-500 dark:bg-emerald-600 text-white'
                        : 'bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-primary-container dark:to-tertiary-container text-white dark:text-on-primary-container ambient-glow-cyan hover:brightness-110'
                    }`}
                  >
                    {submitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        Request Submitted!
                      </span>
                    ) : (
                      'Submit Service Request'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
