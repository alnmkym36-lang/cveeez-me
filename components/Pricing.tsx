
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import Button from './ui/Button';
import { translations } from '../lib/translations';

interface PricingProps {
  lang: 'ar' | 'en';
  onStarterClick: () => void;
}

const Pricing = ({ lang, onStarterClick }: PricingProps) => {
  const t = translations[lang].pricing;
  const whatsappNumber = "201119241396";
  
  return (
    <section id="pricing" className="py-32 relative z-10 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">{t.subtitle}</p>
        </div>
        
        {/* Adjusted Grid for 2 items */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {t.plans.map((plan: any, idx: number) => {
            const isRec = plan.recommended;
            
            const planMessage = lang === 'ar' 
              ? `السلام عليكم، أريد الاشتراك في باقة "${plan.name}" بسعر ${plan.price} ج.م`
              : `Hello, I want to subscribe to the "${plan.name}" plan for ${plan.price} EGP`;
            
            const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(planMessage)}`;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-12 rounded-[3.5rem] flex flex-col transition-all duration-500 shadow-2xl ${
                  isRec 
                    ? 'bg-white dark:bg-slate-800 border-4 border-brand-primary scale-105 z-20 shadow-brand-primary/30' 
                    : 'glass dark:bg-slate-900/50 border-black/5 dark:border-white/10'
                }`}
              >
                {isRec && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-primary text-white px-8 py-2 rounded-full text-sm font-black uppercase shadow-xl">
                    {lang === 'ar' ? 'الأكثر اختياراً' : 'Most Popular'}
                  </div>
                )}
                
                <div className="mb-10 text-center lg:text-right">
                  <h3 className="text-xl font-black text-brand-primary mb-4 uppercase">{plan.name}</h3>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-5xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-slate-500 font-black text-lg">{lang === 'ar' ? 'ج.م' : 'EGP'}</span>
                  </div>
                </div>
                
                <ul className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300">
                      <Check className="text-brand-primary w-5 h-5 shrink-0" />
                      <span className="text-base font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={isRec ? 'primary' : 'outline'} 
                  size="lg"
                  fullWidth
                  href={waLink}
                  target="_blank"
                  className="rounded-2xl py-5 text-xl font-black"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
