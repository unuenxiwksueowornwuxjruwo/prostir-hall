import { Clock, MapPin, Wallet } from 'lucide-react'
import { ADDRESS_SHORT, HOURS, NB, PRICE } from '../data/content'
import { btnLime, btnOutline, CourtLines, PhotoFrame, Reveal, SectionShell } from './ui'

export default function Hero() {
  const chips = [
    { Icon: Clock, text: `Щодня ${HOURS}` },
    { Icon: Wallet, text: `Оренда ${PRICE}` },
    { Icon: MapPin, text: ADDRESS_SHORT },
  ]
  return (
    <SectionShell id="home" className="!py-16 md:!py-20">
      <CourtLines className="-left-32 top-10 h-[640px] w-[640px]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-lime" aria-hidden="true" />
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-lime">01 / ВДНГ · КИЇВ</p>
          </div>
          <h1 className="font-display text-5xl font-black uppercase leading-[1.05] md:text-7xl">
            Твій простір. <span className="text-lime">Твоя{NB}гра.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Сучасний критий спортивний зал на ВДНГ, створений передусім для баскетболу. Тренування, ігри та спортивні події різного рівня.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#rent" className={btnLime}>Забронювати зал</a>
            <a href="#about" className={btnOutline}>Про зал</a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {chips.map(({ Icon, text }) => (
              <li key={text} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-graphite-800 px-4 text-sm text-white/90">
                <Icon className="h-4 w-4 text-lime" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
          <span className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-3xl border-r-4 border-t-4 border-lime" aria-hidden="true" />
          <span className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-3xl border-b-4 border-l-4 border-lime/60" aria-hidden="true" />
          <PhotoFrame k="dunk" eager overlay className="aspect-[740/555] rounded-3xl border border-white/10" />
          <div className="absolute -bottom-6 right-2 max-w-[280px] rounded-2xl border border-white/10 bg-graphite-800/95 p-4 shadow-xl backdrop-blur sm:right-6">
            <p className="font-heading text-sm font-bold">Баскетбол · Волейбол · Бадмінтон</p>
            <p className="mt-1 text-xs text-white/60">волейбол і бадмінтон — за домовленістю</p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
