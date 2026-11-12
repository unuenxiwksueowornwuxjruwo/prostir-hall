import { useState, type FormEvent } from 'react'
import { Clock, Instagram, MapPin, Phone } from 'lucide-react'
import { ADDRESS, HOURS, NOT_CONNECTED_CONTACT } from '../data/content'
import { btnLime, fieldCls, Heading, Notice, Reveal, SectionShell } from './ui'

const ph = 'rounded-xl border border-dashed border-white/25 px-4 py-3 text-sm text-white/50'
const MAP =
  'https://www.google.com/maps?q=Prostir%20Hall%2C%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D0%BA%D0%B0%20%D0%93%D0%BB%D1%83%D1%88%D0%BA%D0%BE%D0%B2%D0%B0%2C%201%2C%20%D0%9A%D0%B8%D1%97%D0%B2&output=embed'

export default function Contacts() {
  const [err, setErr] = useState<Record<string, string>>({})
  const [notice, setNotice] = useState(false)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const g = (k: string) => String(fd.get(k) ?? '').trim()
    const x: Record<string, string> = {}
    if (g('name').length < 2) x.name = 'Вкажіть ім’я'
    if (g('contact').length < 5) x.contact = 'Вкажіть телефон або e-mail'
    if (g('message').length < 3) x.message = 'Напишіть повідомлення'
    setErr(x)
    setNotice(Object.keys(x).length === 0)
  }
  const E = ({ k }: { k: string }) => (err[k] ? <p id={`c-err-${k}`} className="mt-1 text-xs text-red-300">{err[k]}</p> : null)
  const a = (k: string) => ({ 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `c-err-${k}` : undefined })
  const label = 'mb-1.5 block text-sm font-medium text-white/80'
  return (
    <SectionShell id="contacts">
      <div>
        <Heading id="contacts-h" eyebrow="07 / Контакти" title="Контакти" />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <img src="img/logo.png" alt="PROSTIR HALL" width={688} height={862} loading="lazy" className="h-40 w-auto" />
            <ul className="space-y-3 text-white/85">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />{ADDRESS}</li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />Щодня {HOURS}</li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />
                <a href="tel:+380677799358" className="underline decoration-lime/50 underline-offset-4 hover:text-lime">067 779 93 58</a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />
                <a href="https://www.instagram.com/prostirhall/" target="_blank" rel="noopener noreferrer" className="underline decoration-lime/50 underline-offset-4 hover:text-lime">
                  Instagram: @prostirhall
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className={ph}>E-mail: [буде додано]</li>
            </ul>
            <a href="#rent" className={btnLime}>Забронювати зал</a>
          </Reveal>
          <Reveal delay={120} className="space-y-6">
            <iframe
              src={MAP} title="Карта: PROSTIR HALL на ВДНГ" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: 'grayscale(0.3)' }} className="h-64 w-full rounded-2xl border border-white/10 md:h-72"
            />
            <form onSubmit={onSubmit} noValidate aria-label="Зворотний зв’язок" className="rounded-2xl border border-white/10 bg-graphite-800 p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="c-name" className={label}>Ім’я *</label>
                  <input id="c-name" name="name" required autoComplete="name" className={fieldCls} {...a('name')} /><E k="name" />
                </div>
                <div>
                  <label htmlFor="c-contact" className={label}>Телефон або e-mail *</label>
                  <input id="c-contact" name="contact" required className={fieldCls} {...a('contact')} /><E k="contact" />
                </div>
                <div>
                  <label htmlFor="c-msg" className={label}>Повідомлення *</label>
                  <textarea id="c-msg" name="message" rows={3} required className={fieldCls} {...a('message')} /><E k="message" />
                </div>
              </div>
              <button type="submit" className={`${btnLime} mt-5`}>Надіслати</button>
              {notice && <div className="mt-5"><Notice>{NOT_CONNECTED_CONTACT}</Notice></div>}
            </form>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
