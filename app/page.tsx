/* eslint-disable sonarjs/no-duplicate-string */
// import { BellAlertIcon } from "@heroicons/react/24/outline"
// import { UtensilsCrossed } from "lucide-react"
import Link from "next/link"

import Banner from "@/components/Banner"
import BottomButtons from "@/components/BottomButtons"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Logo from "@/components/Logo"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
// import { buttonVariants } from "@/components/ui/button"
import { socials } from "@/lib/socials"
// import { reservationLink } from "@/lib/utils"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
      <Offers
        // link={
          // <Link
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   href={reservationLink}
          //   className={buttonVariants({ variant: "outline", size: "lg" })}
          // >
          //   <BellAlertIcon className="mr-2 h-4 w-4" /> Réserver
          // </Link>
        // }
        title="Le projet d'achat du 7 Pont Menou"
        intro="En premier lieu, l&apos;idée était donc de maintenir une capacité d&apos;hébergement à des tarifs accessibles proche de la Dérive. Dans un deuxième temps, ce projet s&apos;est agrémenté de tout un tas d&apos;idées saugrenues: que faire de tous ces espaces communs, des extérieurs, des locaux attenants, du trottoir, de l&apos;histoire de ses maisons."
        titleId="projet"
        images={[
          {
            href: "/photos/facade.jpeg",
            alt: "Passages Rennes - la table des Ateliers du Vent 2",
          },
          {
            href: "/photos/pontmenou.jpeg",
            alt: "Passages Rennes - la table des Ateliers du Vent 3",
          },
          {
            href: "/photos/bar.jpeg",
            alt: "Passages Rennes - la table des Ateliers du Vent 4",
          },
          {
            href: "/photos/trois.jpeg",
            alt: "Passages Rennes - la table des Ateliers du Vent 4",
          },
        ]}
        features={[
          {
            name: "Des hébergements accessibles",
            description: (
              <>
                Maintenir des loyers modérés au coeur d&apos;un territoire où ils se font de plus en plus rares.
              </>
            ),
          },
          {
            name: "S'inscrire dans la vie du village",
            description: (
              <>
                Y inviter un village déjà bien vivant.
              </>
            ),
          },
          {
            name: "Lutter contre la spéculation",
            description: (
              <>
                Sortir un immeuble delaspéculation immobilière.
              </>
            ),
          },
          {
            name: "Un lieu de soins et d'accueil",
            description: (
              <>
                Du mardi au vendredi de 12h à 14h.
              </>
            ),
          },
          {
            name: "Proche de la Dérive",
            description: (
              <>
                C’est l’ancien bar-restaurant au coeur du village et actuellement un espace ressource pour l&apos;association
                ‘Pont Menou dans les bois’ qui gère la Dérive...<br />
                {/* <div className="flex space-x-2">
                  {socials.map((item, i) => {
                    if (i === 3 || i === 4) {
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-black hover:underline mt-2"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon
                            className="h-6 w-6 text-gray-700"
                            aria-hidden="true"
                          />
                        </Link>
                      )
                    }
                  })}
                </div> */}
              </>
            ),
          },
        ]}
      />
      <Features
        reversePosition
        title="Une émanation de la Dérive"
        titleId="historique"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              À l&apos;origine de <a className="text-myGreen hover:text-green-900 duration-500" href="https://pontmenou.jimdofree.com/" target="_blank" rel="noopener noreferrer">la Dérive</a>, il y a &quot;un groupe espérant être rejoints, ici ou ailleurs, avec une envie de créer des places fortes nous armant face à l&apos;aridité actuelle autant économique que sociale. Un groupe cherchant à avoir de manière pérenne un lieu, un asile, un havre, une fourmilière créatrice où nous retrouver aujourd&apos;hui et demain pour faire, créer, apprendre et partager.&quot;
              <a className="text-myGreen hover:text-green-900 duration-500" href="https://pontmenou.jimdofree.com/" target="_blank" rel="noopener noreferrer">La Dérive</a> est un espace artisanal, artistique et d&apos;autonomie nourricière, un lieu de fêtes et de célébrations également, soucieux du comment on construit, du comment on rassemble.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Le 7, ce serait alors un peu comme un prolongement de la Dérive à ces envies anciennes, une histoire en parallèle, une histoire de 50m où l&apos;on pense refuge, accueils, hébergements, sans même avoir à se préoccuper de la question des ateliers, de l&apos;espace, du festif. C&apos;est une opportunité unique de pouvoir ouvrir un tel lieu dans un espace rural; et pour le 7pontmenou, l&apos;immense chance de pouvoir compter avec un autre collectif, foisonnant, agissant, lumineux.
              C&apos;est trouver de l&apos;autonomie affective, sensible, au sein d&apos;un réseau qui choisit au mieux ses dépendances.
            </p>

 
          </>
        }
        image={{
          src: "/photos/pontmenou.jpeg",
          alt: "",
        }}
      />
      <Features
        // reversePosition
        title="Appel à dons ✨"
        titleId="appel-a-dons"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Nous réfléchissons encore aujourd’hui au montant permettant d’acquérir et de faire vivre un tel lieu, création d’une association et éventuellement d’une SCI pour l’achat.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Ce bien immobilier sera en vente à un prix global de 330.000 Euros. Le propriétaire accepte l’idée d’un premier versement de 200.000 Euros suivis de 7 ans avec des versements de 1500 Euros par mois, sachant que le montant des loyers actuels s’élève à 1400 Euros par mois.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            </p>
          </>
        }
        image={{
          src: "/photos/facade.jpeg",
          alt: "",
        }}
      />

      <Banner />


      <Offers
        // link={
          // <Link
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   href={reservationLink}
          //   className={buttonVariants({ variant: "outline", size: "lg" })}
          // >
          //   <BellAlertIcon className="mr-2 h-4 w-4" /> Réserver
          // </Link>
        // }
        reversePosition
        title="Le montage financier"
        titleId="montage-financier"
        images={[
          {
            href: "/photos/facade.jpeg",
            alt: "",
          },
          {
            href: "/photos/trois.jpeg",
            alt: "",
          },
          {
            href: "/photos/bar.jpeg",
            alt: "",
          },
          {
            href: "/photos/pontmenou.jpeg",
            alt: "",
          },
        ]}
        features={[
          {
            name: "Dons à l’association",
            description: (
              <>
                C’est la forme la plus avantageuse pour le projet puisqu’ils sont considérés comme définitifs. Ces dons peuvent faire l’objet d’une réduction d’impôts.
              </>
            ),
          },
          {
            name: "Les prêts à l’association",
            description: (
              <>    
Les prêts sont faits à l’association –en cours de constitution – et seront remboursés selon les termes qui pourront     soit :               
              </>
            ),
          },
          {
            name: "Parts dans la SCI",
            description: (
              <>
                C’est l’ancien bar-restaurant au coeur du village et actuellement un espace ressource pour l’association
                ‘Pont Menou dans les bois’ qui gère la Dérive...<br />
                <div className="flex space-x-2">
                  {socials.map((item, i) => {
                    if (i === 3 || i === 4) {
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-black hover:underline mt-2"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon
                            className="h-6 w-6 text-gray-700"
                            aria-hidden="true"
                          />
                        </Link>
                      )
                    }
                  })}
                </div>
              </>
            ),
          },
        ]}
      />


      <Slider />

      <Logo />

      <Features
        titleId="contact"
        title="Contact"
        text={
          <>
            <div className="space-y-6 pt-6">
              {socials.map(social => (
                <div
                  key={social.name}
                  className="flex gap-x-6"
                >
                  <social.icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                  <a
                    href={social.href}
                    className="text-sm sm:text-base font-semibold hover:underline leading-7 text-slate-900"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </>
        }
        image={{
          src: "/photos/contact.png",
          alt: "Pont menou satelite",
        }}
      />

      <BottomButtons />
    </main>
  )
}
