
import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Target, 
  Layout, 
  Globe, 
  FileDown,
  UserCheck,
  Feather,
  MessageSquare,
  Briefcase,
  Wand2,
  Pencil,
  Linkedin,
  MessagesSquare,
  Key
} from 'lucide-react';
import { Feature, PricingPlan, FAQItem, Testimonial } from './types';

export const HERO_CONTENT = {
  h1: "سيفيز يخلي الـ CV بتاعك يتقبل من أول مرة",
  sub: "بطل تضيع وقت في محاولات فاشلة. احنا بنبني ليك سيرة ذاتية ذكية بتفهم الـ ATS وبتبهر الشركات العالمية.",
  bullets: [
    "تحسين تلقائي للكلمات المفتاحية (Keywords)",
    "قوالب بتجذب انتباه الـ Recruiters",
    "دعم كامل للعربي والإنجليزي"
  ],
  primaryCTA: "ابدأ سيرتك دلوقتى",
  secondaryCTA: "شوف الأمثلة"
};

export const TRUST_CHIPS = [
  "صديق لأنظمة الـ ATS",
  "ذكاء اصطناعي مطور",
  "مراجعة بشرية (اختياري)"
];

export const METRICS = [
  { value: "+[عدد]", label: "مستخدم سعيد" },
  { value: "[نسبة]%", label: "زيادة في طلب المقابلات" },
  { value: "[مدة]", label: "متوسط وقت التجهيز" }
];

export const FEATURES: Feature[] = [
  {
    id: 'ats',
    title: "تحسين الـ ATS",
    description: "بنضمن إن الـ CV بتاعك يتقرأ صح من البرامج قبل ما يوصل للموظف.",
    icon: 'ShieldCheck'
  },
  {
    id: 'keywords',
    title: "استهداف الكلمات",
    description: "بنحلل الوصف الوظيفي ونحط الكلمات اللي بيدوروا عليها بالظبط.",
    icon: 'Target'
  },
  {
    id: 'bullets',
    title: "صياغة إنجازاتك",
    description: "بنحول المهام الروتينية لإنجازات ملموسة بالأرقام.",
    icon: 'Feather'
  },
  {
    id: 'templates',
    title: "قوالب عصرية",
    description: "تصميمات نضيفة، احترافية، وبعيدة عن الألوان المزعجة.",
    icon: 'Layout'
  },
  {
    id: 'lang',
    title: "دعم لغوي",
    description: "بناخد بالنا من المصطلحات التقنية في العربي والإنجليزي.",
    icon: 'Globe'
  },
  {
    id: 'export',
    title: "تصدير PDF",
    description: "تحميل فوري بجودة عالية جاهز للتقديم في أي مكان.",
    icon: 'FileDown'
  }
];

export const SERVICE_ICONS: Record<string, any> = {
  'ai-builder': Wand2,
  'ats-opt': ShieldCheck,
  'cv-writing': Pencil,
  'cover-letter': FileDown,
  'linkedin-opt': Linkedin,
  'portfolio': Briefcase,
  'interview-prep': MessagesSquare,
  'keyword-pack': Key
};

export const PRICING: PricingPlan[] = [
  {
    name: "البداية (Starter)",
    price: "[X]",
    features: [
      "1 CV بالذكاء الاصطناعي",
      "قوالب أساسية",
      "تصدير PDF لمرة واحدة",
      "دعم فني عبر البريد"
    ],
    cta: "ابدأ مجاناً"
  },
  {
    name: "المحترف (Pro)",
    price: "[Y]",
    recommended: true,
    features: [
      "سير ذاتية غير محدودة",
      "تحليل ATS متقدم",
      "خطاب تغطية (Cover Letter)",
      "تعديلات ذكية للكلمات المفتاحية"
    ],
    cta: "اشترك دلوقتى"
  },
  {
    name: "المتميز (Premium)",
    price: "[Z]",
    features: [
      "كل مميزات الـ Pro",
      "مراجعة من خبير بشري",
      "تحسين بروفايل LinkedIn",
      "جلسة تحضير مقابلة (30 دقيقة)"
    ],
    cta: "تواصل معنا"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "يعني إيه ATS؟",
    answer: "الـ ATS هو اختصار لـ Applicant Tracking System، وهو برنامج الشركات بتستخدمه عشان تفرز السير الذاتية آلياً قبل ما الموظف يشوفها. لو الـ CV بتاعك مش متوافق معاه، غالباً هيترفض فوراً."
  },
  {
    question: "السيرة بتخلص في قد إيه؟",
    answer: "بالذكاء الاصطناعي بتخلص في دقايق. لو طلبت مراجعة بشرية بتاخد من [مدة] لـ [مدة] أيام عمل."
  },
  {
    question: "ينفع أعدل في الـ CV بعد ما أخلصه؟",
    answer: "طبعاً، لو معاك باقة الـ Pro أو Premium تقدر تعدل وتحمل الـ CV بتاعك في أي وقت."
  },
  {
    question: "بيدعم لغات إيه؟",
    answer: "بندعم اللغة العربية والإنجليزية بشكل أساسي، مع مراعاة القواعد اللغوية لكل لغة."
  },
  {
    question: "هل بياناتي في أمان؟",
    answer: "بياناتك مشفرة ومحمية بالكامل، ومحدش بيشوفها غيرك أو الخبير اللي بيراجع ملفك لو طلبت ده."
  },
  {
    question: "إيه اللي محتاج أقدمه عشان تبدأوا؟",
    answer: "محتاجين منك ملفك القديم أو مجرد معلومات عن دراستك، خبراتك، والوظيفة اللي بتطمح ليها."
  },
  {
    question: "هل فيه ضمان وظيفة؟",
    answer: "إحنا بنضمنلك إن الـ CV بتاعك هيكون بأعلى جودة احترافية وتجاوز الـ ATS، وده بيزود فرص قبولك بشكل كبير جداً، لكن التوفيق في الوظيفة بيعتمد على مهاراتك وأداءك في المقابلة."
  },
  {
    question: "هل الخدمة مناسبة لكل المجالات؟",
    answer: "أيوة، من أول الطب والهندسة لحد التسويق والخدمات، عندنا نماذج وكلمات مفتاحية لكل مجال."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "أحمد م.",
    role: "مهندس برمجيات",
    content: "كنت بقدم في شركات كتير ومحدش بيرد، بعد ما استخدمت سيفيز، جالي 3 مقابلات في أول أسبوع!"
  },
  {
    name: "سارة ع.",
    role: "مديرة تسويق",
    content: "الـ Cover Letter كان هو السر. الكلام كان منسق جداً وخلاني أبان محترفة من أول سطر."
  },
  {
    name: "محمد ح.",
    role: "خريج جديد",
    content: "مبنتش عارف أبدأ منين، الأداة ساعدتني أرتب أفكاري وأطلع CV يملى العين رغم قلة خبرتي."
  }
];
