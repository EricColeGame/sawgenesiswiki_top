export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Saw Genesis Wiki",
  shortName: "Saw Genesis",
  logoText: "SG",
  tagline: "Guides, Characters, Gameplay & Release Info",
  description: "A community wiki for Saw Genesis featuring game guides, character information, gameplay details, progression tips, and essential resources for players exploring its mysterious world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sawgenesiswiki.top",
  supportEmail: "support@sawgenesiswiki.top",
  gameUrl: "https://store.steampowered.com/app/2865960/SAW_Genesis/",
  heroVideoId: "RJL94pQWrmA", // SAW: Genesis | Game Features Overview | The Rules Are Simple (official Bloober Team showcase)
  social: {
    discord: "https://discord.com/invite/sawgenesis",
    youtube: "https://www.youtube.com/@BlooberTeamSA",
    twitter: "https://x.com/SAWGenesis",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
