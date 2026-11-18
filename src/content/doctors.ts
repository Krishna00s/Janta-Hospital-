export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  experienceYears?: number;
  availableDays: string;
  status: "verified" | "pending";
}

/**
 * Doctors Fact Registry
 * Non-negotiable rule: No fabricated credentials, names, or photos.
 * Profiles will be populated only after hospital owner verification and doctor consent.
 */
export const doctors: Doctor[] = [];
