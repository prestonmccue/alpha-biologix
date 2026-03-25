export function ScienceDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-8 top-24 h-44 w-44 animate-floatSlow rounded-full border border-indigo-200/40 bg-gradient-to-br from-indigo-100/40 to-transparent blur-[0.5px]" />
      <div className="absolute right-8 top-56 h-36 w-36 animate-floatFast rounded-full border border-amber-200/50 bg-gradient-to-tl from-amber-100/40 to-transparent" />

      <svg className="absolute -left-16 top-1/3 h-64 w-64 animate-drift text-indigo-300/60" viewBox="0 0 200 200" fill="none">
        <path d="M28 18C146 44 52 156 172 182" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="28" cy="18" r="6" fill="currentColor" />
        <circle cx="172" cy="182" r="6" fill="currentColor" />
        <circle cx="88" cy="74" r="5" fill="currentColor" />
        <circle cx="112" cy="126" r="5" fill="currentColor" />
      </svg>

      <svg className="absolute right-0 top-24 h-80 w-60 animate-floatSlow text-indigo-400/40" viewBox="0 0 140 340" fill="none">
        <path d="M24 8C98 42 98 124 24 158C-2 170 -2 202 24 214C98 248 98 300 24 334" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M116 8C42 42 42 124 116 158C142 170 142 202 116 214C42 248 42 300 116 334" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 36H108M24 92H116M24 148H116M24 204H116M24 260H116M32 316H108" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>

      <svg className="absolute bottom-20 left-1/2 h-40 w-60 -translate-x-1/2 animate-floatFast text-slate-300/60" viewBox="0 0 240 120" fill="none">
        <rect x="28" y="22" width="44" height="70" rx="8" stroke="currentColor" strokeWidth="2" />
        <path d="M35 22V12C35 8 38 5 42 5H58C62 5 65 8 65 12V22" stroke="currentColor" strokeWidth="2" />
        <rect x="98" y="34" width="44" height="58" rx="8" stroke="currentColor" strokeWidth="2" />
        <path d="M105 34V24C105 20 108 17 112 17H128C132 17 135 20 135 24V34" stroke="currentColor" strokeWidth="2" />
        <rect x="168" y="16" width="44" height="76" rx="8" stroke="currentColor" strokeWidth="2" />
        <path d="M175 16V8C175 4 178 1 182 1H198C202 1 205 4 205 8V16" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}
