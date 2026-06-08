/* App entry — wires sections together + Tweaks panel */

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  // Apply theme + accent + density to :root
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", t.theme || "dark");
    root.setAttribute("data-density", t.density || "comfortable");
    if (t.accent) {
      root.style.setProperty("--accent", t.accent);
      // soft + line derivatives
      const soft = `color-mix(in oklab, ${t.accent} 14%, transparent)`;
      const line = `color-mix(in oklab, ${t.accent} 35%, transparent)`;
      root.style.setProperty("--accent-soft", soft);
      root.style.setProperty("--accent-line", line);
    }
  }, [t.theme, t.accent, t.density]);

  // Hide boot screen once mounted
  React.useEffect(() => {
    const boot = document.getElementById("boot");
    if (boot) {
      boot.classList.add("hide");
      setTimeout(() => boot.remove(), 500);
    }
  }, []);

  // Smooth anchor scrolling (respect reduced motion)
  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <React.Fragment>
      <TopNav />
      <SectionRail />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Certifications />
        <Education />
        <Recognition />
        <Contact />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={["dark", "light"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENT_OPTIONS.map(o => o.value)}
          onChange={(v) => setTweak("accent", v)}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "comfortable"]}
          onChange={(v) => setTweak("density", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
