import Image from "next/image"

const Logo = () => {
  const logos = [
    { src: "/logos/adv.png", alt: "Camille Dupont", altbis: "de Sonn ar men", quote: "Le 7 c'est top !" },
    { src: "/logos/france-tv.png", alt: "Camille Dupont", altbis: "de malXX", quote: "Le 7 c'est top ! Le 7 c'est top ! Le 7 c'est top ! Le 7 c'est top ! "  },
    { src: "/logos/tombees-de-la-nuit.png", alt: "Camille Dupont", altbis: "Du planning familiale", quote: "Blabla blaLe 7 c'est top !"  },
    { src: "/logos/lacriee-logo.png", alt: "Camille Dupont", altbis: "Habitant de Pont Menou", quote: "Blabla blaBlabla blaBlabla blaLe 7 c'est top !"  },
    { src: "/logos/conf.png", alt: "Camille Dupont", altbis: "de La Dérive", quote: "Le 7 c'est top ! Blabla blaBlabla blaBlabla blaBlabla blaBlabla bla"  },
  ]
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl text-center font-serif font-semibold tracking-tight text-slate-900 sm:text-4xl sm:pb-12">
          Ils nous soutiennent
        </h2>
        <div className="mx-auto sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center">
          {logos.map(logo => (
            <div
              className={`mt-10 mr-8 max-w-xs`}
              key={logo.alt}
            >
              {/* <Image
                className="w-24 sm:w-32 mx-auto md:w-52 col-span-2 h-auto object-contain lg:col-span-1"
                src={logo.src}
                alt={logo.alt}
                width={316 * 2}
                height={96 * 2}
              /> */}
              <p className="text-sm text-center mt-6">"{logo.quote}"</p>
              <p className="text-sm text-center mt-6">{logo.alt}</p>
              <p className="uppercase text-sm text-center mt-6 text-gray-400">{logo.altbis}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logo
