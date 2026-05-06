"use client";

import Image from "next/image";

type Logo = {
  name: string;
  file: string;
  scale?: number;
};

const logos: Logo[] = [
  { name: "XL Smart",           file: "/logos/XLSmart.png"              },
  { name: "Indosat Ooredoo",    file: "/logos/Indosat.png"              },
  { name: "Microsoft",          file: "/logos/Microsoft.png"            },
  { name: "Trimegah Sekuritas", file: "/logos/Trimegah.png", scale: 1.5 },
  { name: "Alita",              file: "/logos/Alita.png"                },
  { name: "Cinemaxx",          file: "/logos/Cinemaxx.png", scale: 1.4  },
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center
                 px-7 py-4 rounded-xl bg-white/5 border border-white/8
                 hover:bg-white/10 hover:border-white/15 transition-all duration-300
                 group"
    >
      <div className="relative w-[130px] h-[38px]">
        <Image
          src={logo.file}
          alt={logo.name}
          fill
          className="object-contain opacity-70
                     group-hover:opacity-100 transition-opacity duration-300"
          style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
        />
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <div className="flex flex-col gap-3">
      <span className="text-caption text-text-muted">Worked with</span>

      {/* Track with edge fade */}
      <div
        className="marquee-track relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        aria-label="Companies worked with"
      >
        <div className="animate-marquee flex gap-4 w-max">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
