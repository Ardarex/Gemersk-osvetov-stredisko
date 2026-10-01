import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Menu,
  Search,
  Sparkles,
  Telescope,
} from "lucide-react";

const events = [
  {
    date: "16 SEP",
    type: "Festival",
    title: "Medzinárodný festival paličkovanej čipky",
    place: "Dom tradičnej kultúry Gemera",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    date: "08 SEP",
    type: "Kino Apollo",
    title: "GEMERFILM 50",
    place: "Kino Apollo · Rožňava",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85",
  },
  {
    date: "27 JUN",
    type: "Hvezdáreň",
    title: "MarsonautiSK — prvá vesmírna misia",
    place: "Hvezdáreň Rožňava",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=85",
  },
];

const places = [
  {
    number: "01",
    title: "Dom tradičnej kultúry Gemera",
    subtitle: "Remeslá · folklór · výstavy",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Hvezdáreň",
    subtitle: "Vesmír · pozorovania · školy",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Kino Apollo",
    subtitle: "Film · program · letné kino",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "RINK",
    subtitle: "Remeslá · tvorcovia · región",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="nav">
        <div className="brand">
          <div className="gos-logo">
            GOS
            <span>.</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#program">Program</a>
          <a href="#miesta">Miesta</a>
          <a href="#novinky">Novinky</a>
          <a href="#o-gos">O GOS</a>
        </nav>

        <div className="nav-right">
          <button aria-label="Vyhľadávanie">
            <Search size={19} />
          </button>

          <div className="ksk-logo">
            <strong>KSK</strong>
            <span>KOŠICKÝ SAMOSPRÁVNY KRAJ</span>
          </div>

          <button className="menu-btn" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <Image
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90"
          alt="Gemer"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            KULTÚRA · GEMER · ROŽŇAVA
          </div>

          <h1>
            Miesto, kde
            <br />
            <em>kultúra žije.</em>
          </h1>

          <p>
            Objavte príbehy Gemera, ľudí, tradícií, umenia a vesmíru
            pod jednou strechou.
          </p>

          <div className="hero-buttons">
            <a className="button light" href="#program">
              Pozrieť program
              <ArrowUpRight size={18} />
            </a>

            <a className="text-link" href="#miesta">
              Objaviť GOS
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / 04</span>
          <span className="line" />
          <span>Gemerské osvetové stredisko</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="intro" id="o-gos">
        <div className="section-kicker">01 — O NÁS</div>

        <div>
          <h2>
            Kultúra, ktorá
            <br />
            <em>spája generácie.</em>
          </h2>

          <p>
            GOS je kultúrno-osvetové stredisko pre región Rožňavy.
            Prepájame tradičnú kultúru s novými nápadmi, vzdelávaním,
            umením a zážitkami pre verejnosť aj školy.
          </p>

          <a className="arrow-link" href="#">
            Viac o GOS
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* PLACES */}
      <section className="places" id="miesta">
        <div className="section-head">
          <div>
            <div className="section-kicker">02 — OBJAVUJTE</div>

            <h2>
              Jedno miesto.
              <br />
              <em>Štyri svety.</em>
            </h2>
          </div>

          <p>
            Od tradičných remesiel až po vzdialené galaxie.
            Vyberte si, kam sa dnes vydáte.
          </p>
        </div>

        <div className="place-grid">
          {places.map((place) => (
            <a className="place-card" href="#" key={place.title}>
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="card-image"
              />

              <div className="card-shade" />

              <span className="number">{place.number}</span>

              <div className="place-info">
                <span>{place.subtitle}</span>
                <h3>{place.title}</h3>
              </div>

              <span className="circle-arrow">
                <ArrowUpRight size={19} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* PROGRAM */}
      <section className="program" id="program">
        <div className="section-head">
          <div>
            <div className="section-kicker">03 — ČO SA DEJE</div>

            <h2>
              Najbližšie
              <br />
              <em>podujatia.</em>
            </h2>
          </div>

          <a className="arrow-link" href="#">
            Celý program
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="events">
          {events.map((event) => (
            <article className="event" key={event.title}>
              <div className="event-image-wrap">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="event-image"
                />

                <span className="event-date">
                  <CalendarDays size={13} />
                  {event.date}
                </span>
              </div>

              <div className="event-copy">
                <span className="tag">{event.type}</span>

                <h3>{event.title}</h3>

                <p>{event.place}</p>

                <ArrowUpRight
                  size={19}
                  className="event-arrow"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HVEZDÁREŇ */}
      <section className="cosmic">
        <div className="cosmic-image">
          <Image
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1800&q=90"
            alt="Vesmír"
            fill
          />
        </div>

        <div className="cosmic-copy">
          <div className="section-kicker">04 — HVEZDÁREŇ</div>

          <Telescope size={34} />

          <h2>
            Pozerajte
            <br />
            <em>ďalej.</em>
          </h2>

          <p>
            Objavte vesmír, pozorovania a programy Hvezdárne
            v Rožňave pre verejnosť aj školy.
          </p>

          <a className="button outline" href="#">
            Objaviť hvezdáreň
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* NEWS */}
      <section className="news" id="novinky">
        <div className="section-head">
          <div>
            <div className="section-kicker">05 — NOVINKY</div>

            <h2>
              Čo je <em>nové.</em>
            </h2>
          </div>

          <a className="arrow-link" href="#">
            Všetky novinky
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="news-list">
          {[
            "Medzinárodný festival paličkovanej čipky",
            "Krúžok tradičného tvorenia",
            "GEMERFILM 50",
          ].map((title, index) => (
            <a className="news-row" href="#" key={title}>
              <span>0{index + 1}</span>

              <div>
                <small>
                  {index === 0
                    ? "16. september 2026"
                    : index === 1
                    ? "10. september 2026"
                    : "08. september 2026"}
                </small>

                <h3>{title}</h3>
              </div>

              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <div className="gos-logo">
                GOS<span>.</span>
              </div>

              <div className="ksk-footer">
                <strong>KSK</strong>
                <span>KOŠICKÝ SAMOSPRÁVNY KRAJ</span>
              </div>
            </div>

            <h2>
              Vidíme sa
              <br />
              <em>v Gemeri.</em>
            </h2>
          </div>

          <div className="footer-links">
            <a href="#">Program</a>
            <a href="#">Miesta</a>
            <a href="#">Novinky</a>
            <a href="#">Kontakt</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GOS Rožňava</span>
          <span>Betliarska 8 · Rožňava</span>
          <span>GOS · KSK</span>
        </div>
      </footer>
    </main>
  );
}
