import Image from "next/image"

import heroImg from "../public/photos/hero.jpeg"

export default function HeroContent() {
  return (
    <div className="bg-gray-800 w-screen">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          priority={true}
          src={heroImg}
          sizes="100vw"
          alt="Passage rennes - gastronomie sur mesure"
          className="absolute inset-0 opacity-50 -z-10 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-full pt-32 sm:pt-48 lg:pt-56 pb-12">
          <div className="text-center flex flex-col justify-center items-center space-y-12 text-white">
            <h1 className="uppercase font-pitch font-bold tracking-[0.085em] text-2xl sm:text-4xl md:text-5xl">
              7 Pont-Menou
            </h1>
            <p className="mt-4 sm:text-lg leading-7">
                Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux confins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour dun certain nombre de personnes * en Dérive * ces dernières années.

                Le 7 Pont menou c&apos;est aussi une asso qui achète cet immeuble et souhaite y modeler de l&apos;habitat, du « prendre soin » et de l&apos;accueil.
            </p>
            <div className="bg-white/90 rounded-full p-12 text-slate-700 border-myGreen border-2">
              <h2>À VENIR</h2>
              <p className="mt-4 sm:text-lg leading-7">
              brunch projection le Dimanche 23 juin 11h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
