import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/translations";
import videoSrc from "@/assets/aluchvid.mp4";

export function ShowcaseVideo() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 
      // 0 when top enters the bottom of screen
      // 1 when bottom leaves the top of screen
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;

      let pct = currentDist / totalDist;
      pct = Math.max(0, Math.min(1, pct));
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial calculation
    handleScroll();

    // Re-run on resize to ensure correctness
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Map progress to transition values
  // We want the video mockup to scale up and rotate flat as it approaches the middle of the screen (progress 0.05 to 0.45)
  const startAnim = 0.05;
  const endAnim = 0.45;
  
  const tFactor = Math.max(0, Math.min(1, (progress - startAnim) / (endAnim - startAnim)));
  
  // Smoothstep easing for a silky smooth transition
  const ease = tFactor * tFactor * (3 - 2 * tFactor);

  const scale = 0.85 + ease * 0.15;
  const rotateX = 12 - ease * 12;
  const opacity = 0.3 + ease * 0.7;
  const blur = 10 - ease * 10;
  const translateY = 50 - ease * 50;

  return (
    <section 
      ref={containerRef} 
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-video rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--alucha) 0%, transparent 70%)" }} 
      />

      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-alucha">
          {t("showcase.subtitle")}
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
          {t("showcase.title")}
        </h2>
      </div>

      {/* 3D Perspective Animation Wrapper */}
      <div className="perspective-1000 w-full flex justify-center">
        <div 
          style={{
            transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
            opacity: opacity,
            filter: `blur(${blur}px)`,
            transformStyle: "preserve-3d",
          }}
          className="relative rounded-3xl p-2.5 sm:p-3.5 glass-strong shadow-glow overflow-hidden w-full max-w-5xl border border-white/10 hover:border-alucha/40 transition-colors duration-500"
        >
          {/* Inner ambient reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-alucha/5 via-transparent to-alucha-deep/5 pointer-events-none" />
          
          {/* Sleek browser header mockup */}
          <div className="flex items-center justify-between px-3 pb-3 pt-1 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            
            <div className="text-[10px] text-muted-foreground tracking-wider font-mono bg-white/5 px-4 py-1 rounded-md border border-white/5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-alucha animate-pulse" />
              alucha.studio/showcase
            </div>
            
            {/* Simple reload-like spacer icon */}
            <div className="w-12 text-[10px] text-right text-muted-foreground/30 font-mono hidden sm:block">
              1080p
            </div>
          </div>

          {/* Video display */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/60 mt-3 shadow-inner">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
