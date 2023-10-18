// import { Bird } from "lucide-react"
import Image from "next/image"
// import Link from "next/link"

import heroImg from "../public/photos/hero.jpeg"
// import { buttonVariants  } from "./ui/button"


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
            {/* <div className="m-10 flex flex-col items-center justify-center gap-x-1 bg-pink-200 p-3">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:7pontmenou-subscribe@lists.riseup.net"
                className={`${buttonVariants({ variant: "newsletter", size: "xl" })} space-x-3`}

              >
                <Bird />
                  <p>S&apos;inscrire à la NewsLetter</p>
              </Link>
              <div className="p-3">
                <p className="text-white">Pour s&apos;inscrire, envoyer un mail (vide) à</p>
                <p className="text-white font-bold">7pontmenou-subscribe@lists.riseup.net</p>
              </div>
            </div> */}

          </div>
        </div>
        <div className="
          bottom-0
          bg-myGreen
          w-full
          bg-opacity-70
          flex
          flex-col
          justify-center
          items-center
          py-5
          px-12
            ">
            <div className="text-center flex flex-col justify-center items-center max-w-4xl space-x-3">
              <p className="w-fit text-white font-medium uppercase text-3xl py-3">Nouvelles conditions de vente!</p>
              <p className="w-fit text-white text-2xl">Le vendeur décale la mise en vente d’un mois, baisse le prix et propose un premier versement de 150 000 € pour lancer l’achat.</p>
              <p className="w-fit text-white text-2xl">La faisabilité de rachat se rapproche!</p>
            </div>
        </div>
      </div>
    </div>
  )
}
