import { useEffect, useState } from "react";
import videoSrc from "@/assets/aluchvid.mp4";

export function HeroVideo() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Trigger load animation on mount
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate scroll progress over a range of 600px of scrolling
  const scrollRange = 600;
  const t = Math.max(0, Math.min(1, scrollY / scrollRange));
  const ease = t * t * (3 - 2 * t); // smoothstep

  // 3D entrance and scroll response variables
  const rotateX = 8 + ease * 12;      // Tilts down as user scrolls
  const rotateY = -14 - ease * 14;    // Swivels as user scrolls
  const rotateZ = -2 + ease * 4;      // Subtle roll
  const scale = 0.98 - ease * 0.15;   // Scales down to recede in space
  const opacity = 1.0 - ease * 0.85;  // Fades out
  const blur = ease * 8;              // Blurs out
  const translateY = ease * 90;       // Parallax descent speed

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center perspective-1000">
      {/* Ambient background glow */}
      <div 
        className="absolute inset-0 rounded-full blur-[90px] transition-opacity duration-1000 pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, var(--alucha) 0%, transparent 60%)",
          transform: `translateY(${translateY * 0.3}px) scale(${scale})`,
          opacity: 0.5 - ease * 0.4
        }} 
      />
      
      {/* 3D Integrated Video Wrapper */}
      <div 
        style={{
          transform: isLoaded 
            ? `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` 
            : "translateY(50px) scale(0.9) rotateX(20deg) rotateY(-5deg)",
          opacity: isLoaded ? opacity : 0,
          filter: isLoaded ? `blur(${blur}px)` : "blur(10px)",
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-[2rem] overflow-hidden w-full max-w-[580px] aspect-video border border-white/10 hover:border-alucha/40 transition-[transform,opacity,filter] duration-1000 ease-out shadow-[0_30px_60px_rgba(34,197,94,0.18)] hover:shadow-[0_30px_80px_rgba(34,197,94,0.3)] bg-black/40"
      >
        {/* Sleek glare reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-alucha/10 via-transparent to-alucha-deep/10 pointer-events-none z-10" />

        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Custom brand watermark overlay to cover Gemini logo in the bottom-right corner */}
        <div className="absolute bottom-5 right-5 z-20 glass px-6 py-2.5 rounded-2xl border border-white/10 flex items-center gap-3 select-none shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-alucha animate-pulse" />
          <span className="text-xs sm:text-sm font-mono tracking-widest text-foreground/90 uppercase font-bold">
            Alucha Studio
          </span>
        </div>
        
        {/* Ambient bottom shadow reflection */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full blur-2xl bg-alucha/30 pointer-events-none" />
      </div>
    </div>
  );
}
