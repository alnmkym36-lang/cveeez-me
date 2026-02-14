
import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../lib/translations';
import { SERVICE_ICONS } from '../constants';
import { Zap, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

interface ServicesProps {
  lang: 'ar' | 'en';
  onServiceSelect: (id: string) => void;
}

const Services = ({ lang, onServiceSelect }: ServicesProps) => {
  const t = translations[lang].services;

  return (
    <section id="services" className="py-32 relative overflow-hidden scroll-mt-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-xl font-medium"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.id] || Zap;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => onServiceSelect(service.id)}
                className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-brand-primary/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-lg group-hover:shadow-brand-primary/20">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-black mb-3">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                <Button 
                  variant="ghost" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onServiceSelect(service.id);
                  }}
                  className="justify-between group/btn px-0 hover:bg-transparent hover:text-brand-primary transition-all"
                >
                  <span className="font-black text-sm">{service.cta}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-white transition-all">
                    {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </div>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
