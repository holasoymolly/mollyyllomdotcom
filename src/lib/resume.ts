/**
 * The résumé PDFs, served straight out of `public/`.
 *
 * Two versions exist, brand and web3, mirroring the BRAND / WEB3 toggle on the
 * CV pages. Both files are named `Cinthya-Paulino-Resume.pdf` on purpose: the
 * variant lives in the folder, never in the filename, because the filename is
 * what a recruiter sees in their downloads folder and it must not advertise
 * that other versions exist. Never rename either file, and never add a suffix,
 * a date, a version or the word ATS.
 */
export const RESUME_PDF = {
  brand: '/downloads/brand/Cinthya-Paulino-Resume.pdf',
  web3: '/downloads/web3/Cinthya-Paulino-Resume.pdf',
} as const;

/**
 * The version served everywhere outside the CV pages. The home page and
 * `/descargas` have no BRAND / WEB3 toggle, so they always serve the brand one.
 */
export const RESUME_PDF_URL = RESUME_PDF.brand;
