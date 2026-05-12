import { createFileRoute } from "@tanstack/react-router";
import { Bath, Scissors, PawPrint, Ear, MapPin, Phone, Clock, Heart, Instagram } from "lucide-react";
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.2-.66.2-1.02 0-.058 0-.144-.03-.215-.1-.172-2.434-1.246-2.633-1.46zm-2.32 7.45c-1.6 0-3.158-.43-4.53-1.245l-3.16.815.844-3.058a8.812 8.812 0 0 1-1.418-4.81c0-4.886 4.022-8.91 8.91-8.91 4.885 0 8.91 4.022 8.91 8.91-.003 4.885-4.025 8.9-8.91 8.9zm0-19.6C10.85 5.055 6 9.91 6 15.85c0 1.974.523 3.91 1.523 5.612L5.5 27l5.696-1.487a10.797 10.797 0 0 0 5.602 1.546c5.94 0 10.797-4.856 10.797-10.797S22.74 5.055 16.79 5.055z"/>
    </svg>
  );
}

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
                  <li>
                    <a
                      href="https://maps.app.goo.gl/R1761ukQLvDq37j97"
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                        <MapPin className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-semibold">Dirección</p>
                        <p className="text-sm text-muted-foreground">
                          Pasaje Manuel Cortez 2056, Las Lomas de San Ramón, Chile
                        </p>
                        <p className="mt-1 text-xs font-semibold text-primary">Ver en Google Maps →</p>
                      </div>
                    </a>
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
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card shadow-[var(--shadow-card)]">
                      <Instagram className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <a
                        href="https://instagram.com/queen.peludis"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        @queen.peludis
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
            <div className="mt-10 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <iframe
                title="Ubicación Queen Peludis en Google Maps"
                src="https://www.google.com/maps?q=Pasaje+Manuel+Cortez+2056,+Las+Lomas+de+San+Ramón,+Chile&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
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

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/56998050912"
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-soft)] transition hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
