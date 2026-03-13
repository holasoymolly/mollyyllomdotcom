'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NFTAttribute {
  trait_type: string;
  value: string | number;
  display_type?: string;
  max_value?: number;
}

interface NFTMetadata {
  name: string;
  description?: string;
  attributes?: NFTAttribute[];
}

interface NFTModalProps {
  image: string;
  collectionName: string;
  collectionLink: string;
  metadataUrl: string | null;
  onClose: () => void;
}

function formatValue(value: string | number): string {
  if (typeof value === 'number') return String(value);
  return value
    .replace(/[_-]/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const NFTModal = ({ image, collectionName, collectionLink, metadataUrl, onClose }: NFTModalProps) => {
  const [metadata, setMetadata] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!metadataUrl) return;
    setLoading(true);
    fetch(metadataUrl)
      .then((r) => r.json())
      .then((data) => setMetadata(data))
      .catch(() => setMetadata(null))
      .finally(() => setLoading(false));
  }, [metadataUrl]);

  const rarityAttr = metadata?.attributes?.find(
    (a) => a.display_type === 'number' && a.trait_type === 'Rarity Rank'
  );
  const regularAttrs = metadata?.attributes?.filter((a) => a.display_type !== 'number');
  const hasMetadata = !!metadataUrl;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl bg-[#07061a] border border-white/10 overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-200 transition-colors duration-200 bg-black/40 rounded-full"
            aria-label="Cerrar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* ── Image ── */}
          <div className={`shrink-0 ${hasMetadata ? 'w-full md:w-[46%]' : 'w-full'}`}>
            <img
              src={image}
              alt={metadata?.name || collectionName}
              className={`w-full object-cover ${hasMetadata ? 'h-72 md:h-full' : 'max-h-[80vh]'}`}
            />
          </div>

          {/* ── Info panel ── */}
          {hasMetadata && (
            <div className="flex flex-col w-full overflow-y-auto">

              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-white/8">
                <p className="text-violet-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                  {collectionName}
                </p>
                {loading && (
                  <p className="text-stone-600 text-sm animate-pulse">Cargando...</p>
                )}
                {metadata && (
                  <h3 className="text-3xl md:text-4xl font-black text-stone-100 leading-[1.05] tracking-tight">
                    {metadata.name}
                  </h3>
                )}
              </div>

              {/* Rarity strip */}
              {rarityAttr && (
                <div className="flex items-center justify-between px-8 py-4 bg-violet-500/10 border-b border-violet-500/20">
                  <span className="text-violet-400 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Rarity Rank
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-violet-300 font-black text-2xl leading-none">
                      #{rarityAttr.value}
                    </span>
                    <span className="text-violet-500 text-sm font-semibold">
                      / {rarityAttr.max_value}
                    </span>
                  </div>
                </div>
              )}

              {/* Attributes */}
              {regularAttrs && regularAttrs.length > 0 && (
                <div className="px-8 py-6 flex-1">
                  <p className="text-stone-600 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                    Atributos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {regularAttrs.map((attr, i) => (
                      <div
                        key={i}
                        className="flex flex-col bg-white/4 border border-white/8 px-3 py-2.5 rounded-sm min-w-[90px]"
                      >
                        <span className="text-violet-500 text-[9px] font-bold tracking-widest uppercase mb-1 leading-none">
                          {attr.trait_type}
                        </span>
                        <span className="text-stone-200 text-xs font-bold leading-tight">
                          {formatValue(attr.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mint button */}
              <div className="px-8 py-6 mt-auto border-t border-white/8">
                <a
                  href={collectionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-violet-500 text-stone-100 font-black px-8 py-4 rounded-full transition-all duration-300 hover:bg-violet-400 tracking-wide text-sm"
                >
                  Mint
                </a>
              </div>
            </div>
          )}

          {/* ── No metadata: just image + button ── */}
          {!hasMetadata && (
            <div className="px-8 py-6 border-t border-white/8 flex items-center justify-between gap-6">
              <div>
                <p className="text-violet-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  {collectionName}
                </p>
              </div>
              <a
                href={collectionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center bg-violet-500 text-stone-100 font-black px-8 py-4 rounded-full transition-all duration-300 hover:bg-violet-400 text-sm tracking-wide whitespace-nowrap"
              >
                Ver colección →
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
