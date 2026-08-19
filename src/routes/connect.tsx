import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
  head: () => ({
    meta: [
      { title: "Con Cariño PR Connect — sign in to your workspace" },
      {
        name: "description",
        content:
          "The single doorway into the Con Cariño PR workspace. Admins, caregivers and family members sign in here.",
      },
      { property: "og:title", content: "Con Cariño PR Connect" },
      {
        property: "og:description",
        content: "One doorway into the Con Cariño PR caregiving workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const DOORS = [
  {
    role: "Admin",
    icon: ShieldCheck,
    body: "Manage your agency's team, clients and care coverage.",
  },
  {
    role: "Caregiver",
    icon: HeartHandshake,
    body: "See your shifts, log visits and update care plans.",
  },
  {
    role: "Family member",
    icon: Users,
    body: "Follow visit notes, wellbeing check-ins and messages.",
  },
] as const;

function ConnectPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg tracking-tight text-muted-foreground sm:text-xl">
              Con Cariño PR <span className="text-foreground">Connect</span>
            </span>
          </Link>
          <Link
            to="/"
            className="min-h-11 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 md:px-8 md:py-20">
          <p className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Workspace access
          </p>
          <h1 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            One door <em className="italic text-primary">in</em>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Connect is the single, secure entrance to your Con Cariño PR workspace. Sign in below
            — we'll take you straight to the tools built for your role.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {DOORS.map(({ role, icon: Icon, body }) => (
              <div
                key={role}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 type-subhead">{role}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <Button asChild variant="outline" className="mt-5 min-h-11 w-full rounded-full">
                  <Link to="/login">
                    Sign in
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>New to Con Cariño PR?</span>
            <Link to="/signup" className="font-medium text-primary underline-offset-4 hover:underline">
              Create your workspace
            </Link>
            <span aria-hidden="true">·</span>
            <span>Not yet assigned a role? Your agency admin sets that up after sign in.</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground md:px-8">
          <p>© {new Date().getFullYear()} Con Cariño PR</p>
          <p>Connect · workspace access only</p>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z"
          fill="currentColor"
          opacity=".9"
        />
        <circle cx="12" cy="10" r="2.2" fill="oklch(0.78 0.14 85)" />
      </svg>
    </span>
  );
}
