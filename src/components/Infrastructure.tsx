import { INFRA, INFRA_PHOTOS, INFRA_PHOTO_LABELS } from '../data/content'
import { card, Heading, Icon, IconBox, PhotoFrame, Reveal, SectionShell } from './ui'

export default function Infrastructure() {
  return (
    <SectionShell id="infrastructure">
      <div>
        <Heading id="infra-h" eyebrow="05 / Інфраструктура" title="Інфраструктура" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INFRA.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 60} className={`${card} flex items-center gap-4 p-5`}>
              <IconBox><Icon name={c.icon} /></IconBox>
              <div>
                <h3 className="font-heading text-lg font-bold">{c.title}</h3>
                <p className="text-sm text-white/65">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {INFRA_PHOTOS.map((k, i) => (
            <Reveal as="li" key={k} delay={i * 80}>
              <figure>
                <PhotoFrame k={k} className="aspect-[4/3] rounded-2xl border border-white/10" />
                <figcaption className="mt-2 font-heading text-sm font-semibold text-white/80">{INFRA_PHOTO_LABELS[k]}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  )
}
