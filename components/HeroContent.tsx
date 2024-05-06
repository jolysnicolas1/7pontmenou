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
              Projet d&apos;Achat du 7 Pont-Menou
            </h1>
            <p className="mt-4 sm:text-lg leading-7">
              Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux confins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour d&apos;un certain nombre de personnes * en Dérive * ces dernières années.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
