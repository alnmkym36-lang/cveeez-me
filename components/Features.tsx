
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { translations } from '../lib/translations';
import { FEATURES } from '../constants';

const FeatureCard: React.FC<{ 
  item: any, 
  idx: number, 
  lang: string, 
  iconName: string
}> = ({ item, idx, iconName }) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.Zap;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ 
        y: -10, 
        rotateX: -2,
        rotateY: 2,
        scale: 1.02
      }}
      className="glass p-10 rounded-[2.5rem] group border-white/10 dark:border-white/5 transform-style-3d shadow-2xl relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
      
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center mb-8 text-white shadow-xl shadow-brand-primary/30 group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      
      <h3 className="text-2xl font-black mb-4 group-hover:text-brand-primary transition-colors">{item.title}</h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium flex-grow">
        {item.desc}
      </p>
    </motion.div>
  );
};

const Features = ({ lang }: { lang: 'ar' | 'en' }) => {
  const t = translations[lang].features;

  return (
    <section id="features" className="py-32 relative z-10 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-xl font-medium"
          >
            {t.subtitle}
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.items.map((item, idx) => (
            <FeatureCard 
              key={idx} 
              item={item} 
              idx={idx} 
              lang={lang} 
              iconName={FEATURES[idx]?.icon || 'Zap'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;