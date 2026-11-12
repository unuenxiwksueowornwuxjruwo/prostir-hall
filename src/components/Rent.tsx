import { useState, type FormEvent } from 'react'
import { FORMATS, NOT_CONNECTED, PRICE, START_TIMES } from '../data/content'
import { btnLime, card, fieldCls, focusRing, Heading, Icon, IconBox, Notice, Reveal, SectionShell } from './ui'

function today() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

export default function Rent() {
  const [format, setFormat] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [notice, setNotice] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const get = (k: string) => String(fd.get(k) ?? '').trim()
    const err: Record<string, string> = {}
    if (get('name').length < 2) err.name = 'Вкажіть ім’я'
    if (get('phone').replace(/\D/g, '').length < 9) err.phone = 'Вкажіть коректний номер телефону'
    if (!get('format')) err.format = 'Оберіть формат'
    if (!get('date')) err.date = 'Оберіть дату'
    else if (get('date') < today()) err.date = 'Дата не може бути в минулому'
    if (!get('time')) err.time = 'Оберіть час початку'
    setErrors(err)
    setNotice(Object.keys(err).length === 0)
  }

  const Err = ({ k }: { k: string }) =>
    errors[k] ? <p id={`err-${k}`} className="mt-1 text-xs text-red-300">{errors[k]}</p> : null
  const a = (k: string) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `err-${k}` : undefined })
  const label = 'mb-1.5 block text-sm font-medium text-white/80'

  return (
    <SectionShell id="rent">
      <div>
        <Heading id="rent-h" eyebrow="03 / Оренда" title="Оренда залу" />
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <Reveal>
            <p className="font-display text-4xl font-black text-lime sm:text-5xl md:text-6xl">{PRICE}</p>
            <p className="mt-2 text-sm text-white/60">Вартість уточнюйте перед бронюванням</p>
            <p className="mt-2 text-sm text-white/60">Щодня 07:00–23:00</p>
            <div role="radiogroup" aria-label="Формат оренди" className="mt-8 space-y-3">
              {FORMATS.map((f) => {
                const sel = format === f.id
                return (
                  <button
                    key={f.id} type="button" role="radio" aria-checked={sel}
                    onClick={() => setFormat(f.id)}
                    className={`${card} flex w-full items-start gap-4 p-4 text-left ${sel ? '!border-lime bg-lime/5' : ''} ${focusRing}`}
                  >
                    <IconBox><Icon name={f.icon} /></IconBox>
                    <span>
                      <span className="block font-heading text-lg font-bold">{f.title}</span>
                      <span className="block text-sm text-white/65">{f.text}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-white/10 bg-graphite-800 p-6 md:p-8" aria-label="Заявка на оренду">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="r-name" className={label}>Ім’я *</label>
                  <input id="r-name" name="name" required autoComplete="name" className={fieldCls} {...a('name')} /><Err k="name" />
                </div>
                <div>
                  <label htmlFor="r-phone" className={label}>Телефон *</label>
                  <input id="r-phone" name="phone" type="tel" required autoComplete="tel" className={fieldCls} {...a('phone')} /><Err k="phone" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="r-format" className={label}>Формат *</label>
                  <select id="r-format" name="format" required value={format} onChange={(e) => setFormat(e.target.value)} className={fieldCls} {...a('format')}>
                    <option value="">Оберіть формат</option>
                    {FORMATS.map((f) => <option key={f.id} value={f.id}>{f.title}</option>)}
                  </select><Err k="format" />
                </div>
                <div>
                  <label htmlFor="r-date" className={label}>Дата *</label>
                  <input id="r-date" name="date" type="date" required min={today()} className={`${fieldCls} [color-scheme:dark]`} {...a('date')} /><Err k="date" />
                </div>
                <div>
                  <label htmlFor="r-time" className={label}>Час початку *</label>
                  <select id="r-time" name="time" required defaultValue="" className={fieldCls} {...a('time')}>
                    <option value="">Оберіть час</option>
                    {START_TIMES.map((t) => <option key={t}>{t}</option>)}
                  </select><Err k="time" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="r-dur" className={label}>Тривалість</label>
                  <select id="r-dur" name="duration" defaultValue="1" className={fieldCls}>
                    {[1, 2, 3, 4].map((h) => <option key={h} value={h}>{h} год</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="r-comment" className={label}>Коментар</label>
                  <textarea id="r-comment" name="comment" rows={3} className={fieldCls} />
                </div>
              </div>
              <button type="submit" className={`${btnLime} mt-6 w-full sm:w-auto`}>Надіслати заявку</button>
              {notice && <div className="mt-5"><Notice>{NOT_CONNECTED}</Notice></div>}
            </form>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
