
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { translations } from '../lib/translations';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-right hover:text-brand-primary transition-colors duration-200"
      >
        <span className="text-xl font-bold text-slate-900 dark:text-white">{question}</span>
        <ChevronDown 
          className={`transition-transform duration-300 text-brand-primary ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ lang }: { lang: 'ar' | 'en' }) => {
  const t = translations[lang].faqList;

  return (
    <section id="faq" className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">{t.title}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">{t.subtitle}</p>
        </div>
        
        <div className="space-y-2">
          {t.items.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
