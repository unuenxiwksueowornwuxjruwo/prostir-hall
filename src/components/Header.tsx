import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data/content'
import { btnLime, container, focusRing } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between gap-4 md:h-20`}>
        <a href="#home" className={`rounded-md ${focusRing}`} aria-label="PROSTIR HALL — на головну">
          <img src="img/logo.png" alt="PROSTIR HALL" width={688} height={862} className="h-12 w-auto md:h-14" />
        </a>
        <nav aria-label="Головна навігація" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={`inline-flex min-h-[44px] items-center rounded-lg px-3 font-heading text-sm font-semibold text-white/80 transition hover:text-lime ${focusRing}`}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#rent" className={`${btnLime} hidden sm:inline-flex`}>Забронювати</a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 lg:hidden ${focusRing}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t border-white/10 bg-ink lg:hidden">
        <ul className={`${container} flex flex-col py-4`}>
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={close} className={`flex min-h-[48px] items-center rounded-lg font-heading text-base font-semibold ${focusRing}`}>
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href="#rent" onClick={close} className={`${btnLime} w-full`}>Забронювати</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
