const stats = [
  { num: '2025', label: 'Guide Michelin' },
  { num: 'XIXe', label: 'Siècle · Passage Sarget' },
  { num: '25 ans', label: 'D’expérience · T. Pasquereau' },
  { num: '∞', label: 'Saveurs à explorer', italic: true },
]

export function StatStrip() {
  return (
    <section className="bg-[#C4A017] text-[#0D0C09]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex min-h-[150px] flex-col items-center justify-center px-4 py-10 text-center ${
              i % 2 === 0 ? 'border-r border-[#0D0C09]/20' : ''
            } ${i < 2 ? 'border-b border-[#0D0C09]/20 md:border-b-0' : ''} ${i === 1 ? 'md:border-r' : ''} ${i === 2 ? 'md:border-r' : ''}`}
          >
            <span className="font-libre text-[3.2rem] font-bold leading-none">{s.num}</span>
            <span className={`mt-3 max-w-[12rem] font-nunito text-[11px] uppercase tracking-[0.16em] text-[#0D0C09]/70 ${s.italic ? 'font-light italic lowercase tracking-normal' : 'font-semibold'}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
