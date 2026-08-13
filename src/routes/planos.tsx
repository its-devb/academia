import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — GL Fit Academia" },
      {
        name: "description",
        content:
          "Planos da GL Fit Academia: mensal a partir de R$ 149,90, anual com condições especiais e GL Bike por +R$ 19,90/mês. Aula experimental grátis.",
      },
      { property: "og:title", content: "Planos — GL Fit Academia" },
      {
        property: "og:description",
        content:
          "Planos flexíveis na GL Fit Academia. Mensal, anual e GL Bike. Aula experimental grátis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Planos,
});

const PLANOS = [
  {
    nome: "Mensal",
    destaque: false,
    preco: "149,90",
    periodo: "/mês",
    desc: "Plano recorrente mensal com acesso total à estrutura.",
    itens: [
      "Acesso à musculação e estrutura",
      "Horários completos (Seg–Dom)",
      "Sem fidelidade longa",
    ],
  },
  {
    nome: "Anual",
    destaque: true,
    preco: "119,90",
    periodo: "/mês",
    desc: "Melhor custo-benefício. Condições especiais em campanhas.",
    itens: [
      "Tudo do plano mensal",
      "Melhor valor por mês",
      "Prioridade em promoções",
      "Sem reajuste durante o plano",
    ],
  },
  {
    nome: "GL Bike",
    destaque: false,
    preco: "+19,90",
    periodo: "/mês",
    desc: "Adicione acesso ilimitado às aulas de ciclismo indoor.",
    itens: [
      "Aulas de pedal ilimitadas",
      "Válido em qualquer plano",
      "Instrutores especializados",
    ],
  },
];

function Planos() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-brand-grid">
        <div className="absolute inset-0 bg-gradient-brand-soft" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <span className="font-display text-lg tracking-widest text-brand-red">
            PLANOS
          </span>
          <h1 className="mt-2 max-w-3xl font-display text-6xl text-white md:text-7xl">
            Escolha como treinar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Planos flexíveis para todo perfil. Promoções recorrentes rolando no
            Instagram — acompanhe
            <a
              href="https://instagram.com/glfitacademia"
              target="_blank"
              rel="noreferrer"
              className="text-brand-yellow hover:underline"
            >
              {" "}
              @glfitacademia
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PLANOS.map((plano) => (
              <article
                key={plano.nome}
                className={`relative flex flex-col rounded-lg border p-8 ${
                  plano.destaque
                    ? "border-brand-red bg-card shadow-glow"
                    : "border-border/60 bg-card"
                }`}
              >
                {plano.destaque && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-red px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    Mais vantagem
                  </span>
                )}
                <h3 className="font-display text-4xl tracking-wide text-white">
                  {plano.nome}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{plano.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-6xl text-brand-yellow">
                    R$ {plano.preco}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {plano.periodo}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                  {plano.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 text-brand-red">✓</span>
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className={`mt-8 inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                    plano.destaque
                      ? "bg-brand-red text-white shadow-glow"
                      : "border border-brand-yellow/50 text-white hover:bg-brand-yellow/10"
                  }`}
                >
                  Quero esse plano
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border/60 bg-card p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-3xl tracking-wide text-white">
                  Aula experimental 100% grátis
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Agende na recepção ou pelo telefone. Sem compromisso e sem
                  custo.
                </p>
              </div>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md bg-brand-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-transform hover:-translate-y-0.5"
              >
                Agendar aula grátis
              </Link>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            * Valores estimados e podem variar conforme campanhas e promoções
            vigentes. Confira sempre as condições atualizadas no Instagram
            oficial.
          </p>
        </div>
      </section>
    </>
  );
}
