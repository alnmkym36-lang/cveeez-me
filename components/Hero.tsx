
import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Scene3D from './Scene3D';
import { translations } from '../lib/translations';

const Hero = ({ lang }: { lang: 'ar' | 'en' }) => {
  const t = translations[lang].hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // مسافة الأمان تحت القائمة الثابتة
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <Scene3D />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-[0.2em] mb-8 border border-brand-primary/20 backdrop-blur-md">
              {lang === 'ar' ? 'الجيل الجديد من السير الذاتية' : 'The Next Gen of Resumes'}
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              {t.h1.split(' ').map((word, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              {t.sub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('pricing')}
                className="px-10 py-5 text-xl rounded-2xl shadow-xl shadow-brand-primary/20 group cursor-pointer font-black"
              >
                {t.primaryCTA}
                <motion.span 
                  animate={{ x: lang === 'ar' ? [-5, 5, -5] : [5, -5, 5] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block ml-2 mr-2"
                >
                  {lang === 'ar' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </motion.span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('examples')}
                className="px-10 py-5 text-xl rounded-2xl dark:border-white/20 dark:text-white dark:hover:bg-white/5 cursor-pointer font-black"
              >
                {t.secondaryCTA}
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {t.bullets.map((bullet, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm"
                >
                  <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />
                  <span>{bullet}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
