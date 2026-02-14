
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Examples from './components/Examples';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/ui/Button';
import LeadModal from './components/LeadModal';
import { TESTIMONIALS } from './constants';
import { Zap, Quote, Sun, Moon, Globe, X, CheckCircle2, MessageCircle, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { translations } from './lib/translations';

// مكوّن المودال التفصيلي للخدمات - تم تحسينه بصرياً ومعمارياً
const ServiceModal = ({ service, lang, onClose, allServices, onSwitchService }: any) => {
  const t = translations[lang];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service?.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const whatsappNumber = "201119241396";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? `مهتم بخدمة: ${service?.title}` : `Interested in: ${service?.title}`)}`;
  const relatedServices = allServices.filter((s: any) => service?.crossSell?.includes(s.id));

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Overlay */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={onClose} 
        className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl cursor-zoom-out" 
      />
      
      {/* Modal Container */}
      <motion.div
        ref={scrollContainerRef}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        className="glass w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] md:rounded-[4rem] relative z-10 border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] custom-scrollbar"
      >
        {/* Sticky Header inside Modal */}
        <div className="sticky top-0 z-30 flex justify-between items-center p-6 md:p-10 pointer-events-none">
          <button 
            onClick={onClose} 
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-md border border-white/10 pointer-events-auto shadow-lg hover:scale-105 active:scale-95"
          >
            <X size={24} />
          </button>
          <div className="pointer-events-auto">
            <span className="px-5 py-2 rounded-full bg-brand-primary/20 text-brand-primary text-[11px] font-black uppercase tracking-widest border border-brand-primary/30 backdrop-blur-md shadow-lg shadow-brand-primary/10">
              {service?.title}
            </span>
          </div>
        </div>

        <div className="px-8 md:px-20 pb-16 md:pb-24 pt-4 grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Content Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight text-white tracking-tight">
              {service?.modalTitle}
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
              {service?.modalDesc}
            </p>

            <div className="space-y-16">
              <section>
                <h4 className="text-2xl font-black mb-8 flex items-center gap-3 text-white">
                  <CheckCircle2 className="text-brand-primary" size={28} /> {t.serviceModal.includes}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service?.includes.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 font-bold text-sm bg-white/5 p-5 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                      <Zap size={14} className="text-brand-primary mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <h4 className="text-[11px] font-black text-brand-primary uppercase mb-4 tracking-[0.2em]">{t.serviceModal.suitable}</h4>
                  <p className="text-slate-300 text-base font-bold leading-relaxed">{service?.suitableFor}</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <h4 className="text-[11px] font-black text-brand-primary uppercase mb-4 tracking-[0.2em]">{t.serviceModal.needs}</h4>
                  <p className="text-slate-300 text-base font-bold leading-relaxed">{service?.requirements}</p>
                </div>
              </div>

              {relatedServices.length > 0 && (
                <section className="pt-12 border-t border-white/10">
                  <h4 className="text-xl font-black mb-8 text-slate-300">{t.serviceModal.crossSell}</h4>
                  <div className="flex flex-wrap gap-4">
                    {relatedServices.map((related: any) => (
                      <button 
                        key={related.id} 
                        onClick={() => onSwitchService(related.id)} 
                        className="px-7 py-5 rounded-[2rem] bg-white/5 hover:bg-brand-primary/20 border border-white/10 hover:border-brand-primary/40 transition-all font-black text-sm text-slate-300 hover:text-white group flex items-center gap-3"
                      >
                        {related.title} 
                        {lang === 'ar' ? <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:sticky lg:top-12 self-start">
            <div className="glass p-8 md:p-12 rounded-[3.5rem] border-white/10 shadow-2xl bg-gradient-to-br from-brand-primary/10 via-white/5 to-transparent relative overflow-hidden group/form">
              {/* Decorative light */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none group-hover/form:bg-brand-primary/20 transition-all duration-1000" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-3xl font-black mb-3 text-white">{t.serviceModal.formTitle}</h3>
                    <p className="text-slate-400 text-base font-bold mb-10">{lang === 'ar' ? 'اكتب بياناتك ومختصينا هيكلموك' : 'Enter details and our experts will call'}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase mr-4 tracking-widest">{t.leadForm.name}</label>
                        <input required placeholder="مثلاً: أحمد محمد" className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-7 py-5 outline-none focus:border-brand-primary focus:bg-white/10 transition-all font-bold text-white text-lg" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase mr-4 tracking-widest">{t.leadForm.email}</label>
                        <input required placeholder="Email or 01xxxxxxxxx" className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-7 py-5 outline-none focus:border-brand-primary focus:bg-white/10 transition-all font-bold text-white text-lg text-left" dir="ltr" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase mr-4 tracking-widest">{t.leadForm.role}</label>
                        <input required placeholder="الوظيفة المستهدفة" className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-7 py-5 outline-none focus:border-brand-primary focus:bg-white/10 transition-all font-bold text-white text-lg" />
                      </div>
                      
                      <div className="pt-8 space-y-5">
                        <Button type="submit" fullWidth size="lg" disabled={loading} className="rounded-[1.5rem] py-6 text-2xl font-black shadow-[0_20px_40px_-15px_rgba(99,102,241,0.5)] hover:shadow-[0_30px_50px_-15px_rgba(99,102,241,0.6)]">
                          {loading ? <Clock className="animate-spin" size={28} /> : (
                            <span className="flex items-center gap-3">
                              {service?.primaryCTA}
                              <CheckCircle2 size={24} />
                            </span>
                          )}
                        </Button>
                        <Button variant="ghost" href={waLink} target="_blank" fullWidth size="lg" className="rounded-[1.5rem] py-5 border border-white/5 bg-white/5 text-white hover:bg-green-500/10 hover:border-green-500/20">
                          <MessageCircle size={24} className="ml-3 text-green-500" /> {t.serviceModal.whatsapp}
                        </Button>
                      </div>
                    </form>
                    <p className="text-[11px] text-slate-500 mt-10 text-center italic font-medium leading-relaxed">
                      * الخدمة لا تضمن الوظيفة 100% ولكنها ترفع فرص قبولك بناءً على معايير السوق الحالية.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-32 h-32 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                      <CheckCircle2 size={64} />
                    </div>
                    <h3 className="text-4xl font-black mb-6 text-white">{lang === 'ar' ? 'طلبك وصل بنجاح!' : 'Request Received!'}</h3>
                    <p className="text-slate-400 font-bold text-xl mb-12 max-w-xs mx-auto">{t.leadForm.success}</p>
                    <Button variant="primary" onClick={onClose} className="rounded-2xl px-16 py-5 text-xl">فهمت</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  
  const t = translations[lang];
  const { scrollY } = useScroll();
  const springScroll = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const perspectiveY = useTransform(springScroll, [0, 1000], [0, -15]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // زيادة الـ offset لتجنب الهيدر الثابت
      const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-20% 0px -60% 0px' });
    ['features', 'examples', 'services', 'pricing', 'faq'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const navItems = [
    { id: 'features', label: t.nav.features },
    { id: 'examples', label: t.nav.examples },
    { id: 'services', label: lang === 'ar' ? 'خدماتنا' : 'Services' },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'faq', label: t.nav.faq }
  ];

  const selectedService = t.services.items.find((s: any) => s.id === selectedServiceId);

  return (
    <div className={`font-sans select-none selection:bg-brand-primary selection:text-white transition-colors duration-700 
      ${theme === 'dark' ? 'bg-brand-dark text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent z-[3000] origin-right" style={{ scaleX: useSpring(useTransform(scrollY, [0, 5000], [0, 1])) }} />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1500] w-[90%] max-w-7xl">
        <div className="glass px-8 h-20 rounded-[1.5rem] flex items-center justify-between border-white/10 shadow-2xl">
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent cursor-pointer hover:scale-105 transition-transform">CVEEEZ</div>
          
          <div className="hidden lg:flex items-center gap-10 font-bold text-sm">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`transition-all duration-300 relative py-2 ${activeSection === item.id ? 'text-brand-primary' : 'text-slate-400 hover:text-white'}`}>
                {item.label}
                {activeSection === item.id && <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-primary rounded-full" />}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="p-3 rounded-xl hover:bg-white/10 text-brand-primary transition-all active:scale-90">{theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}</button>
            <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')} className="flex items-center gap-2 p-3 rounded-xl hover:bg-white/10 font-black text-xs uppercase transition-all active:scale-90"><Globe size={18} /> <span>{lang === 'ar' ? 'EN' : 'AR'}</span></button>
            <Button size="md" onClick={() => setIsLeadModalOpen(true)} className="hidden sm:inline-flex rounded-xl px-8 font-black">{t.nav.cta}</Button>
          </div>
        </div>
      </nav>

      {/* Main Content with Perspective */}
      <div className="perspective-2000">
        <motion.div style={{ y: perspectiveY }} className="transform-style-3d origin-top">
          <main className="relative">
            <Hero lang={lang} />
            <div className="container mx-auto px-6 -mt-10 relative z-20">
              <div className="glass p-10 rounded-[2.5rem] border-white/5 shadow-2xl flex flex-wrap justify-center gap-12 md:gap-24">
                {t.trust.map((chip, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-500 dark:text-slate-300 font-black tracking-wide text-sm md:text-base">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
            
            <Features lang={lang} />
            <Examples lang={lang} onOpenLead={() => setIsLeadModalOpen(true)} />
            <Services lang={lang} onServiceSelect={setSelectedServiceId} />
            <Pricing lang={lang} onStarterClick={() => setIsLeadModalOpen(true)} />
            
            <section className="py-32 relative z-10 overflow-hidden">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-24 leading-tight">{lang === 'ar' ? 'ناس زيّك وصلوا لمرحلة المقابلة' : 'People like you made it to interviews'}</h2>
                <div className="grid md:grid-cols-3 gap-10">
                  {TESTIMONIALS.map((testimonial, i) => (
                    <motion.div key={i} whileHover={{ y: -15 }} className="glass p-10 rounded-[3rem] shadow-2xl border-white/5 relative">
                      <Quote className="absolute top-8 right-8 text-brand-primary opacity-10" size={48} />
                      <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-10 leading-relaxed relative z-10">"{testimonial.content}"</p>
                      <div className="mt-auto">
                        <div className="font-black text-xl text-white">{testimonial.name}</div>
                        <div className="text-brand-primary text-sm font-black uppercase tracking-widest mt-1">{testimonial.role}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
            
            <FAQ lang={lang} />
            
            <section className="py-48 relative z-10 text-center">
              <div className="container mx-auto px-6">
                <div className="glass p-16 md:p-32 rounded-[5rem] bg-gradient-to-tr from-brand-primary/20 via-brand-dark to-brand-accent/10 border-white/10 shadow-[0_0_150px_-30px_rgba(99,102,241,0.3)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <h2 className="text-5xl md:text-8xl font-black mb-12 leading-tight relative z-10">{lang === 'ar' ? 'مستعد لمستقبل أحسن؟' : 'Ready for a better future?'}</h2>
                  <Button size="lg" onClick={() => setIsLeadModalOpen(true)} className="px-16 py-7 text-2xl rounded-3xl relative z-10 hover:scale-105 shadow-2xl shadow-brand-primary/30 font-black">
                    {lang === 'ar' ? 'ابدأ رحلة نجاحك دلوقتى' : 'Start your success journey now'}
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </motion.div>
      </div>

      {/* Fixed Overlays (Modals) */}
      <AnimatePresence>
        {selectedServiceId && selectedService && (
          <ServiceModal 
            service={selectedService} 
            lang={lang} 
            onClose={() => setSelectedServiceId(null)} 
            allServices={t.services.items} 
            onSwitchService={setSelectedServiceId} 
          />
        )}
      </AnimatePresence>

      <LeadModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} lang={lang} />
      <Footer />
    </div>
  );
};

export default App;
