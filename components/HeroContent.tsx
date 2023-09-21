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
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col justify-center items-center space-y-12">
            <h1 className="uppercase font-pitch font-bold tracking-[0.085em] text-white text-2xl sm:text-4xl md:text-7xl">
              Projet d&apos;Achat du 7 Pont-Menou
            </h1>
            <p className="mt-2 sm:text-2xl font-normal sm:leading-8 text-white">
            Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux confins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour d&apos;un certain nombre de personnes * en Dérive * ces dernières années.
            </p>
            <div className="flex flex-col text-gray-600 border border-red-500 px-12 py-8 rounded-lg drop-shadow-2xl mt-5 mx-5 bg-gradient-to-br from-slate-100 from-40% via-slate-200 via-70% to-slate-50 to-90%">
              <p>Prochaine réunion d'information</p>
              <p className="font-bold">Lundi 25 septembre à 18 heures</p>
              <p>à la Dérive, Pont-Menou (29620)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
