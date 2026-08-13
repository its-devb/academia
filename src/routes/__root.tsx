import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-brand-red">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente recarregar ou volte para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red/90"
          >
            Tentar de novo
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
            Início
          </Link>
        </div>
      </div>
    </div>
  );
}

const NAV = [
  { to: "/", label: "Início" },
  { to: "/planos", label: "Planos" },
  { to: "/contato", label: "Contato" },
] as const;

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl leading-none tracking-tight text-white">
            GL<span className="text-brand-red">FIT</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active ? "text-brand-yellow" : "text-foreground/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contato"
            className="inline-flex items-center rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Aula grátis
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold uppercase tracking-wide text-foreground/90"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-brand-red px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white"
          >
            Aula grátis
          </Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="font-display text-4xl leading-none tracking-tight text-white">
            GL<span className="text-brand-red">FIT</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Academia moderna no Jurunas, Belém-PA. Estrutura completa, equipamentos
            novos e energia para você treinar forte.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-brand-yellow">
            Endereço
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
            Av. Roberto Camelier, 334<br />
            Jurunas, Belém - PA<br />
            CEP 66033-420
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl tracking-wide text-brand-yellow">
            Horários
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-foreground/80">
            <li>Seg–Sex: 05h às 23h</li>
            <li>Sábados: 08h às 18h</li>
            <li>Domingos: 09h às 13h</li>
          </ul>
          <a
            href="https://instagram.com/glfitacademia"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red hover:text-brand-yellow"
          >
            @glfitacademia
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GL Fit Academia. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GL Fit Academia — Treine forte no Jurunas, Belém-PA" },
      {
        name: "description",
        content:
          "Academia moderna no Jurunas, Belém-PA: musculação, estacionamento com manobrista, carregador elétrico e espaço kids. Aula experimental grátis.",
      },
      { name: "author", content: "GL Fit Academia" },
      {
        property: "og:title",
        content: "GL Fit Academia — Treine forte no Jurunas, Belém-PA",
      },
      {
        property: "og:description",
        content:
          "Academia moderna em Belém-PA: musculação, estrutura completa e aula experimental grátis. Planos a partir de R$ 149,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
