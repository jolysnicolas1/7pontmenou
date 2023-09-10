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
                Maintenir des loyers modérés au coeur d’un territoire où ils se font de plus en plus rares.
                <br />
                <br />
                Cuisine espiègle, locale et de saison, boissons audacieuses et
                desserts gloutons
              </>
            ),
          },
          {
            name: "S'inscrire dans la vie du village",
            description: (
              <>
                Du mardi au vendredi de 12h à 14h.
                <br />
                <br />
                Le jeudi soir, pendant les Buvette de 18h-21h
                <br />
                <br />
                Et lors des événements publics :
                <br />
                Retrouvez-nous sur l&apos;agenda des Ateliers du Vent
                <br />
                <br />
                Pas de réservation pour le Snack!{" "}
              </>
            ),
          },
          {
            name: "Proche de la Dérive",
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
      <Features
        reversePosition
        title="Un peu d'histoire"
        titleId="historique"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Dans le petit hameau de Pont Menou, entre Plouégat-Guérand et Plestin-les-Grèves, deux maisons mitoyennes au 7 de la rue de Pont Menou au cœur du hameau sont en vente. L’une est l’ancien bar –restaurant du hameau. On y trouve 2 apparentements, une maison, un atelier, une buanderie et un petit local servant de miellerie actuellement et un joli jardin arboré. Les hébergements sont habités par 5 locataires, un enfant et 4 adultes, tous membres et usagers de la Dérive, juste en face.
            </p>
            {/* <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            La Dérive, un lieu collectif créé en 2015 par un collectif avec une pensée des alternatives, des ruptures, de l’autonomie. Aujourd’hui elle est devenue un espace de partage de matériel, un lieu d’artisanat, artistique, un lieu de fêtes, soucieux du comment on construit et on rassemble.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Le 7 serait alors comme une émergence des envies d’accueil, d4hébergement, de refuge qui n’a pas trouvé leur place dans le projet de la Dérive.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            C’est une opportunité unique de pouvoir ouvrir un tel lieu dans un environnement rural, l’immense chance de pouvoir compter sur un nouveau collectif, foisonnant, agissant et lumineux.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            L’achat de cet immeuble par le collectif permettrait de maintenir des loyers modérés au cœur d’un territoire où de tels opportunités se font rares. Ce serait aussi participer à la vie du village où on peut mettre en jeu nos réflexions autour de l’hébergement, du soin et de la santé.
            </p> */}
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
        className="bg-gray-50"
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
