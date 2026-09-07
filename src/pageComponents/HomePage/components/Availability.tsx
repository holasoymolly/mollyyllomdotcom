'use client';

import { motion } from 'framer-motion';
import { TransitionLink } from '@/components/TransitionLink';
import { useLanguage } from '@/context/LanguageContext';
import { trackAssetDownloaded } from '@/lib/analytics';
import { RESUME_PDF_URL } from '@/lib/resume';

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

/**
 * Sits directly under the hero, in both languages.
 *
 * The hero says what she does; this says she is hireable, which is the one
 * thing a recruiter landing from the CV needs to see without hunting for it.
 */
export const Availability = () => {
  const { lang, t } = useLanguage();
  const [lead, highlight] = splitTitle(t.home.availabilityTitle);

  return (
    <section className="bg-stone-200 px-6 md:px-16 lg:px-24 py-20 border-b border-indigo-950/10">
      <div className="max-w-4xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-indigo-950 leading-tight mb-6"
          {...fadeUpView()}
        >
          {lead}<br />
          <span className="text-violet-500">{highlight}</span>
        </motion.h2>

        <motion.p
          className="text-indigo-950/70 text-lg leading-relaxed" 
          {...fadeUpView(0.1)}
        >
          {t.home.availabilityBody}
        </motion.p>

        <motion.div className="flex flex-wrap items-center gap-4 mt-10" {...fadeUpView(0.2)}>
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() =>
              trackAssetDownloaded(t.home.availabilityResumeCta, RESUME_PDF_URL, lang)
            }
            className="bg-violet-500 text-stone-200 font-bold px-8 py-4 rounded-full transition-colors duration-300 hover:bg-violet-400"
          >
            {t.home.availabilityResumeCta}
          </a>
          <TransitionLink
            href="/contacto"
            className="border border-indigo-950/20 text-indigo-950/70 font-semibold px-8 py-4 rounded-full transition-colors duration-300 hover:border-violet-500 hover:text-violet-500"
          >
            {t.home.availabilityContactCta}
          </TransitionLink>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Break the title onto the section pattern's two lines, the second in violet.
 * The last two words carry the accent in both languages, so no copy is needed
 * beyond the single string the title is written as.
 */
function splitTitle(title: string): [string, string] {
  const words = title.split(' ');
  return [words.slice(0, -2).join(' '), words.slice(-2).join(' ')];
}
