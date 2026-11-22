/**
 * Centralized Homepage Section Visibility Configuration
 * Controls which sections are rendered on the homepage.
 *
 * Direct Patient Journey Order:
 * 1. Hero (hero)
 * 2. Emergency and Quick Help (emergencyHelp)
 * 3. Medical Services (services)
 * 4. Our Doctors (doctors)
 * 5. A Short Hospital Introduction (aboutHospital)
 * 6. Location and Contact (location)
 * 7. Footer
 */

export const homepageSections = {
  hero: true,
  emergencyHelp: true,
  services: true,
  doctors: true,
  aboutHospital: true,
  location: true,
  // Backwards compatibility aliases
  hospitalGallery: false,
  medicalTeam: true,
} as const;

export type HomepageSectionKey = keyof typeof homepageSections;

export function isSectionEnabled(key: HomepageSectionKey): boolean {
  return homepageSections[key] === true;
}
