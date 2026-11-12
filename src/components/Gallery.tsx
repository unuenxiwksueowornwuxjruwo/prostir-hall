import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GALLERY_ORDER, PHOTOS } from '../data/content'
import { Badge, focusRing, Heading, PhotoImg, Reveal, SectionShell } from './ui'

const SPAN: Record<string, string> = { dunk: 'col-span-2 row-span-2', team: 'sm:col-span-2' }

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null)
  const opener = useRef<HTMLElement | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const n = GALLERY_ORDER.length

  const close = useCallback(() => {
    setIdx(null)
    opener.current?.focus()
  }, [])

  useEffect(() => {
    if (idx === null) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') setIdx((i) => (i === null ? i : (i + 1) % n))
      else if (e.key === 'ArrowLeft') setIdx((i) => (i === null ? i : (i - 1 + n) % n))
      else if (e.key === 'Tab') {
        const f = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!f || f.length === 0) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [idx === null, close, n]) // eslint-disable-line react-hooks/exhaustive-deps

  const cur = idx !== null ? PHOTOS[GALLERY_ORDER[idx]] : null
  const nav = `absolute top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-white hover:text-lime ${focusRing}`

  return (
    <SectionShell id="gallery" dark={false}>
      <div>
        <Heading id="gallery-h" eyebrow="06 / Галерея" title="Галерея" />
        <ul className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[170px] sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_ORDER.map((k, i) => (
            <Reveal as="li" key={k} delay={i * 50} className={`${SPAN[k] ?? ''} min-h-0`}>
              <button
                type="button"
                aria-label={`Відкрити фото: ${PHOTOS[k].caption}`}
                onClick={(e) => { opener.current = e.currentTarget; setIdx(i) }}
                className={`group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-lime/60 ${focusRing}`}
              >
                <PhotoImg k={k} className="transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pb-8 text-left font-heading text-sm font-semibold">{PHOTOS[k].caption}</span>
                <Badge />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {cur && idx !== null && (
        <div
          ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={`Галерея: ${cur.caption}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 outline-none"
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <button type="button" aria-label="Закрити" onClick={close} className={`${nav} right-4 top-8`}>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Попереднє фото" onClick={() => setIdx((idx - 1 + n) % n)} className={`${nav} left-2 sm:left-6`}>
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure className="relative">
            <img
              src={cur.src} alt={cur.alt} width={cur.w} height={cur.h}
              style={{ maxWidth: `min(92vw, ${Math.round(cur.w * 1.5)}px)`, maxHeight: '80vh' }}
              className="h-auto w-auto rounded-2xl"
            />
            <Badge />
            <figcaption className="mt-3 text-center text-sm text-white/80">{cur.caption} · {idx + 1} / {n}</figcaption>
          </figure>
          <button type="button" aria-label="Наступне фото" onClick={() => setIdx((idx + 1) % n)} className={`${nav} right-2 sm:right-6`}>
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </SectionShell>
  )
}
