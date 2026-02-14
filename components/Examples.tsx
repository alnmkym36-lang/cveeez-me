
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle, ArrowRight, ArrowLeft, Info } from 'lucide-react';
import { translations } from '../lib/translations';
import Button from './ui/Button';

const ExampleCard: React.FC<{ item: any, lang: 'ar' | 'en' }> = ({ item, lang }) => {
  const t = translations[lang].examples;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass p-8 rounded-[2.5rem] border-black/5 dark:border-white/10 flex flex-col h-full group"
    >
      <div className="flex justify-between items-center mb-6">
        <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest border border-brand-primary/20">
          {item.role}
        </span>
      </div>

      <div className="space-y-6 flex-grow">
        {/* Before - Reddish Theme */}
        <div className="p-6 rounded-3xl bg-red-500/[0.03] dark:bg-red-500/[0.05] border border-red-500/10 dark:border-red-500/20 relative overflow-hidden">
           <div className="absolute top-0 right-0 px-4 py-1 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-[10px] font-black rounded-bl-2xl uppercase tracking-tighter">
            {t.before}
           </div>
           <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mt-2 italic">
             "{item.before}"
           </p>
        </div>

        {/* After - Greenish Theme */}
        <div className="p-6 rounded-3xl bg-green-500/[0.05] dark:bg-green-500/[0.08] border border-green-500/20 dark:border-green-500/30 relative overflow-hidden">
           <div className="absolute top-0 right-0 px-4 py-1 bg-green-500/20 dark:bg-green-500/30 text-green-700 dark:text-green-400 text-[10px] font-black rounded-bl-2xl uppercase tracking-tighter">
            {t.after}
           </div>
           <p className="text-slate-900 dark:text-white font-black text-sm leading-relaxed mt-2 pr-2">
             {item.after}
           </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8 opacity-60">
        <Info size={12} className="text-brand-primary shrink-0" />
        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold italic leading-none">
          {t.note}
        </p>
      </div>
    </motion.div>
  );
};

const Examples = ({ lang, onOpenLead }: { lang: 'ar' | 'en', onOpenLead: () => void }) => {
  const t = translations[lang].examples;
  const [activeTab, setActiveTab] = useState(0);

  const currentItems = (t.items as any)[`tab${activeTab}`] || [];
  const whatsappNumber = "201119241396";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? 'أريد مراجعة الـ CV الخاص بي وتحسينه مثل الأمثلة المعروضة' : 'I want to review and optimize my CV like the examples shown')}`;

  return (
    <section id="examples" className="py-32 relative z-10 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 dark:text-white"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-xl font-medium"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {t.tabs.map((tab: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-4 rounded-2xl font-black text-sm transition-all relative overflow-hidden ${
                activeTab === idx 
                  ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                  : 'glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab}
              {activeTab === idx && (
                <motion.div 
                  layoutId="activeTabGlow" 
                  className="absolute inset-0 bg-white/10" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            {currentItems.map((item: any, i: number) => (
              <ExampleCard key={`${activeTab}-${i}`} item={item} lang={lang} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTAs */}
        <div className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-[4rem] border-black/5 dark:border-white/10 text-center relative overflow-hidden group shadow-2xl shadow-brand-primary/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10 text-slate-900 dark:text-white">{t.ctaTitle}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 relative z-10 max-w-2xl mx-auto font-bold">{t.ctaSub}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button size="lg" onClick={onOpenLead} className="px-12 py-5 text-xl rounded-2xl shadow-2xl shadow-brand-primary/30 dark:shadow-brand-primary/40 font-black">
              {t.primaryCTA}
              {lang === 'ar' ? <ArrowLeft size={20} className="mr-2" /> : <ArrowRight size={20} className="ml-2" />}
            </Button>
            <Button variant="ghost" href={waLink} target="_blank" size="lg" className="rounded-2xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-green-500/10">
              <MessageCircle size={22} className="ml-3 text-green-500" />
              {t.secondaryCTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
