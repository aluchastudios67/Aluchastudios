import { ArrowRight, Sparkles } from "lucide-react";
import { PlumOrb } from "./Plum";
import { useTranslation } from "@/lib/translations";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-20 left-10 opacity-60"><PlumOrb size={36} className="animate-float-slow" /></div>
      <div className="absolute top-1/3 left-1/4 opacity-40"><PlumOrb size={22} className="animate-float-tilt" /></div>
      <div className="absolute bottom-24 right-10 opacity-50"><PlumOrb size={48} className="animate-float-slow" /></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <Sparkles size={14} className="text-alucha" />
            <span>{t("hero.badge")}</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            <span className="text-gradient-alucha">{t("hero.titleGradient")}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t("hero.desc")}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-alucha text-primary-foreground font-medium hover:shadow-[0_0_60px_-10px_var(--alucha)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("hero.ctaLaunch")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-foreground font-medium hover:border-alucha/60 hover:bg-white/5 transition-all"
            >
              {t("hero.ctaFeatures")}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-foreground">120+</div>
              <div className="text-xs uppercase tracking-wider">{t("hero.statSites")}</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="font-display text-2xl text-foreground">99<span className="text-alucha">/100</span></div>
              <div className="text-xs uppercase tracking-wider">{t("hero.statLighthouse")}</div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-2xl text-foreground">.ge → .com</div>
              <div className="text-xs uppercase tracking-wider">{t("hero.statGlobal")}</div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
