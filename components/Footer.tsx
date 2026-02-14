
import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
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

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h2 className="text-3xl font-black text-white mb-6">CVEEEZ</h2>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              منصة مصرية متخصصة في تمكين المحترفين من الوصول لأفضل الفرص الوظيفية من خلال سير ذاتية ذكية ومتوافقة مع المعايير العالمية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-brand-primary transition-colors">المميزات</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-brand-primary transition-colors">الأسعار</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-brand-primary transition-colors">الأسئلة الشائعة</button></li>
              <li><a href="#" className="hover:text-brand-primary">سياسة الخصوصية</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary" />
                <span>support@cveeez.com</span>
              </li>
              <li>القاهرة، مصر</li>
              <li>جميع الحقوق محفوظة © {new Date().getFullYear()}</li>
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
