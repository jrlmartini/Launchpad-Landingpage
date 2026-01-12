const logos = [
  { src: "/logos/finep.png", alt: "Finep" },
  { src: "/logos/cnpq.png", alt: "CNPq" },
  { src: "/logos/fapesp.png", alt: "FAPESP" },
  { src: "/logos/fapemig.png", alt: "FAPEMIG" },
  { src: "/logos/faperj.png", alt: "FAPERJ" },
  { src: "/logos/senai.png", alt: "SENAI" },
  { src: "/logos/centelha.png", alt: "Centelha" },
];

export function LogoCarousel() {
  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <h2 className="font-display font-semibold text-xl lg:text-2xl text-gray-800 text-center">
          Aprenda a destravar seu projeto nos principais editais
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 lg:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
