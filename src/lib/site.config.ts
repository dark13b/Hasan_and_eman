export interface SiteConfig {
  studioName: string;
  tagline: string;
  locationPrimary: string;
  locationPublic: boolean;
  availability: {
    active: boolean;
    label: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    behance: string;
    twitter: string;
  };
  email: string;
  calendlyUrl: string;
  googleAppsScriptUrl: string;
}

export const siteConfig: SiteConfig = {
  studioName: 'Hasan & Eman',
  tagline: 'A brand identity studio building considered visual systems.',
  locationPrimary: 'from Iraq', // flip to "based in USA" when the studio location changes
  locationPublic: true,
  availability: {
    active: true,
    label: 'Accepting projects for Q3',
  },
  social: {
    linkedin: 'https://linkedin.com/in/your-profile',
    instagram: 'https://instagram.com/your-profile',
    behance: 'https://behance.net/your-profile',
    twitter: 'https://x.com/your-profile',
  },
  email: 'hello@hasanandeman.com',
  calendlyUrl: 'https://calendly.com/your-profile',
  googleAppsScriptUrl: import.meta.env.PUBLIC_GOOGLE_APPS_SCRIPT_URL ?? '',
};
