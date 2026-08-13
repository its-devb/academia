import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import musculacaoImg from "@/assets/musculacao.jpg";
import bikeImg from "@/assets/bike.jpg";
import kidsImg from "@/assets/kids.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "GL Fit Academia — Treine forte no Jurunas, Belém-PA",
      },
      {
        name: "description",
        content:
          "Academia moderna no Jurunas, Belém-PA: musculação, estacionamento com manobrista, carregador elétrico e espaço kids. Aula experimental grátis. Planos a partir de R$ 149,90.",
      },
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
  }),
  component: Index,
});

const ESTRUTURA = [
  {
    img: musculacaoImg,
    title: "Musculação",
    desc: "Equipamentos novos de musculação e peso livre para todos os níveis.",
  },
  {
    img: bikeImg,
    title: "GL Bike",
    desc: "Aulas de ciclismo indoor (pedal) — adicione acesso ilimitado ao seu plano.",
  },
  {
    img: kidsImg,
    title: "Espaço Kids",
    desc: "Treine tranquilo enquanto as crianças ficam no espaço kids dedicado.",
  },
];

const COMODIDADES = [
  "Estacionamento com manobrista",
  "Carregador para carros elétricos",
  "Equipamentos novos",
  "Espaço kids",
  "Aula experimental grátis",
  "Planos flexíveis",
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Atleta treinando na GL Fit Academia"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-yellow">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            Jurunas · Belém-PA
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl">
            TREINE FORTE.
            <br />
            <span className="text-gradient-brand">VIVA LEVE.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            Estrutura moderna, equipamentos novos e comodidades que você não
            encontra em qualquer lugar. Da musculação ao GL Bike — tudo em um só
            lugar.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center rounded-md bg-brand-red px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Agende sua aula grátis
            </Link>
            <Link
              to="/planos"
              className="inline-flex items-center rounded-md border border-brand-yellow/50 px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-yellow/10"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      {/* FAIXA DESTAQUE */}
      <section className="border-y border-border/60 bg-brand-red">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-4 md:px-8">
          {COMODIDADES.map((c) => (
            <span
              key={c}
              className="text-sm font-semibold uppercase tracking-wide text-white"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="section-pad bg-brand-grid">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl">
            <span className="font-display text-lg tracking-widest text-brand-red">
              ESTRUTURA
            </span>
            <h2 className="mt-2 font-display text-5xl text-white md:text-6xl">
              Tudo pensado para o seu treino
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Da musculação às comodidades para a família — você treina com
              conforto e segurança.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ESTRUTURA.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-lg border border-border/60 bg-card shadow-card"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HORÁRIOS + PLANOS TEASER */}
      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
          <div>
            <span className="font-display text-lg tracking-widest text-brand-yellow">
              HORÁRIOS
            </span>
            <h2 className="mt-2 font-display text-5xl text-white md:text-6xl">
              Aberto quando você precisa
            </h2>
            <div className="mt-8 space-y-3">
              {[
                ["Segunda a Sexta", "05h às 23h"],
                ["Sábados", "08h às 18h"],
                ["Domingos", "09h às 13h"],
              ].map(([d, h]) => (
                <div
                  key={d}
                  className="flex items-center justify-between rounded-md border border-border/60 bg-card px-5 py-4"
                >
                  <span className="font-semibold text-foreground/90">{d}</span>
                  <span className="font-display text-2xl tracking-wide text-brand-yellow">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-lg border border-brand-red/40 bg-gradient-brand-soft p-8 md:p-10">
            <span className="font-display text-lg tracking-widest text-brand-red">
              PLANOS
            </span>
            <h2 className="mt-2 font-display text-5xl text-white md:text-6xl">
              A partir de R$ 149,90
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mensal, anual ou com GL Bike incluso. Promoções recorrentes
              rolando no nosso Instagram.
            </p>
            <Link
              to="/planos"
              className="mt-7 inline-flex w-fit items-center rounded-md bg-brand-red px-7 py-3.5 text-base font-semibold uppercase tracking-wide text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Ver todos os planos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA AULA EXPERIMENTAL */}
      <section className="relative isolate overflow-hidden border-t border-border/60">
        <div className="absolute inset-0 bg-gradient-brand opacity-90" />
        <div className="absolute inset-0 bg-brand-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
          <h2 className="font-display text-5xl text-background md:text-7xl">
            PRIMEIRA AULA GRÁTIS
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-background/80">
            Agende sua aula experimental 100% gratuita na recepção ou pelo
            telefone. Sem compromisso.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center rounded-md bg-background px-8 py-4 text-base font-bold uppercase tracking-wide text-brand-red transition-transform hover:-translate-y-0.5"
          >
            Agendar agora
          </Link>
        </div>
      </section>
    </>
  );
}
