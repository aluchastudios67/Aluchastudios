import { Zap, Sprout, Palette, Headphones } from "lucide-react";
import { useTranslation } from "@/lib/translations";

const features = [
  {
    icon: Zap,
    titleKey: "features.card1.title",
    descKey: "features.card1.desc",
  },
  {
    icon: Sprout,
    titleKey: "features.card2.title",
    descKey: "features.card2.desc",
  },
  {
    icon: Palette,
    titleKey: "features.card3.title",
    descKey: "features.card3.desc",
  },
  {
    icon: Headphones,
    titleKey: "features.card4.title",
    descKey: "features.card4.desc",
  },
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-alucha">{t("features.subtitle")}</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            {t("features.titlePart1")}<span className="text-gradient-alucha">{t("features.titlePart2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {t("features.desc")}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.titleKey}
              className="group relative glass rounded-2xl p-6 ring-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-alucha/10 border border-alucha/20 text-alucha group-hover:bg-alucha/20 group-hover:shadow-[0_0_30px_-6px_var(--alucha)] transition-all">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(f.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
              <div className="absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-alucha/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
