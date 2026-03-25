import Link from 'next/link';
import { ArrowLeft, LockKeyhole, UserPlus } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 font-plex text-sm font-semibold text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-panel">
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 font-plex text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">
              <LockKeyhole className="h-4 w-4" />
              Doctor Portal
            </p>
            <h1 className="mt-4 font-manrope text-3xl font-bold text-slate-950">Login</h1>
            <p className="mt-3 font-plex text-sm text-slate-600">
              This is a UI placeholder. Authentication will be connected in a future release.
            </p>

            <form className="mt-8 space-y-4">
              <label className="block">
                <span className="font-plex text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none focus:border-indigo-400"
                  placeholder="doctor@clinic.com"
                />
              </label>

              <label className="block">
                <span className="font-plex text-sm font-medium text-slate-700">Password</span>
                <input
                  type="password"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-plex text-sm outline-none focus:border-indigo-400"
                  placeholder="••••••••"
                />
              </label>

              <button
                type="button"
                className="w-full rounded-xl bg-gradient-to-r from-brand-indigo to-brand-violet px-4 py-3 font-plex text-sm font-semibold text-white shadow-glow"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-indigo-200 bg-white/90 p-8 shadow-panel backdrop-blur">
            <p className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 font-plex text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
              <UserPlus className="h-4 w-4" />
              New Providers
            </p>
            <h2 className="mt-4 font-manrope text-2xl font-semibold text-slate-950">Request Access</h2>
            <p className="mt-3 font-plex text-sm text-slate-600">
              Submit your practice details and our team will verify your credentials to activate account access.
            </p>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-indigo-200 px-4 py-3 font-plex text-sm font-semibold text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-50"
            >
              Request Access
            </button>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-plex text-xs uppercase tracking-[0.12em] text-slate-500">
              For licensed medical professionals only.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
