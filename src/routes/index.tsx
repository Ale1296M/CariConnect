import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CalendarHeart,
  ClipboardList,
  HeartPulse,
  MapPin,
  Menu,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Con Cariño PR connect — caregiving coordination for teams and families" },
      {
        name: "description",
        content:
          "One calm workspace for caregivers, care recipients and families in Puerto Rico. Schedules, care plans, visit logs and messages — thoughtfully connected.",
      },
      { property: "og:title", content: "Con Cariño PR connect — caregiving coordination" },
      {
        property: "og:description",
        content:
          "A warm place for home care teams and families to plan visits, share updates, and remember what matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Lang = "en" | "es";

const COPY = {
  en: {
    signIn: "Sign in",
    getStarted: "Get started",
    menu: "Menu",
    eyebrow: "Caregiving coordination",
    headlineLead: "Care that stays",
    headlineAccent: "connected",
    lede:
      "Con Cariño PR connect gives home care teams and the families they serve one warm place to plan visits, share updates, and remember every small thing that matters.",
    today: "Today · Tuesday",
    visits: "3 visits",
    verified: "Location verified",
    pending: "Location pending",
    demoHint: "Try it: tap a visit to focus it, tap the badge to change its state.",
    shifts: [
      { time: "8:30 AM", name: "Eleanor Ramírez", detail: "Morning care · Maya" },
      { time: "12:00 PM", name: "Harold Pagán", detail: "Lunch & meds · Sam" },
      { time: "5:30 PM", name: "Rosa Quiñones", detail: "Evening check-in · Maya" },
    ],
    features: [
      { title: "Schedules", body: "Assign shifts, spot gaps, and share who's coming when." },
      { title: "Care plans", body: "Living checklists for meds, meals, mobility, and moments." },
      { title: "Family updates", body: "Warm messages between caregivers and loved ones." },
      { title: "Visit logs", body: "Clock in, note what happened, and keep a gentle history." },
      { title: "Wellbeing tracker", body: "A quick look at mood, comfort, and daily wellness patterns." },
    ],
    footer: "Made with care.",
  },
  es: {
    signIn: "Iniciar sesión",
    getStarted: "Comenzar",
    menu: "Menú",
    eyebrow: "Coordinación de cuidado",
    headlineLead: "Cuidado que permanece",
    headlineAccent: "conectado",
    lede:
      "Con Cariño PR connect ofrece a los equipos de cuidado en el hogar y a las familias un espacio cálido para planificar visitas, compartir novedades y recordar cada pequeño detalle que importa.",
    today: "Hoy · martes",
    visits: "3 visitas",
    verified: "Ubicación verificada",
    pending: "Ubicación pendiente",
    demoHint: "Pruébalo: toca una visita para enfocarla y el distintivo para cambiar su estado.",
    shifts: [
      { time: "8:30 AM", name: "Eleanor Ramírez", detail: "Cuidado matutino · Maya" },
      { time: "12:00 PM", name: "Harold Pagán", detail: "Almuerzo y medicinas · Sam" },
      { time: "5:30 PM", name: "Rosa Quiñones", detail: "Visita de la tarde · Maya" },
    ],
    features: [
      { title: "Horarios", body: "Asigna turnos, detecta espacios libres y comparte quién viene y cuándo." },
      { title: "Planes de cuidado", body: "Listas vivas para medicinas, comidas, movilidad y momentos." },
      { title: "Novedades para la familia", body: "Mensajes cálidos entre cuidadores y seres queridos." },
      { title: "Registro de visitas", body: "Marca tu llegada, anota lo sucedido y guarda un historial cuidadoso." },
      { title: "Seguimiento de bienestar", body: "Un vistazo rápido al estado de ánimo, la comodidad y los patrones diarios de bienestar." },
    ],
    footer: "Hecho con cariño.",
  },
} as const;

type Copy = (typeof COPY)["en"] | (typeof COPY)["es"];

const FEATURE_ICONS = [CalendarHeart, ClipboardList, MessagesSquare, ShieldCheck, HeartPulse];

function Landing() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("cc-lang");
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const setLanguage = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem("cc-lang", next);
  };

  const t = COPY[lang];

  return (
    <div className="min-h-dvh bg-background" lang={lang}>
      <div className="mx-auto flex min-h-dvh max-w-[1600px]">
        <aside className="hidden w-64 shrink-0 border-r border-border/70 px-8 py-8 lg:flex lg:flex-col">
          <Link to="/" className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-xl font-semibold leading-none tracking-tight">Con Cariño PR</span>
          </Link>
          <span className="ml-12 mt-1 font-display text-sm italic text-muted-foreground">connect</span>
          <p className="mt-24 px-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Workspace</p>
          <nav className="mt-5 flex flex-col gap-2">
            {["Today", "Schedules", "Care plans", "Family updates", "Visit logs"].map((item, i) => (
              <div key={item} className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold ${i === 0 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                <span className="grid size-8 place-items-center rounded-xl border border-current/20 text-xs">{i + 1}</span>{item}
              </div>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <LangToggle lang={lang} onChange={setLanguage} />
            <Button asChild variant="outline" className="w-full"><Link to="/login">{t.signIn}</Link></Button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-border/70 bg-background/85 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <Link to="/" className="flex min-w-0 items-center gap-2.5"><Logo /><span className="truncate font-display text-xl tracking-tight">Con Cariño PR connect</span></Link>
              <div className="flex items-center gap-2"><Button asChild size="sm"><Link to="/signup">{t.getStarted}</Link></Button><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" aria-label={t.menu}><Menu /></Button></SheetTrigger><SheetContent side="right"><SheetHeader><SheetTitle className="font-display text-2xl">Con Cariño PR connect</SheetTitle></SheetHeader><div className="mt-8 flex flex-col gap-4"><LangToggle lang={lang} onChange={setLanguage} /><Button asChild variant="outline"><Link to="/login">{t.signIn}</Link></Button></div></SheetContent></Sheet></div>
            </div>
          </header>

          <main className="px-4 pb-24 sm:px-8 lg:px-16 xl:px-24">
            <section className="grid gap-10 py-10 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="min-w-0">
                <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="size-2 rounded-full bg-gold" />{t.eyebrow}</p>
                <h1 className="max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-primary sm:text-6xl lg:text-7xl">Care works better <em className="font-normal italic text-foreground">together.</em></h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">{t.lede}</p>
                <div className="mt-10 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full px-7"><Link to="/signup">{t.getStarted} <span aria-hidden="true">→</span></Link></Button><Button asChild size="lg" variant="outline" className="rounded-full px-7"><Link to="/login">{t.signIn}</Link></Button></div>
                <p className="mt-5 text-sm text-muted-foreground">A private space for your workplace and care circle.</p>
              </div>
              <div className="rounded-[2rem] border border-border bg-card p-4 shadow-2xl shadow-primary/10 sm:p-6"><div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Connect workspace</p><h2 className="mt-2 font-display text-3xl font-semibold text-primary">A clearer view of care</h2></div><Logo /></div><div className="mt-6 rounded-[1.5rem] bg-secondary p-6"><div className="flex items-center justify-between gap-3"><p className="font-semibold text-primary">Today&apos;s coordination</p><span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">Up to date</span></div><p className="mt-8 font-display text-3xl font-semibold text-primary">Everyone knows what&apos;s next.</p><div className="mt-6 h-2 rounded-full bg-card"><div className="h-full w-4/5 rounded-full bg-primary" /></div><p className="mt-3 text-sm text-muted-foreground">4 of 5 care tasks confirmed</p></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-border p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Care team</p><p className="mt-4 font-display text-3xl font-semibold text-primary">8 members</p><div className="mt-5 flex -space-x-2"><span className="grid size-9 place-items-center rounded-full border-2 border-card bg-gold text-xs font-bold">MR</span><span className="grid size-9 place-items-center rounded-full border-2 border-card bg-attention text-xs font-bold">SM</span><span className="grid size-9 place-items-center rounded-full border-2 border-card bg-primary text-xs font-bold text-primary-foreground">+6</span></div></div><div className="rounded-2xl border border-border p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Updates</p><p className="mt-4 font-display text-3xl font-semibold text-primary">All shared</p><p className="mt-3 text-sm text-muted-foreground">Last update 2h ago</p></div></div></div>
            </section>

            <section className="border-t border-border pt-12 md:pt-16"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Why connect?</p><h2 className="mt-5 max-w-md font-display text-4xl leading-tight text-primary md:text-5xl">The care around the care.</h2></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{t.features.slice(0, 3).map((f, i) => { const Icon = FEATURE_ICONS[i]!; return <div key={f.title} className="border-t-2 border-border pt-5"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-8 font-display text-2xl font-semibold text-primary">{f.title}</h3><p className="mt-4 text-base leading-7 text-muted-foreground">{f.body}</p></div>; })}</div></div></section>
          </main>
          <footer className="border-t border-border"><div className="flex flex-wrap items-center justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:px-8 lg:px-16 xl:px-24"><p>© {new Date().getFullYear()} Con Cariño PR connect</p><p>{t.footer}</p></div></footer>
        </div>
      </div>
    </div>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1 rounded-full border border-border p-1 text-xs"
    >
      {(["en", "es"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            aria-pressed={active}
            className={`min-h-9 rounded-full px-4 py-1.5 font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              active
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-transparent text-foreground hover:bg-secondary"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

const BADGE_CYCLE = ["verified", "pending", "none"] as const;

function SchedulePreview({ t }: { t: Copy }) {
  const [selected, setSelected] = useState(0);
  const [badge, setBadge] = useState<(typeof BADGE_CYCLE)[number]>("verified");

  const cycleBadge = () =>
    setBadge((b) => BADGE_CYCLE[(BADGE_CYCLE.indexOf(b) + 1) % BADGE_CYCLE.length]!);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="truncate font-display text-xl sm:text-2xl">{t.today}</p>
        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          {t.visits}
        </span>
      </div>
      <ul className="space-y-1">
        {t.shifts.map((s, i) => (
          <li key={s.name}>
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              className={`flex min-h-11 w-full items-start gap-4 rounded-xl p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                selected === i ? "bg-secondary" : "hover:bg-muted"
              }`}
            >
              <span className="w-[4.5rem] shrink-0 pt-0.5 text-sm font-medium tabular-nums text-foreground/80">
                {s.time}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{s.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{s.detail}</span>
              </span>
            </button>
            {selected === i && badge !== "none" && (
              <button
                type="button"
                onClick={cycleBadge}
                className={`mb-2 ml-3 inline-flex min-h-11 items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:ml-[5.5rem] ${
                  badge === "verified"
                    ? "bg-primary/15 text-primary hover:bg-primary/25"
                    : "bg-attention-soft text-attention-foreground hover:opacity-80"
                }`}
              >
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {badge === "verified" ? t.verified : t.pending}
              </button>
            )}
            {selected === i && badge === "none" && (
              <button
                type="button"
                onClick={cycleBadge}
                className="mb-2 ml-3 inline-flex min-h-11 items-center rounded-full border border-dashed border-border px-3 py-1 text-xs text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:ml-[5.5rem]"
              >
                + {t.verified}
              </button>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-border/70 pt-4 text-xs text-muted-foreground">{t.demoHint}</p>
    </div>
  );
}

function WellbeingTrackerPreview({ lang }: { lang: Lang }) {
  const days = lang === "es" ? ["L", "M", "X", "J", "V", "S", "D"] : ["M", "T", "W", "T", "F", "S", "S"];
  const states = ["good", "good", "usual", "good", "attention", "none", "none"] as const;
  const [hovered, setHovered] = useState<number | null>(null);

  const labels: Record<(typeof states)[number], string> =
    lang === "es"
      ? { good: "Bien", usual: "Como siempre", attention: "Requiere atención", none: "Sin registro" }
      : { good: "Good", usual: "Usual", attention: "Needs attention", none: "No check-in" };

  const swatch: Record<(typeof states)[number], string> = {
    good: "bg-wb-good",
    usual: "bg-wb-usual",
    attention: "bg-wb-attention",
    none: "bg-wb-none",
  };

  return (
    <div className="mt-5 w-full min-w-0 overflow-hidden">
      <div className="rounded-xl border border-border/60 bg-secondary/40 p-3">
        <div className="flex items-center justify-between gap-1">
          {days.map((day, i) => {
            const state = states[i]!;
            return (
              <button
                key={day + i}
                type="button"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="flex min-w-0 flex-col items-center gap-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${day}: ${labels[state]}`}
              >
                <span
                  className={`h-7 w-7 rounded-lg transition-transform hover:scale-105 ${swatch[state]} ${
                    state === "none" ? "border border-border/70" : ""
                  }`}
                  aria-hidden="true"
                />
                <span className="text-[10px] font-medium text-muted-foreground">{day}</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-border/60 pt-3">
          {(["good", "usual", "attention", "none"] as const).map((s) => (
            <li key={s} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span
                className={`h-2 w-2 rounded-full ${swatch[s]} ${s === "none" ? "border border-border/70" : ""}`}
                aria-hidden="true"
              />
              {labels[s]}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {hovered !== null
          ? `${days[hovered]} — ${labels[states[hovered]!]}`
          : lang === "es"
            ? "Pasa el cursor por un día para ver su resumen"
            : "Hover a day for its quick summary"}
      </p>
    </div>
  );
}

function Logo() {
  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/15">
      <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
        <path d="M12 20.25S4.5 15.7 4.5 9.8a4.2 4.2 0 0 1 7.5-2.55A4.2 4.2 0 0 1 19.5 9.8c0 5.9-7.5 10.45-7.5 10.45Z" fill="currentColor" />
        <path d="M8.5 10.5h.01M15.5 10.5h.01" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}
