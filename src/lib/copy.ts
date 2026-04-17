import type { Locale } from './i18n';

export const heroCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    label: string;
  }
> = {
  en: {
    eyebrow: 'Brand identity studio',
    title: 'Identity systems with restraint, character, and long-term clarity.',
    description:
      'Hasan & Eman design naming, visual systems, and digital touchpoints for brands that need to feel editorial, credible, and distinct without noise.',
    bullets: ['Identity strategy', 'Naming', 'Art direction', 'Digital systems'],
    label: 'Selected practice',
  },
  ar: {
    eyebrow: 'استوديو هوية بصرية',
    title: 'أنظمة هوية متزنة، ذات شخصية، وواضحة على المدى الطويل.',
    description:
      'هاسن وإيمان يصممان التسمية والأنظمة البصرية والواجهات الرقمية لعلامات تحتاج إلى حضور تحريري واضح ومختلف من دون ضجيج.',
    bullets: ['استراتيجية الهوية', 'التسمية', 'الإخراج الفني', 'الأنظمة الرقمية'],
    label: 'مجالات العمل',
  },
};
