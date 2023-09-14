import { BellAlertIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

import { formLink } from "@/lib/utils"

import heroImg from "../public/photos/hero.jpeg"
import { buttonVariants } from "./ui/button"

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
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="uppercase font-pitch font-bold tracking-[0.085em] text-white text-2xl sm:text-4xl md:text-7xl">
              Achat du 7 Pont-Menou
            </h1>
            <p className="mt-2 sm:text-2xl font-medium sm:leading-8 text-white">
              Un lieu partagé
            </p>
            <p className="sm:text-2xl font-medium sm:leading-8 text-white">
              Entre lhabitat et laccueil
            </p>

            <div className="m-10 flex sm:flex-row flex-col items-center justify-center gap-x-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={formLink}
                className={buttonVariants({ variant: "cta", size: "xl" })}
              >
                <BellAlertIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 sm:mr-3" />{" "}
                  Promesse de don ou de prêt
              </Link>
            </div>
            <p className="mt-2 sm:text-2xl font-medium sm:leading-8 text-white">
              Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux coins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour d&apos;un certain nombre de personnes en Dérive ces dernières années.
            </p>
            <p className="mt-2 sm:text-2xl font-medium sm:leading-8 text-white">
              Le lieu a 240 m2 de logement répartis en 3 habitations actuellement louées. Une maison, deux appartements. On y trouve également une buanderie, un grand atelier, un local qui sert de miellerie. À l&apos;extérieur, un joli jardin arboré et un terrain adjacent sur une surface de 400 m2. Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux coins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour d&apos;un certain nombre de personnes en Dérive ces dernières années.
            </p>
            <p className="mt-2 sm:text-2xl font-medium sm:leading-8 text-white">
              Le 7pontmenou est en vente le 1er octobre...
            </p>
            <p className="mt-2 sm:text-2xl font-medium sm:leading-8 text-white">
              Il aiguise l&apos;appétit des promoteurs immobiliers sur un territoire où le nombre de logements à loyers modérés fond comme les neiges des Alpes en 2023. Et nous, nous aimerions bien le leur arracher. Nous voilà donc, depuis deux mois, en quête de 330 000€.
            </p>



          </div>
        </div>
      </div>
    </div>
  )
}
