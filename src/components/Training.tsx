import { PHOTOS, TRAINING } from '../data/content'
import { card, Heading, PhotoFrame, Reveal, SectionShell } from './ui'

export default function Training() {
  return (
    <SectionShell id="training" dark={false}>
      <div>
        <Heading id="training-h" eyebrow="04 / Тренування" title="Тренування" lead="Індивідуальні та командні тренування, ігри й спортивні події різного рівня." />
        <ul className="grid gap-6 md:grid-cols-3">
          {TRAINING.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 100} className={`${card} overflow-hidden`}>
              <PhotoFrame k={t.photo} overlay className="aspect-[4/3] w-full" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-white/65">{t.text}</p>
                <span className="sr-only">{PHOTOS[t.photo].caption}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  )
}
