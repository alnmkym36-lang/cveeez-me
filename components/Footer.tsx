
import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { translations } from '../lib/translations';

interface FooterProps {
  onPrivacyClick: () => void;
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, lang }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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

  const t = translations[lang];

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h2 className="text-3xl font-black text-white mb-6">CVEEEZ</h2>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              {lang === 'ar' 
               ? "منصة مصرية متخصصة في تمكين المحترفين من الوصول لأفضل الفرص الوظيفية من خلال سير ذاتية ذكية ومتوافقة مع المعايير العالمية."
               : "An Egyptian platform specializing in empowering professionals to reach the best job opportunities through intelligent, global-standard resumes."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary transition-colors duration-300">
                <Twitter size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary transition-colors duration-300">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary transition-colors duration-300">
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-brand-primary transition-colors">{t.nav.features}</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-brand-primary transition-colors">{t.nav.pricing}</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-brand-primary transition-colors">{t.nav.faq}</button></li>
              <li><button onClick={onPrivacyClick} className="hover:text-brand-primary transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="mailto:support@cveeez.com" className="flex items-center gap-3 hover:text-brand-primary transition-colors">
                  <Mail size={18} className="text-brand-primary" />
                  <span>support@cveeez.com</span>
                </a>
              </li>
              <li>{lang === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</li>
              <li>{lang === 'ar' ? 'جميع الحقوق محفوظة ©' : 'All rights reserved ©'} {new Date().getFullYear()}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p dir="ltr">CVEEEZ - Empowering careers with intelligent solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
