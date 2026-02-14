
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { translations } from '../lib/translations';
import Button from './ui/Button';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang].leadForm;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="glass w-full max-w-xl p-8 md:p-12 rounded-[2.5rem] relative z-10 border-white/10 shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-6 left-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
          <X size={24} />
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0, x: -20 }}>
              <h3 className="text-3xl font-black mb-4">{t.title}</h3>
              <p className="text-slate-400 mb-10">{t.subtitle}</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input required type="text" placeholder={t.name} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary" />
                <input required type="email" placeholder={t.email} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary" />
                <input required type="text" placeholder={t.role} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary" />
                <Button type="submit" fullWidth size="lg" disabled={loading} className="py-5 text-xl rounded-2xl">
                  {loading ? "..." : t.submit}
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-10">
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-4">{lang === 'ar' ? 'تم استلام طلبك!' : 'Received!'}</h3>
              <p className="text-slate-400">{t.success}</p>
              <Button onClick={onClose} variant="outline" className="mt-8">إغلاق</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LeadModal;
