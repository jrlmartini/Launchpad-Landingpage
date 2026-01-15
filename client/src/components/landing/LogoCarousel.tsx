const logos = [
  { src: "/logos/finep.png", alt: "Finep", scale: 1 },
  { src: "/logos/cnpq.png", alt: "CNPq", scale: 1 },
  { src: "/logos/fapesp.png", alt: "FAPESP", scale: 1 },
  { src: "/logos/fapemig.png", alt: "FAPEMIG", scale: 1.8 },
  { src: "/logos/faperj.png", alt: "FAPERJ", scale: 1 },
  { src: "/logos/senai.png", alt: "SENAI", scale: 1 },
  { src: "/logos/centelha.png", alt: "Centelha", scale: 1 },
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
      
      <div className="relative w-full">
        <div className="flex animate-marquee-continuous">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 lg:mx-10 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 lg:h-10 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
                style={{ transform: `scale(${logo.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
