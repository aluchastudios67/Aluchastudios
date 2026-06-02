import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/alucha studios png.png";
import { useTranslation, type Language } from "@/lib/translations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, lang, setLang } = useTranslation();

  const links = [
    { href: "#features", label: t("nav.features") },
    { href: "#builder", label: t("nav.builder") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "ka", label: "ქართული", flag: "GE" },
    { code: "en", label: "English", flag: "EN" },
    { code: "ru", label: "Русский", flag: "RU" },
  ];

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-glow-sm" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-alucha/60 transition">
              <img src={logoAsset} alt="Alucha Studios" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-alucha/0 via-alucha/10 to-transparent" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-semibold tracking-tight text-foreground">{t("brand.title")}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t("brand.subtitle")}</span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-alucha scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Language Switcher Dropdown (Desktop) */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <span>{currentLanguage.flag}</span>
                <span className="text-[10px] opacity-60">▼</span>
              </button>
              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-32 glass-strong rounded-xl p-1 shadow-glow-sm z-50 border border-white/10 animate-fade-up">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                          lang === l.code
                            ? "bg-alucha/20 text-alucha font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="text-[10px] opacity-60">{l.flag}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-alucha/50 text-alucha text-sm font-medium hover:bg-alucha/10 hover:border-alucha hover:shadow-[0_0_24px_-4px_var(--alucha)] transition-all"
            >
              {t("nav.cta")}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-foreground"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector (Mobile) */}
            <div className="mt-4 pt-4 border-t border-white/5 flex gap-2 justify-center">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                    lang === l.code
                      ? "bg-alucha text-primary-foreground shadow-glow-sm font-semibold"
                      : "text-muted-foreground hover:text-foreground border border-white/10"
                  }`}
                >
                  {l.label} ({l.flag})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
