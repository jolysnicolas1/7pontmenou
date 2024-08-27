import {
  CalendarDaysIcon, MapPinIcon
} from "@heroicons/react/24/outline"
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
            <div className="bg-myGreen w-full max-w-7xl flex flex-col bg-opacity-70 p-8 m-8 border border-white gap-5">
              <h2 className="text-2xl  text-start">AGENDA</h2>
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col text-start gap-3 border shadow rounded p-5 bg-gray-50 text-gray-700">
                    <h3 className="text-lg font-medium text-gray-500">AG de l&apos;association du 7Pontmenou</h3>
                  <p className="flex align-baseline gap-2">
                    <CalendarDaysIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    Vendredi 20 septembre, le soir
                  </p>
                  <p className="flex align-baseline gap-2">
                    <MapPinIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    à la Dérive
                  </p>
                  <p></p>
                </div>
                <div className="flex flex-col text-start gap-3 border shadow rounded p-5 bg-gray-50 text-gray-700">
                  <h3 className="text-lg font-medium text-gray-500">Fête de soutien</h3>
                  <p className="flex align-baseline gap-2">
                    <CalendarDaysIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    Samedi 19 octobre, le soir
                  </p>
                  <p className="flex align-baseline gap-2">
                    <MapPinIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    à la Dérive
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <p className="mt-4 sm:text-lg leading-7 max-w-7xl">
                Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux confins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour dun certain nombre de personnes * en Dérive * ces dernières années.

                Le 7 Pont menou c&apos;est aussi une asso qui achète cet immeuble et souhaite y modeler de l&apos;habitat, du « prendre soin » et de l&apos;accueil.
            </p>
            <div className=" hidden bg-white/90 rounded-full p-12 text-slate-700 border-myGreen border-2">
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
