'use client'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface ProtectedNextImageProps extends Omit<ImageProps, 'draggable'> {
  containerClassName?: string
}

/**
 * Drop-in replacement for Next.js <Image> that prevents dragging and right-click saving.
 * Use whenever you need fill-based or sized Next.js images protected from download.
 *
 * The `containerClassName` prop replaces the outer `<div className="relative ...">` wrapper
 * that fill images require — pass all sizing, shape, and border classes here.
 *
 * Example:
 *   <ProtectedNextImage
 *     containerClassName="w-64 h-64 rounded-full overflow-hidden"
 *     src="/img/photo.jpg"
 *     alt="Photo"
 *     fill
 *     sizes="256px"
 *     className="object-cover"
 *   />
 */
export function ProtectedNextImage({ containerClassName = '', ...imageProps }: ProtectedNextImageProps) {
  return (
    <div className={`relative ${containerClassName}`}>
      <Image
        {...imageProps}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      {/* Transparent overlay — blocks drag ghost and secondary right-click */}
      <div
        aria-hidden="true"
        className="absolute inset-0 select-none"
        style={{ pointerEvents: 'none' }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  )
}
