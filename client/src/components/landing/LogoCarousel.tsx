const logos = [
  { src: "/logos/finep.webp", alt: "Finep", scale: 1, w: 346 },
  { src: "/logos/cnpq.webp", alt: "CNPq", scale: 1, w: 533 },
  { src: "/logos/fapesp.webp", alt: "FAPESP", scale: 1, w: 582 },
  { src: "/logos/fapemig.webp", alt: "FAPEMIG", scale: 1.8, w: 160 },
  { src: "/logos/faperj.webp", alt: "FAPERJ", scale: 1, w: 324 },
  { src: "/logos/senai.webp", alt: "SENAI", scale: 1, w: 634 },
  { src: "/logos/centelha.webp", alt: "Centelha", scale: 1, w: 400 },
];

interface LogoCarouselProps {
  title?: string | null;
  className?: string;
}

export function LogoCarousel({ 
  title = "Aprenda a destravar seu projeto nos principais editais",
  className = "py-8 lg:py-10"
}: LogoCarouselProps) {
  const allLogos = [...logos, ...logos, ...logos, ...logos];
  
  return (
    <section className={`${className} overflow-hidden w-full`}>
      {title && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
          <p className="font-display font-medium text-base lg:text-lg text-text-muted text-center">
            {title}
          </p>
        </div>
      )}
      
      <div className="relative w-full" aria-label="Instrumentos de fomento com os quais há experiência">
        <div className="flex animate-marquee-continuous">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 lg:mx-10 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={160}
                loading="lazy"
                decoding="async"
                className="h-8 lg:h-10 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
                style={{ transform: `scale(${logo.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {title && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-6">
          <p className="text-xs text-text-muted/80 text-center leading-relaxed">
            Experiência em propostas e projetos submetidos a instrumentos da
            FINEP, CNPq, FAPESP, FAPEMIG, FAPERJ, SENAI e Centelha. As marcas
            pertencem às respectivas instituições e não indicam parceria,
            certificação ou endosso.
          </p>
        </div>
      )}
    </section>
  );
}
