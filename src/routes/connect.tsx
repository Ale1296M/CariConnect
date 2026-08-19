import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
  head: () => ({
    meta: [
      { title: "Con Cariño PR Connect — sign in to your workspace" },
      {
        name: "description",
        content:
          "Con Cariño PR Connect brings your workplace and care community into one calm, secure place to coordinate, communicate, and keep each other close.",
      },
      { property: "og:title", content: "Con Cariño PR Connect" },
      {
        property: "og:description",
        content: "One calm, secure doorway into your Con Cariño PR care workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function ConnectPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-8 md:py-5">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <Logo />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-lg tracking-tight sm:text-xl">
                Con Cariño
              </span>
              <span className="block text-xs italic tracking-wide text-muted-foreground">
                connect
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="min-h-11 rounded-full px-4">
              <Link to="/">Back to site</Link>
            </Button>
            <Button asChild className="min-h-11 rounded-full px-5">
              <Link to="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-8 md:py-20">
          {/* Left — message + actions */}
          <div className="min-w-0">
            <p className="mb-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-attention" />
              A better way to stay connected
            </p>
            <h1 className="font-display text-5xl leading-[0.98] tracking-tight text-primary sm:text-6xl md:text-7xl">
              Care works better{" "}
              <em className="italic text-foreground">together.</em>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Con Cariño PR connect brings your workplace and care community into one calm, secure
              place to coordinate, communicate, and keep each other close.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="min-h-13 rounded-full px-7 text-base">
                <Link to="/signup">
                  Create your account
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-13 rounded-full bg-card px-7 text-base"
              >
                <Link to="/login">
                  <Lock className="h-4 w-4" aria-hidden="true" />
                  Sign in to your workplace
                </Link>
              </Button>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Already connected through Con Cariño PR? Your workplace may already be waiting for you.
            </p>
          </div>

          {/* Right — workspace preview */}
          <WorkspacePreview />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground md:px-8">
          <p>© {new Date().getFullYear()} Con Cariño PR</p>
          <p>Connect · workspace access only</p>
        </div>
      </footer>
    </div>
  );
}

function WorkspacePreview() {
  return (
    <div className="w-full rounded-3xl border border-border/70 bg-card p-6 shadow-[0_20px_60px_-30px_oklch(0.24_0.035_155_/_0.35)] md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Connect workspace
          </p>
          <h2 className="mt-2 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
            A clearer view of care
          </h2>
        </div>
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary"
          aria-hidden="true"
        >
          <Heart className="h-5 w-5 fill-current" />
        </span>
      </div>

      <div className="mt-5 border-t border-border/70" />

      {/* Today's coordination */}
      <div className="mt-5 rounded-2xl bg-secondary/70 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-medium text-secondary-foreground">Today&apos;s coordination</p>
          <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Up to date
          </span>
        </div>
        <p className="mt-2 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
          Everyone knows what&apos;s next.
        </p>
        <div
          className="mt-4 h-2 w-full overflow-hidden rounded-full bg-card"
          role="progressbar"
          aria-valuenow={4}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-label="4 of 5 care tasks confirmed"
        >
          <span className="block h-full w-4/5 rounded-full bg-primary" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">4 of 5 care tasks confirmed</p>
      </div>

      {/* Two sub-cards */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Care team
          </p>
          <p className="mt-2 font-display text-xl tracking-tight">8 members</p>
          <div className="mt-3 flex items-center">
            <Avatar className="bg-gold text-gold-foreground" initials="MR" />
            <Avatar className="-ml-2 bg-attention text-primary-foreground" initials="SM" />
            <Avatar className="-ml-2 bg-primary text-primary-foreground text-[11px]" initials="+6" />
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Updates
          </p>
          <p className="mt-2 font-display text-xl tracking-tight">All shared</p>
          <p className="mt-3 text-sm text-muted-foreground">Last update 2h ago</p>
        </div>
      </div>

      <p className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground/80">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
        A private space for your workplace
      </p>
    </div>
  );
}

function Avatar({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <span
      className={`grid size-9 place-items-center rounded-full border-2 border-card text-xs font-semibold ${className}`}
      aria-hidden="true"
    >
      {initials}
    </span>
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
