'use client';

import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  Clock3,
  Dumbbell,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Truck,
  UserRoundCheck,
  Waves
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { ScienceDecor } from '@/components/science-decor';
import { useLanguage } from '@/lib/language-context';

export default function HomePage() {
  const { t } = useLanguage();

  const valueBadges = [
    { label: t('pharmaceuticalGrade'), icon: BadgeCheck },
    { label: t('nationwideShipping'), icon: Truck },
    { label: t('doctorExclusive'), icon: UserRoundCheck },
    { label: t('fastTurnaround'), icon: Clock3 }
  ];

  const reasons = [
    t('reason1'),
    t('reason2'),
    t('reason3'),
    t('reason4'),
    t('reason5'),
    t('reason6')
  ];

  const categories = [
    { title: t('weightManagement'), desc: t('weightManagementDesc'), icon: Activity },
    { title: t('performanceRecovery'), desc: t('performanceRecoveryDesc'), icon: Dumbbell },
    { title: t('antiAging'), desc: t('antiAgingDesc'), icon: Sparkles },
    { title: t('sexualHealth'), desc: t('sexualHealthDesc'), icon: HeartPulse },
    { title: t('cognitiveEnhancement'), desc: t('cognitiveEnhancementDesc'), icon: Brain },
    { title: t('immuneSupport'), desc: t('immuneSupportDesc'), icon: ShieldCheck }
  ];

  const qualityChecks = [
    t('quality1'),
    t('quality2'),
    t('quality3'),
    t('quality4'),
    t('quality5')
  ];

  const steps = [
    t('step1'),
    t('step2'),
    t('step3'),
    t('step4')
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <ScienceDecor />

      <div className="absolute inset-0 -z-0 bg-lattice bg-[size:24px_24px] opacity-60" />
      <div className="absolute left-0 top-0 -z-0 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="absolute right-0 top-1/3 -z-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10">
        <header className="mb-12 sm:mb-20 flex items-center justify-between gap-3 rounded-2xl sm:rounded-full border border-indigo-100 bg-white/80 px-4 sm:px-6 py-3 shadow-panel backdrop-blur">
          <div className="min-w-0 flex-1">
            <p className="font-plex text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
              Alpha Biologix
            </p>
            <p className="hidden sm:block font-plex text-sm text-slate-600">{t('tagline')}</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="tel:305-315-5188"
              className="hidden md:block font-plex text-sm font-medium text-slate-700 transition hover:text-indigo-600"
            >
              305-315-5188
            </a>
            <Link
              href="/login"
              className="rounded-full border border-indigo-200 px-3 sm:px-4 py-2 font-plex text-xs sm:text-sm font-semibold text-indigo-600 transition hover:border-indigo-400 whitespace-nowrap"
            >
              {t('doctorPortal')}
            </Link>
          </div>
        </header>

        <section className="relative mb-24">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-4 py-2 font-plex text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
              <FlaskConical className="h-4 w-4" />
              {t('heroBadge')}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="max-w-4xl font-manrope text-5xl font-bold leading-tight text-slate-950 sm:text-6xl">
              {t('heroTitle')}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl font-plex text-lg leading-relaxed text-slate-700">
              {t('heroSubtitle')}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap gap-3">
            {valueBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-plex text-sm font-medium text-slate-700 shadow-sm"
              >
                <Icon className="h-4 w-4 text-indigo-600" />
                {label}
              </div>
            ))}
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-indigo to-brand-violet px-6 py-3 font-plex text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
            >
              {t('getStarted')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3 font-plex text-sm font-semibold text-indigo-700 transition hover:border-indigo-400"
            >
              {t('doctorPortal')}
              <Microscope className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>

        <Reveal className="mb-24 rounded-3xl border border-indigo-100 bg-white/90 p-8 shadow-panel backdrop-blur sm:p-10">
          <h2 className="mb-6 font-manrope text-3xl font-semibold text-slate-950">{t('whyTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div key={reason} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-plex text-sm font-semibold text-indigo-600">0{index + 1}</p>
                <p className="mt-2 font-plex text-sm text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <section className="mb-24">
          <Reveal>
            <h2 className="mb-4 font-manrope text-3xl font-semibold text-slate-950">{t('categoriesTitle')}</h2>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ title, desc, icon: Icon }, idx) => (
              <Reveal key={title} delay={idx * 70}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:border-indigo-200">
                  <Icon className="mb-4 h-8 w-8 text-indigo-600" />
                  <h3 className="font-manrope text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 font-plex text-sm leading-relaxed text-slate-600">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="quality" className="mb-24 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-8 shadow-panel">
            <h2 className="mb-6 font-manrope text-3xl font-semibold text-slate-950">{t('qualityTitle')}</h2>
            <div className="space-y-4">
              {qualityChecks.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  <p className="font-plex text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
            <h2 className="mb-6 font-manrope text-3xl font-semibold text-slate-950">{t('howItWorksTitle')}</h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-plex text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 font-plex text-sm text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section id="contact" className="mb-20 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 rounded-3xl border border-indigo-100 bg-white p-8 shadow-panel">
            <h2 className="font-manrope text-3xl font-semibold text-slate-950">{t('contactTitle')}</h2>
            <p className="mt-3 font-plex text-sm text-slate-600">
              {t('contactSubtitle')}
            </p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-plex text-sm font-medium text-slate-700">{t('nameLabel')}</span>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                  placeholder="Dr. Jane Doe"
                />
              </label>

              <label className="block">
                <span className="font-plex text-sm font-medium text-slate-700">{t('emailLabel')}</span>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                  placeholder="you@practice.com"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="font-plex text-sm font-medium text-slate-700">{t('practiceLabel')}</span>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="font-plex text-sm font-medium text-slate-700">{t('phoneLabel')}</span>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                  placeholder="(305) 315-5188"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="font-plex text-sm font-medium text-slate-700">{t('messageLabel')}</span>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                  placeholder={t('messagePlaceholder')}
                />
              </label>

              <button
                type="button"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-violet px-6 py-3 font-plex text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
              >
                {t('submitInquiry')}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
            <h3 className="font-manrope text-2xl font-semibold text-slate-950">{t('contactInfoTitle')}</h3>
            <div className="mt-6 space-y-5 font-plex text-sm text-slate-700">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">{t('addressLabel')}</p>
                <p className="mt-1">7245 Southwest 57th Court, South Miami, Florida 33143</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">{t('phoneContactLabel')}</p>
                <a href="tel:3053155188" className="mt-1 block hover:text-indigo-600">
                  305-315-5188
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">{t('emailContactLabel')}</p>
                <a href="mailto:info@alphabiorx.com" className="mt-1 block hover:text-indigo-600">
                  info@alphabiorx.com
                </a>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 font-plex text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">
              {t('disclaimer')}
            </div>
          </Reveal>
        </section>

        <footer className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-manrope text-lg font-semibold text-slate-950">Alpha Biologix</h4>
              <p className="mt-2 font-plex text-sm text-slate-600">
                {t('footerDesc')}
              </p>
            </div>
            <div>
              <h5 className="font-plex text-sm font-semibold uppercase tracking-[0.14em] text-indigo-600">{t('quickLinks')}</h5>
              <ul className="mt-3 space-y-2 font-plex text-sm text-slate-700">
                <li>
                  <a href="#contact" className="hover:text-indigo-600">
                    {t('contact')}
                  </a>
                </li>
                <li>
                  <Link href="/login" className="hover:text-indigo-600">
                    {t('doctorPortal')}
                  </Link>
                </li>
                <li>
                  <a href="#quality" className="hover:text-indigo-600">
                    {t('qualityAssurance')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-plex text-sm font-semibold uppercase tracking-[0.14em] text-indigo-600">{t('contactDetails')}</h5>
              <ul className="mt-3 space-y-2 font-plex text-sm text-slate-700">
                <li>7245 Southwest 57th Court, South Miami, Florida 33143</li>
                <li>305-315-5188</li>
                <li>info@alphabiorx.com</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-slate-200 pt-5 font-plex text-xs uppercase tracking-[0.12em] text-slate-500">
            {t('disclaimer')}
          </p>
        </footer>
      </div>

      <Waves className="pointer-events-none absolute bottom-6 right-20 h-10 w-10 text-indigo-300/60" />
    </main>
  );
}
