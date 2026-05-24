/* Section components for Fadly's portfolio */
const { useState, useEffect, useRef, useMemo } = React;

/* ---------- Small primitives ---------- */

function Reveal({ children, delay = 0, as: Tag = "div", className = "", style }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Immediate visibility check (handles already-in-view at mount)
    const initialRect = el.getBoundingClientRect();
    if (initialRect.top < window.innerHeight && initialRect.bottom > 0) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.unobserve(el);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

function SectionRail() {
  const items = [
    { id: "top", n: "01", label: "Hero" },
    { id: "about", n: "02", label: "About" },
    { id: "experience", n: "03", label: "Experience" },
    { id: "work", n: "04", label: "Work" },
    { id: "skills", n: "05", label: "Skills" },
    { id: "recognition", n: "06", label: "Recognition" },
    { id: "education", n: "07", label: "Education" },
    { id: "contact", n: "08", label: "Contact" },
  ];
  const [active, setActive] = useState("top");

  useEffect(() => {
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="rail" aria-label="Section index">
      <div className="rail__line" />
      <ul className="rail__list">
        {items.map(i => (
          <li key={i.id} className={`rail__item ${active === i.id ? "is-active" : ""}`}>
            <a href={`#${i.id}`}>
              <span className="rail__n">§ {i.n}</span>
              <span className="rail__label">{i.label}</span>
              <span className="rail__tick" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function SectionHeader({ index, kicker, title, lede }) {
  return (
    <header className="sec-head">
      <div className="sec-head__meta">
        <span className="sec-head__index">{index}</span>
        <span className="sec-head__kicker">{kicker}</span>
      </div>
      <h2 className="sec-head__title">{title}</h2>
      {lede && <p className="sec-head__lede">{lede}</p>}
    </header>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

/* ---------- Top nav ---------- */

function TopNav({ tweaksAvailable }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const hasCv = Boolean(PROFILE.cvUrl);
  const menuId = "site-navigation";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map(n => n.id);
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="Fadly Ahmad Firdausy">
          <span className="nav__brand-mark">FA</span>
          <span className="nav__brand-text">
            <span className="nav__brand-name">Fadly Ahmad Firdausy</span>
            <span className="nav__brand-sub">Presales · Product · IoT</span>
          </span>
        </a>
        <nav id={menuId} className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {NAV.map(n => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >{n.label}</a>
          ))}
          {hasCv && <a href={PROFILE.cvUrl} className="nav__cta" onClick={() => setOpen(false)}>Download CV ↓</a>}
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls={menuId}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const hasCv = Boolean(PROFILE.cvUrl);
  return (
    <section className="hero" id="top">
      {/* Layered background — topographic + watermark glyph + grid */}
      <div className="hero__bg" aria-hidden="true">
        <svg className="hero__bg-topo" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <radialGradient id="spot" cx="22%" cy="0%" r="70%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
              <stop offset="60%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#grid)" opacity="0.55" />
          {/* Topographic contour lines */}
          <g stroke="currentColor" fill="none" strokeWidth="1" opacity="0.35">
            <path d="M-100 720 Q 200 640 400 680 T 900 660 T 1700 700" />
            <path d="M-100 760 Q 240 700 460 730 T 940 710 T 1700 740" />
            <path d="M-100 800 Q 280 760 520 780 T 980 760 T 1700 780" />
            <path d="M-100 840 Q 320 820 580 830 T 1020 810 T 1700 820" />
          </g>
          <rect width="1600" height="900" fill="url(#spot)" />
        </svg>
        <div className="hero__bg-glyph" aria-hidden="true">F</div>
      </div>

      <div className="container">
        <div className="hero__top">
          <Reveal as="div" className="hero__eyebrow">
            <span className="dot" aria-hidden="true" />
            <span>Available · Jakarta, ID</span>
          </Reveal>
          <Reveal delay={40} as="div" className="hero__id">
            <span>§ 01</span><span className="hero__id-sep">/</span><span>Hero</span><span className="hero__id-sep">·</span><span>FAF.001</span>
          </Reveal>
        </div>

        <div className="hero__name-block">
          <Reveal delay={60}>
            <div className="hero__name-row hero__name-row--1">
              <span className="hero__num">01</span>
              <span className="hero__name-sans">Fadly</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="hero__name-row hero__name-row--2">
              <span className="hero__name-sans">Ahmad</span>
              <span className="hero__name-amp">&amp;</span>
              <span className="hero__name-italic">Firdausy.</span>
            </div>
          </Reveal>
        </div>

        <div className="hero__below">
          <div className="hero__below-left">
            <Reveal delay={220}>
              <p className="hero__role">
                <span>B2B Presales Engineer</span><span className="hero__role-sep" />
                <span>Product Manager</span><span className="hero__role-sep" />
                <span>IoT Solutions</span>
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="hero__lede">
                {PROFILE.valueProp}
              </p>
            </Reveal>
            <Reveal delay={340} className="hero__ctas">
              <a href="#work" className="btn btn--primary">View Projects <span aria-hidden="true">→</span></a>
              {hasCv && <a href={PROFILE.cvUrl} className="btn btn--ghost">Download CV <span aria-hidden="true">↓</span></a>}
              <a href="#contact" className="btn btn--text">Contact Me <span aria-hidden="true">→</span></a>
            </Reveal>
          </div>

          <Reveal delay={400} className="hero__card-wrap">
            <div className="hero__card">
              <div className="hero__card-head">
                <span className="hero__card-tag">Positioning</span>
                <span className="hero__card-id">— Profile</span>
              </div>
              <p className="hero__card-quote">
                <em>“{PROFILE.positioning}”</em>
              </p>
              <div className="hero__card-meta">
                <div>
                  <div className="kv-k">Based</div>
                  <div className="kv-v">Jakarta, Indonesia</div>
                </div>
                <div>
                  <div className="kv-k">Education</div>
                  <div className="kv-v">B.Eng. Computer Eng., UI · Cum Laude</div>
                </div>
                <div>
                  <div className="kv-k">Currently</div>
                  <div className="kv-v">B2B Presales · PT Indosat Tbk</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container hero__metrics-wrap">
        <Reveal delay={460}>
          <div className="metrics">
            {METRICS.map((m, i) => (
              <div className="metric" key={i}>
                <span className="metric__idx">0{i + 1}</span>
                <div className="metric__value">{m.value}</div>
                <div className="metric__label">{m.label}</div>
                <div className="metric__note">{m.note}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader
          index="02"
          kicker="About"
          title={<>Technical fluency, <em className="italic">commercial</em> sharpness.</>}
        />
        <div className="about__grid">
          <Reveal className="about__body">
            <p className="about__lead">
              I work at the seam where engineering meets the customer — designing solutions that are technically credible
              and commercially defensible. My background blends three muscles most enterprises hire separately: presales
              architecture, product management, and IoT delivery.
            </p>
            <p>
              At <strong>Indosat</strong> I assess and shape enterprise ICT opportunities — running discovery, drafting
              architectures, owning proposals, and standing up in front of client architects to defend the design. Before
              that, at <strong>Iotera</strong>, I managed 13+ concurrent IoT projects for clients like Pegadaian,
              Pertamina, BPODT, and KPP Mining (Astra) — handling vendors, field ops, and governance reviews without
              dropping a milestone.
            </p>
            <p>
              Earlier roles at <strong>Erajaya</strong>, <strong>Bank Aladin</strong>, and <strong>Tower Bersama</strong> built
              the product and PMO half of my toolkit — PRDs, wireframes, sprint planning, data work in Metabase, and one
              internal security tool I shipped end-to-end during an internship.
            </p>
            <p>
              I'm equally comfortable with sales, product, engineering, vendors, and enterprise clients in the same room —
              which, more often than not, is exactly where deals get unstuck.
            </p>
          </Reveal>

          <Reveal delay={120} className="about__side">
            <div className="about__card">
              <div className="about__card-head">What I do best</div>
              <ul className="about__list">
                <li><span className="num">01</span> Translate ambiguous business asks into solution architectures and BOQs.</li>
                <li><span className="num">02</span> Run delivery on IoT and ICT projects without dropping margin or dates.</li>
                <li><span className="num">03</span> Write the PRD, sit with engineering, and ship.</li>
                <li><span className="num">04</span> Be the bridge between commercial, product, and engineering.</li>
              </ul>
            </div>
            <div className="about__card about__card--alt">
              <div className="about__card-head">Working with me</div>
              <p className="about__note">
                Structured, written-first, calm in escalation. I default to clarity over jargon and prefer
                <em className="italic"> decisions over decks</em> when the room is ready for one.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */

function Experience() {
  const [open, setOpen] = useState(EXPERIENCE[0].id);
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHeader
          index="03"
          kicker="Experience"
          title={<>Five roles, <em className="italic">one trajectory.</em></>}
          lede="From IT PMO intern to enterprise presales — each role added one more muscle to the same toolkit."
        />

        <div className="timeline">
          {EXPERIENCE.map((e, i) => {
            const isOpen = open === e.id;
            const panelId = `experience-panel-${e.id}`;
            return (
              <Reveal key={e.id} delay={i * 80} className={`tl-row ${isOpen ? "is-open" : ""}`}>
                <button
                  className="tl-row__head"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : e.id)}
                >
                  <div className="tl-row__rail">
                    <span className="tl-row__node" />
                  </div>
                  <div className="tl-row__period">
                    <div className="tl-row__year">{e.period}</div>
                    <div className="tl-row__loc">{e.location} · {e.type}</div>
                  </div>
                  <div className="tl-row__title">
                    <div className="tl-row__role">{e.role}</div>
                    <div className="tl-row__company">{e.company}</div>
                  </div>
                  <div className="tl-row__chev" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div id={panelId} className="tl-row__body" aria-hidden={!isOpen}>
                  <div className="tl-row__body-inner">
                    <p className="tl-row__summary">{e.summary}</p>
                    <div className="tl-row__cols">
                      <div>
                        <div className="kv-k">Responsibilities</div>
                        <ul className="tl-row__list">
                          {e.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
                        </ul>
                      </div>
                      <div>
                        <div className="kv-k">Impact</div>
                        <ul className="tl-row__impact">
                          {e.impact.map((m, j) => (
                            <li key={j}>
                              <span className="tl-row__impact-v">{m.v}</span>
                              <span className="tl-row__impact-k">{m.k}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Work / Case Studies ---------- */

function Work() {
  const [focus, setFocus] = useState(null);
  const current = focus ? CASES.find(c => c.id === focus) : null;

  useEffect(() => {
    document.body.style.overflow = focus ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [focus]);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader
          index="04"
          kicker="Featured Work"
          title={<>Selected projects, in <em className="italic">depth.</em></>}
          lede="Five case studies you can open inline — problem, role, approach, impact, and the tools that got it shipped."
        />

        <div className="cases">
          {CASES.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <article className="case-card">
                <header className="case-card__head">
                  <span className="case-card__tag">{c.tag}</span>
                  <span className="case-card__period">{c.period}</span>
                </header>
                <h3 className="case-card__title">{c.title}</h3>
                <div className="case-card__company">{c.company}</div>
                <p className="case-card__headline">{c.headline}</p>

                <ul className="case-card__bullets">
                  {c.impact.slice(0, 2).map((b, j) => <li key={j}>{b}</li>)}
                </ul>

                <div className="case-card__chips">
                  {c.tools.slice(0, 4).map((t, j) => <Pill key={j}>{t}</Pill>)}
                  {c.tools.length > 4 && <span className="case-card__more">+{c.tools.length - 4}</span>}
                </div>

                <button className="case-card__cta" onClick={() => setFocus(c.id)}>
                  Read case study <span aria-hidden="true">→</span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {current && <CaseModal data={current} onClose={() => setFocus(null)} />}
    </section>
  );
}

function CaseModal({ data, onClose }) {
  const idx = CASES.findIndex(c => c.id === data.id);
  const closeRef = useRef(null);
  const panelRef = useRef(null);
  const titleId = `case-modal-title-${data.id}`;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const getFocusable = () => {
      if (!panelRef.current) return [];
      return Array.from(panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      ));
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="modal__scrim" onClick={onClose} aria-hidden="true" />
      <div className="modal__panel" ref={panelRef}>
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Close case study">×</button>

        {/* Magazine cover */}
        <div className="modal__cover">
          <div className="modal__cover-bg" aria-hidden="true">
            <span className="modal__cover-glyph">{String(idx + 1).padStart(2, "0")}</span>
          </div>
          <div className="modal__cover-content">
            <div className="modal__cover-top">
              <span className="modal__cover-issue">§ Case Study · {String(idx + 1).padStart(2, "0")} / {String(CASES.length).padStart(2, "0")}</span>
              <Pill>{data.tag}</Pill>
            </div>
            <h3 className="modal__cover-title" id={titleId}>
              <em className="italic">{data.title}</em>
            </h3>
            <p className="modal__cover-headline">{data.headline}</p>
            <div className="modal__cover-meta">
              <span>{data.company}</span>
              <span className="modal__cover-dot" />
              <span>{data.period}</span>
            </div>
          </div>
        </div>

        <div className="modal__inner">
          <div className="modal__grid">
            <div>
              <div className="kv-k">Problem</div>
              <p className="modal__p">{data.problem}</p>
            </div>
            <div>
              <div className="kv-k">My role</div>
              <p className="modal__p">{data.role}</p>
            </div>
          </div>

          <div className="modal__block">
            <div className="kv-k">Approach</div>
            <ul className="modal__list">
              {data.approach.map((a, i) => <li key={i}><span className="num">{String(i + 1).padStart(2, "0")}</span>{a}</li>)}
            </ul>
          </div>

          <div className="modal__block">
            <div className="kv-k">Impact</div>
            <ul className="modal__impact">
              {data.impact.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

          <div className="modal__block">
            <div className="kv-k">Tools & skills</div>
            <div className="modal__tools">
              {data.tools.map((t, i) => <Pill key={i}>{t}</Pill>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Skills ---------- */

function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeader
          index="05"
          kicker="Skills"
          title={<>Skills, grouped by the <em className="italic">muscle</em> they belong to.</>}
        />
        <div className="skills">
          {SKILLS.map((g, i) => (
            <Reveal key={g.group} delay={i * 60}>
              <div className="skill-card">
                <div className="skill-card__head">
                  <span className="skill-card__idx">0{i + 1}</span>
                  <h3 className="skill-card__title">{g.group}</h3>
                </div>
                <ul className="skill-card__list">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Recognition ---------- */

function Recognition() {
  const ordinal = (place) => {
    const n = place.split(" ")[0]; // "2nd" / "3rd"
    const num = n.replace(/\D/g, "");
    const suffix = n.replace(/\d/g, "");
    return { num, suffix };
  };
  return (
    <section className="section section--recog" id="recognition">
      <div className="container">
        <SectionHeader
          index="06"
          kicker="Recognition"
          title={<>Three national podiums. <em className="italic">One product muscle.</em></>}
          lede="Hack The Product runs short-window product challenges with real business problems from the host company. Three top-3 finishes across three industries."
        />
        <div className="recog-strip">
          {RECOGNITION.map((r, i) => {
            const { num, suffix } = ordinal(r.place);
            return (
              <Reveal key={r.event} delay={i * 100}>
                <article className="recog-cell">
                  <div className="recog-cell__numeral" aria-hidden="true">
                    <span className="recog-cell__num">{num}</span>
                    <span className="recog-cell__suf">{suffix}</span>
                  </div>
                  <div className="recog-cell__meta">
                    <span className="recog-cell__place">{r.place}</span>
                    <span className="recog-cell__year">{r.year}</span>
                  </div>
                  <h3 className="recog-cell__title">{r.event}</h3>
                  <p className="recog-cell__note">{r.note}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */

function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <SectionHeader
          index="07"
          kicker="Education & Certification"
          title={<>Formal foundations, <em className="italic">applied</em> ever since.</>}
        />
        <div className="edu">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <article className="edu-card">
                <div className="edu-card__kind">{e.kind}</div>
                <h3 className="edu-card__title">{e.title}</h3>
                <div className="edu-card__org">{e.org}</div>
                {e.period && <div className="edu-card__period">{e.period}</div>}
                {e.note && <p className="edu-card__note">{e.note}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact CTA ---------- */

function Contact() {
  const hasCv = Boolean(PROFILE.cvUrl);
  return (
    <section className="section section--cta" id="contact">
      <div className="container">
        <Reveal>
          <div className="cta">
            <div className="cta__eyebrow">
              <span className="dot" /> <span>Let's talk</span>
            </div>
            <h2 className="cta__title">
              Want to know how I approach <em className="italic">enterprise solutions</em>, <em className="italic">product strategy</em>, or <em className="italic">IoT delivery</em>?
              <br /> Let's connect.
            </h2>
            <div className="cta__row">
              <a href={`mailto:${PROFILE.email}`} className="cta__card">
                <span className="cta__card-k">Email</span>
                <span className="cta__card-v">{PROFILE.email}</span>
                <span className="cta__card-arrow" aria-hidden="true">→</span>
              </a>
              <a href={`https://${PROFILE.linkedin}`} className="cta__card" target="_blank" rel="noopener">
                <span className="cta__card-k">LinkedIn</span>
                <span className="cta__card-v">{PROFILE.linkedin}</span>
                <span className="cta__card-arrow" aria-hidden="true">↗</span>
              </a>
              {hasCv ? (
                <a href={PROFILE.cvUrl} className="cta__card">
                  <span className="cta__card-k">Curriculum Vitae</span>
                  <span className="cta__card-v">Download PDF</span>
                  <span className="cta__card-arrow" aria-hidden="true">↓</span>
                </a>
              ) : (
                <a href={`mailto:${PROFILE.email}?subject=CV request`} className="cta__card">
                  <span className="cta__card-k">Curriculum Vitae</span>
                  <span className="cta__card-v">Available on request</span>
                  <span className="cta__card-arrow" aria-hidden="true">→</span>
                </a>
              )}
              <a href="#top" className="cta__card">
                <span className="cta__card-k">Portfolio</span>
                <span className="cta__card-v">Back to top</span>
                <span className="cta__card-arrow" aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <div>© {new Date().getFullYear()} Fadly Ahmad Firdausy — Jakarta, ID</div>
          <div className="footer__mono">portfolio · v1.0 · built for recruiters</div>
        </div>
      </footer>
    </section>
  );
}

Object.assign(window, {
  Reveal, SectionHeader, SectionRail, Pill, TopNav, Hero, About, Experience, Work, CaseModal, Skills, Recognition, Education, Contact,
});
