/**
 * Centralized Homepage Section Visibility Configuration
 * Controls which sections are rendered on the homepage.
 * Disabled sections are cleanly excluded from the DOM tree at build time.
 */

export const homepageSections = {
  hero: true,
  hospitalGallery: true,
  services: true,
  medicalTeam: true,
  facilities: true,
  location: true,
} as const;

export type HomepageSectionKey = keyof typeof homepageSections;

export function isSectionEnabled(key: HomepageSectionKey): boolean {
  return homepageSections[key] === true;
}
