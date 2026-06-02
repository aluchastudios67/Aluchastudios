import { useTranslation } from "@/lib/translations";

const projects = [
  { name: "Kvevri & Co.", tagKey: "portfolio.tagWine", hue: 145 },
  { name: "Tbilisi Threads", tagKey: "portfolio.tagFashion", hue: 330 },
  { name: "Mtkvari Realty", tagKey: "portfolio.tagRealEstate", hue: 200 },
  { name: "Café Pirosmani", tagKey: "portfolio.tagHospitality", hue: 30 },
  { name: "Vake Ventures", tagKey: "portfolio.tagFintech", hue: 165 },
  { name: "Sakhli Studio", tagKey: "portfolio.tagArchitecture", hue: 270 },
];

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-alucha">{t("portfolio.subtitle")}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              {t("portfolio.titlePart1")}<span className="text-gradient-alucha">{t("portfolio.titlePart2")}</span>{t("portfolio.titlePart3")}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t("portfolio.desc")}
          </p>
        </div>

        <div className="relative -mx-4 sm:-mx-6">
          <div className="flex gap-5 overflow-x-auto px-4 sm:px-6 pb-8 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group relative shrink-0 w-[320px] sm:w-[400px] snap-start glass rounded-2xl overflow-hidden ring-glow transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, oklch(0.7 0.18 ${p.hue}) 0%, oklch(0.2 0.05 ${p.hue}) 70%)`,
                    }}
                  />
                  {/* Device mockup */}
                  <div className="absolute inset-6 rounded-xl glass-strong p-3">
                    <div className="flex gap-1 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-3 rounded bg-white/30 w-1/2" />
                      <div className="h-2 rounded bg-white/15 w-3/4" />
                      <div className="h-2 rounded bg-white/15 w-2/3" />
                      <div className="grid grid-cols-3 gap-1.5 mt-3">
                        <div className="h-10 rounded bg-white/10" />
                        <div className="h-10 rounded bg-white/10" />
                        <div className="h-10 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{t(p.tagKey)}</p>
                  </div>
                  <span className="text-xs text-alucha opacity-0 group-hover:opacity-100 transition-opacity">{t("portfolio.view")}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
