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
          <div className="text-center flex flex-col justify-center items-center space-y-12">
            <h1 className="uppercase font-pitch font-bold tracking-[0.085em] text-white text-2xl sm:text-4xl md:text-7xl">
              Projet d&apos;Achat du 7 Pont-Menou
            </h1>
            <p className="mt-2 sm:text-2xl font-normal sm:leading-8 text-white">
            Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d&apos;aventures aux confins des Côtes-d&apos;Armor et du Finistère, port d&apos;attache et de retour d&apos;un certain nombre de personnes * en Dérive * ces dernières années.
            </p>
            <div className="m-10 flex sm:flex-row flex-col items-center justify-center gap-x-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={formLink}
                className={buttonVariants({ variant: "cta", size: "xl" })}
              >
                <BellAlertIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 sm:mr-3" />{" "}
                  Promesses de dons ou de prêts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
