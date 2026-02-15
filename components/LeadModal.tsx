
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
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const whatsappNumber = "201119241396";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = lang === 'ar' 
      ? `مرحباً، أود بدء بناء سيرتي الذاتية.\n\nالاسم: ${formData.name}\nالتواصل: ${formData.email}\nالوظيفة المستهدفة: ${formData.role}`
      : `Hello, I'd like to start building my CV.\n\nName: ${formData.name}\nContact: ${formData.email}\nTarget Role: ${formData.role}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
      setLoading(false);
      onClose();
      // Reset form
      setFormData({ name: '', email: '', role: '' });
    }, 1000);
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
          <X size={24} className="text-slate-300" />
        </button>

        <h3 className="text-3xl font-black mb-4 text-white">{t.title}</h3>
        <p className="text-slate-400 mb-10">{t.subtitle}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            required 
            type="text" 
            placeholder={t.name}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary text-white placeholder:text-slate-500" 
          />
          <input 
            required 
            type="text" 
            placeholder={t.email}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary text-white placeholder:text-slate-500" 
          />
          <input 
            required 
            type="text" 
            placeholder={t.role}
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-primary text-white placeholder:text-slate-500" 
          />
          
          <Button type="submit" fullWidth size="lg" disabled={loading} className="py-5 text-xl rounded-2xl flex items-center justify-center gap-2">
            {loading ? t.success : (
              <>
                {t.submit} <Send size={20} className={lang === 'ar' ? "rotate-180" : ""} />
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default LeadModal;
