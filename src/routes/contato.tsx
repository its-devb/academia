import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Agendamento — GL Fit Academia" },
      {
        name: "description",
        content:
          "Agende sua aula experimental grátis na GL Fit Academia. Av. Roberto Camelier, 334 — Jurunas, Belém-PA. Telefone e horários de funcionamento.",
      },
      { property: "og:title", content: "Contato — GL Fit Academia" },
      {
        property: "og:description",
        content:
          "Agende sua aula grátis na GL Fit Academia no Jurunas, Belém-PA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [enviado, setEnviado] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-brand-grid">
        <div className="absolute inset-0 bg-gradient-brand-soft" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <span className="font-display text-lg tracking-widest text-brand-yellow">
            CONTATO
          </span>
          <h1 className="mt-2 max-w-3xl font-display text-6xl text-white md:text-7xl">
            Agende sua aula grátis
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Preencha o formulário ou venha pessoalmente. A primeira aula é por
            nossa conta.
          </p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
          {/* INFO + MAPA */}
          <div>
            <div className="space-y-6">
              <InfoBlock titulo="Endereço">
                Av. Roberto Camelier, 334<br />
                Jurunas, Belém - PA<br />
                CEP 66033-420
              </InfoBlock>

              <InfoBlock titulo="Horários">
                <ul className="space-y-1">
                  <li>Seg–Sex: 05h às 23h</li>
                  <li>Sábados: 08h às 18h</li>
                  <li>Domingos: 09h às 13h</li>
                </ul>
              </InfoBlock>

              <InfoBlock titulo="Comodidades">
                <ul className="space-y-1">
                  <li>Estacionamento com manobrista</li>
                  <li>Carregador para carros elétricos</li>
                  <li>Espaço kids</li>
                </ul>
              </InfoBlock>

              <a
                href="https://instagram.com/glfitacademia"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red hover:text-brand-yellow"
              >
                @glfitacademia no Instagram
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-border/60">
              <iframe
                title="Localização GL Fit Academia"
                src="https://www.google.com/maps?q=Av.+Roberto+Camelier,+334,+Jurunas,+Bel%C3%A9m+-+PA&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-lg border border-border/60 bg-card p-6 shadow-card md:p-8">
            <h2 className="font-display text-4xl tracking-wide text-white">
              Agendar aula experimental
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              É rápido. Entramos em contato para confirmar.
            </p>

            {enviado ? (
              <div className="mt-8 rounded-md border border-brand-yellow/40 bg-brand-yellow/10 p-6 text-center">
                <p className="font-display text-3xl tracking-wide text-brand-yellow">
                  Pedido enviado!
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Em breve nossa equipe entra em contato para confirmar sua aula
                  experimental gratuita.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEnviado(true);
                }}
              >
                <Field label="Nome completo">
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-red focus:outline-none"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Telefone / WhatsApp">
                    <input
                      required
                      type="tel"
                      placeholder="(91) 90000-0000"
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-red focus:outline-none"
                    />
                  </Field>
                  <Field label="Plano de interesse">
                    <select
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:border-brand-red focus:outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      <option>Mensal</option>
                      <option>Anual</option>
                      <option>GL Bike</option>
                      <option>Só a aula grátis</option>
                    </select>
                  </Field>
                </div>
                <Field label="Mensagem (opcional)">
                  <textarea
                    rows={4}
                    placeholder="Horário preferido, dúvidas..."
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-brand-red focus:outline-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Agendar aula grátis
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl tracking-wide text-brand-yellow">
        {titulo}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-foreground/80">
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
