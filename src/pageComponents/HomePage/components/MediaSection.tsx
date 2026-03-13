'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/Button";

const stats = [
  { value: '15+', label: 'proyectos completados' },
  { value: '15+', label: 'años de experiencia' },
  { value: '∞', label: 'ideas por descubrir' },
];

export const MediaSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[560px] md:min-h-[640px]">
      {/* Photo — left half */}
      <figure className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden shrink-0">
        <img
          src="/img/molly/molly1.webp"
          alt="Molly Yllom"
          className="object-cover w-full h-full"
          style={{ objectPosition: 'center 5%' }}
        />
      </figure>

      {/* Dark panel — right half */}
      <div className="w-full md:w-1/2 bg-indigo-950 text-stone-200 flex flex-col justify-between p-8 md:p-14 lg:p-20">
        <motion.p
          className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          El estudio
        </motion.p>

        <div className="flex flex-col gap-8 my-10 md:my-0">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            ¿Listx para llevar<br />
            tu proyecto al<br />
            <span className="text-violet-400">siguiente nivel?</span>
          </motion.h2>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 border-t border-stone-200/10 pt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black text-violet-400 leading-none">{s.value}</p>
                <p className="text-stone-400 text-xs leading-snug mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Button
            href="https://calendly.com/hola-msny/30min"
            text="Haz tu cita aquí →"
            size="large"
          />
        </motion.div>
      </div>
    </section>
  );
};
