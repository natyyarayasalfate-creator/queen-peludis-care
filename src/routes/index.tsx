import { createFileRoute } from "@tanstack/react-router";
import { Bath, Scissors, PawPrint, Ear, MapPin, Phone, Clock, Heart } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Queen Peludis — Peluquería Canina en Las Lomas de San Ramón" },
      {
        name: "description",
        content:
          "Peluquería canina en Las Lomas de San Ramón. Baño, corte de pelo, uñas y limpieza de oídos con cariño y atención personalizada.",
      },
      { property: "og:title", content: "Queen Peludis — Peluquería Canina" },
      {
        property: "og:description",
        content: "Cuidamos a tu mascota con amor, higiene y estilo.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,500&family=Nunito:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

const services = [
  { icon: Bath, title: "Baño canino", desc: "Productos suaves y agua templada para una experiencia relajante." },
  { icon: Scissors, title: "Corte de pelo", desc: "Cortes a medida según raza, estilo y temporada." },
  { icon: PawPrint, title: "Corte de uñas", desc: "Limado preciso y seguro para sus patitas." },
  { icon: Ear, title: "Limpieza de oídos", desc: "Higiene delicada para prevenir molestias." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <Heart className="h-5 w-5 fill-primary text-primary" />
            Queen Peludis
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <PawPrint className="h-3.5 w-3.5" /> Peluquería Canina
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
              Queen <em className="italic text-primary">Peludis</em>
            </h1>
            <p className="mt-6 max-w-md font-display text-xl italic text-muted-foreground md:text-2xl">
              "Cuidamos a tu mascota con amor, higiene y estilo."
            </p>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Servicios pensados para el bienestar y comodidad de tu peludito. Atención personalizada para que cada mascota se sienta tranquila y feliz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:translate-y-[-1px]"
              >
                Ver servicios
              </a>
              <a
                href="tel:+56998050912"
                className="rounded-full border border-border bg-card px-7 py-3 font-semibold text-foreground transition hover:bg-secondary"
              >
                Llamar ahora
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/15 blur-2xl" />
            <img
              src={heroDog}
              alt="Perrito peluqueado feliz con lazo rosa"
              width={1280}
              height={1280}
              className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Servicios</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Atención con cariño y cuidado</h2>
            <p className="mt-4 text-muted-foreground">
              Para todo tipo de perritos. Trabajamos con dedicación para que tu peludito quede impecable.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Hours */}
      <section id="contacto" className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="overflow-hidden rounded-[2rem] p-10 md:p-14"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Visítanos</p>
                <h2 className="mt-3 text-4xl md:text-5xl">Ven a conocernos</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Te esperamos para darle a tu mascota la experiencia que se merece.
                </p>
                <ul className="mt-8 space-y-5">
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card shadow-[var(--shadow-card)]">
                      <MapPin className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-sm text-muted-foreground">
                        Pasaje Manuel Cortez 2056, Las Lomas de San Ramón, Chile
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card shadow-[var(--shadow-card)]">
                      <Phone className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <a
                        href="tel:+56998050912"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +56 9 9805 0912
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl">Horarios</h3>
                </div>
                <div className="mt-6 divide-y divide-border">
                  <div className="flex items-center justify-between py-4">
                    <span className="font-semibold">Lunes a Sábado</span>
                    <span className="text-muted-foreground">10:00 — 19:00</span>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <span className="font-semibold">Domingo</span>
                    <span className="text-muted-foreground">Cerrado</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/56998050912"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
                >
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <p className="flex items-center gap-2">
            <Heart className="h-4 w-4 fill-primary text-primary" />
            Queen Peludis · Peluquería Canina
          </p>
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
