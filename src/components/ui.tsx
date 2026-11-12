import type { ElementType, ReactNode } from 'react'
import {
  Trophy, Layers, CircleDot, Volleyball, Dumbbell, Swords, Medal, Shirt, ShowerHead, Coffee, Wifi, Zap,
  type LucideIcon,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { PHOTOS } from '../data/content'

const ICONS: Record<string, LucideIcon> = {
  Trophy, Layers, CircleDot, Volleyball, Dumbbell, Swords, Medal, Shirt, ShowerHead, Coffee, Wifi, Zap,
}
export function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const C = ICONS[name] ?? CircleDot
  return <C className={className} aria-hidden="true" />
}

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime">
      {children}
    </span>
  )
}

export function Reveal({
  children, className = '', delay = 0, as: Tag = 'div',
}: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const [ref, shown] = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={`transition duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
    >
      {children}
    </Tag>
  )
}

export const container = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink'
export const btnLime = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-lime px-6 py-3 font-heading text-sm font-bold text-ink transition hover:bg-lime-light ${focusRing}`
export const btnOutline = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-heading text-sm font-bold text-white transition hover:border-lime hover:text-lime ${focusRing}`
export const card =
  'rounded-2xl border border-white/10 bg-graphite-800 transition duration-300 hover:-translate-y-1 hover:border-lime/60'
export const fieldCls = `min-h-[44px] w-full rounded-xl border border-white/15 bg-ink px-4 py-2.5 text-sm text-white placeholder:text-white/40 ${focusRing}`

export function SectionShell({
  id, dark = true, children, className = '',
}: { id: string; dark?: boolean; children: ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 overflow-hidden py-24 md:py-32 lg:flex lg:min-h-screen lg:items-center ${dark ? 'bg-ink' : 'bg-graphite-900'} ${className}`}
    >
      <div className={container}>{children}</div>
    </section>
  )
}

export function Heading({
  eyebrow, title, id, lead,
}: { eyebrow: string; title: string; id: string; lead?: string }) {
  return (
    <Reveal className="mb-10 max-w-3xl md:mb-14">
      <div className="mb-5 flex items-center gap-4">
        <span className="h-px w-12 bg-lime" aria-hidden="true" />
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-lime">{eyebrow}</p>
      </div>
      <h2 id={id} className="font-display text-3xl font-extrabold uppercase leading-tight md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-base text-white/70 md:text-lg">{lead}</p>}
    </Reveal>
  )
}

export function Badge() {
  return (
    <span className="absolute bottom-2 left-2 rounded-md bg-ink/70 px-2 py-1 text-[10px] font-medium leading-none text-white/80">
      Фото: PROSTIR HALL
    </span>
  )
}

export function PhotoImg({
  k, className = '', eager = false, sizes,
}: { k: string; className?: string; eager?: boolean; sizes?: string }) {
  const p = PHOTOS[k]
  return (
    <img
      src={p.src} alt={p.alt} width={p.w} height={p.h} sizes={sizes}
      loading={eager ? undefined : 'lazy'}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

export function PhotoFrame({
  k, className = '', imgClass = '', eager = false, overlay = false,
}: { k: string; className?: string; imgClass?: string; eager?: boolean; overlay?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <PhotoImg k={k} eager={eager} className={imgClass} />
      {overlay && <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />}
      <Badge />
    </div>
  )
}

export function Placeholder({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Місце для фото — буде замінено"
      className={`flex flex-col items-center justify-center gap-3 border border-dashed border-white/20 bg-gradient-to-br from-graphite-700 to-graphite-900 p-6 text-center text-white/60 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-lime/70" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3v18M5.6 5.6c3 3 3 9.8 0 12.8M18.4 5.6c-3 3-3 9.8 0 12.8" />
      </svg>
      <span className="text-sm">Місце для фото — буде замінено</span>
    </div>
  )
}

export function CourtLines({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={`pointer-events-none absolute text-white/[0.04] ${className}`} fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <circle cx="200" cy="200" r="120" />
      <circle cx="200" cy="200" r="30" />
      <path d="M0 200h400M200 0v400" />
      <path d="M80 0v120a120 120 0 0 0 240 0V0" />
    </svg>
  )
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="rounded-xl border border-lime/40 bg-lime/10 p-4 text-sm text-white/90">
      <p className="mb-1 font-heading text-xs font-bold uppercase tracking-wider text-lime">Інформація</p>
      {children}
    </div>
  )
}
