import { ADDRESS } from '../data/content'
import { container } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className={`${container} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
        <img src="img/logo.png" alt="PROSTIR HALL" width={688} height={862} loading="lazy" className="h-16 w-auto" />
        <div className="text-sm text-white/60">
          <p>© {new Date().getFullYear()} PROSTIR HALL</p>
          <p>{ADDRESS}</p>
          <p>Інформація: vdng.ua</p>
        </div>
      </div>
    </footer>
  )
}
