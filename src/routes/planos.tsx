import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — GL Fit Academia" },
      {
        name: "description",
        content:
          "Planos GL Master, GL Plus e GL Start da GL Fit Academia. Aula experimental grátis.",
      },
      { property: "og:title", content: "Planos — GL Fit Academia" },
      {
        property: "og:description",
        content: "Conheça os planos da GL Fit Academia e seus benefícios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Planos,
});

const PLANOS = [
  {
    nome: "GL Master",
    tipo: "Semestral · Parcelado em 6x",
    destaque: true,
    preco: "139,90",
    periodo: "por parcela",
    total: "R$ 839,40 em até 6x",
    duracao: "Duração: 6 meses",
    itens: [
      "Sem taxa de adesão",
      "Sem taxa de manutenção",
      "Área de musculação e cardio",
      "Espaço kids grátis",
      "Atendimento premium",
      "GL Coletivas",
      "GL Lutas",
      "GL Bike",
      "GL Training",
      "2h de estacionamento com carregador para carro elétrico grátis",
      "Prescrição de treino grátis",
      "Renovação de treino grátis",
      "Cadeira de massagem",
      "Água saborizada e gaseificada todo dia",
      "Café suave todo dia",
      "Bioimpedância grátis",
      "10 convites para treino no mês",
      "Aplicativo grátis",
    ],
  },
  {
    nome: "GL Plus",
    tipo: "Recorrente",
    destaque: false,
    preco: "149,90",
    periodo: "por mês",
    total: undefined,
    duracao: "Recorrência mensal",
    itens: [
      "Sem taxa de adesão",
      "Sem taxa de manutenção",
      "Área de musculação e cardio",
      "Espaço kids grátis",
      "Atendimento premium",
      "GL Coletivas",
      "GL Lutas",
      "GL Training",
      "1h30 de estacionamento com carregador para carro elétrico grátis",
      "Prescrição de treino grátis",
      "Renovação de treino grátis",
      "5 convites para treino no mês",
      "Aplicativo grátis",
    ],
  },
  {
    nome: "GL Start",
    tipo: "Recorrente",
    destaque: false,
    preco: "169,90",
    periodo: "por mês",
    total: undefined,
    duracao: "Recorrência mensal",
    itens: [
      "Sem taxa de adesão",
      "Sem taxa de manutenção",
      "Atendimento premium",
      "Área de musculação e cardio",
      "GL Coletivas",
      "GL Lutas",
      "GL Training",
      "Espaço kids grátis",
      "1h30 de estacionamento com carregador para carro elétrico grátis",
      "Prescrição de treino grátis",
      "Renovação de treino grátis",
      "3 convites para treino no mês",
      "Aplicativo grátis",
    ],
  },
];

function Planos() {
  const [planosAbertos, setPlanosAbertos] = useState<string[]>([]);

  const alternarDetalhes = (nome: string) => {
    setPlanosAbertos((abertos) =>
      abertos.includes(nome) ? abertos.filter((plano) => plano !== nome) : [...abertos, nome],
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-brand-grid">
        <div className="absolute inset-0 bg-gradient-brand-soft" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <span className="font-display text-lg tracking-widest text-brand-red">PLANOS</span>
          <h1 className="mt-2 max-w-3xl font-display text-6xl text-white md:text-7xl">
            Escolha como treinar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Planos pensados para você treinar com toda a estrutura da GL Fit.
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PLANOS.map((plano) => {
              const detalhesAbertos = planosAbertos.includes(plano.nome);

              return (
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
                      Mais vantajoso
                    </span>
                  )}
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    {plano.tipo}
                  </p>
                  <h3 className="mt-2 font-display text-4xl tracking-wide text-white">
                    {plano.nome}
                  </h3>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-xl font-semibold text-muted-foreground">R$</span>
                    <span className="font-display text-6xl text-brand-yellow">{plano.preco}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {plano.periodo}
                  </p>
                  {plano.total && <p className="mt-2 text-sm text-foreground/85">{plano.total}</p>}
                  <p className="mt-5 border-t border-border/60 pt-5 text-sm font-semibold text-foreground/85">
                    {plano.duracao}
                  </p>

                  <button
                    type="button"
                    aria-expanded={detalhesAbertos}
                    aria-controls={`detalhes-${plano.nome}`}
                    onClick={() => alternarDetalhes(plano.nome)}
                    className="mt-5 inline-flex items-center justify-between border-y border-border/60 py-4 text-left text-sm font-bold uppercase tracking-wide text-brand-yellow hover:text-white"
                  >
                    {detalhesAbertos ? "Ver menos" : "Ver detalhes"}
                    <span aria-hidden="true" className="text-lg">
                      {detalhesAbertos ? "↑" : "↓"}
                    </span>
                  </button>

                  {detalhesAbertos && (
                    <ul id={`detalhes-${plano.nome}`} className="mt-5 space-y-3">
                      {plano.itens.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span aria-hidden="true" className="mt-0.5 text-brand-red">
                            ✓
                          </span>
                          <span className="text-foreground/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to="/contato"
                    className={`mt-8 inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                      plano.destaque
                        ? "bg-brand-red text-white shadow-glow"
                        : "border border-brand-yellow/50 text-white hover:bg-brand-yellow/10"
                    }`}
                  >
                    Eu quero
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-lg border border-border/60 bg-card p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-3xl tracking-wide text-white">
                  Aula experimental 100% grátis
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Agende na recepção ou pelo telefone. Sem compromisso e sem custo.
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
            * Valores e condições sujeitos a alteração. Consulte a academia para confirmar as
            condições vigentes.
          </p>
        </div>
      </section>
    </>
  );
}
