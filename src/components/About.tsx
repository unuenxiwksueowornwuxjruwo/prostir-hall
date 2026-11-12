import { ArrowRight } from 'lucide-react'
import { ABOUT_CARDS } from '../data/content'
import { card, focusRing, Heading, Icon, IconBox, PhotoFrame, Reveal, SectionShell } from './ui'

export default function About() {
  return (
    <SectionShell id="about" dark={false}>
      <div aria-labelledby="about-h">
        <Heading id="about-h" eyebrow="02 / Про зал" title="Про PROSTIR HALL" />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <PhotoFrame k="court" className="mx-auto aspect-[585/425] max-w-[640px] rounded-3xl border border-white/10" />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-white/75">
            <p className="text-lg">
              PROSTIR HALL — сучасний критий спортивний зал на ВДНГ у Києві, за адресою проспект Академіка Глушкова, 1. Створений передусім для баскетболу.
            </p>
            <p>
              Зал підходить для індивідуальних і командних тренувань, ігор та спортивних подій різного рівня. Нове якісне покриття та зручні баскетбольні конструкції. За попередньою домовленістю доступні волейбол, бадмінтон та інші спортивні активності.
            </p>
            <a href="#infrastructure" className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg font-heading font-bold text-lime hover:underline ${focusRing}`}>
              Уся інфраструктура <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80} className={`${card} p-6`}>
              <IconBox><Icon name={c.icon} /></IconBox>
              <h3 className="mt-4 font-heading text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-white/65">{c.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  )
}
