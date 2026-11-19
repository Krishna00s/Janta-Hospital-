/**
 * Centralized Homepage Section Visibility Configuration
 * Controls which sections are rendered on the homepage.
 *
 * Mandatory homepage order:
 * 1. Hero
 * 2. Inside Janta Hospital (hospitalGallery)
 * 3. Medical Services (services)
 * 4. Meet Our Doctors (doctors)
 * 5. Location & Contact (location)
 * 6. Footer
 */

export const homepageSections = {
  hero: true,
  hospitalGallery: true,
  services: true,
  doctors: true,
  medicalTeam: true, // Alias for backward compatibility
  location: true,
} as const;

export type HomepageSectionKey = keyof typeof homepageSections;

export function isSectionEnabled(key: HomepageSectionKey): boolean {
  return homepageSections[key] === true;
}
