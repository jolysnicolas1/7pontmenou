/* eslint-disable sonarjs/no-duplicate-string */
// import { BellAlertIcon } from "@heroicons/react/24/outline"
import { UtensilsCrossed } from "lucide-react"
import Link from "next/link"

import Banner from "@/components/Banner"
import BottomButtons from "@/components/BottomButtons"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Logo from "@/components/Logo"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
import { buttonVariants } from "@/components/ui/button"
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
        titleId="la-table"
        images={[
          {
            href: "/photos/dessert.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 2",
          },
          {
            href: "/photos/Diner.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 3",
          },
          {
            href: "/photos/Mariage.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 4",
          },
          {
            href: "/photos/assiette.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 1",
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
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Dans le petit hameau de Pont Menou, entre Plouégat-Guérand et Plestin-les-Grèves, deux maisons mitoyennes au 7 de la rue de Pont Menou au cœur du hameau sont en vente. L’une est l’ancien bar –restaurant du hameau. On y trouve 2 apparentements, une maison, un atelier, une buanderie et un petit local servant de miellerie actuellement et un joli jardin arboré. Les hébergements sont habités par 5 locataires, un enfant et 4 adultes, tous membres et usagers de la Dérive, juste en face.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
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
            </p>
          </>
        }
        image={{
          src: "/photos/equipe2.png",
          alt: "Passages Rennes - qui sommes nous ? ",
        }}
      />
      <Features
        // reversePosition
        title="Appel à dons"
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
          src: "/photos/equipe2.png",
          alt: "Passages Rennes - qui sommes nous ? ",
        }}
      />
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
        title="Le montage financier"
        titleId="la-table"
        images={[
          {
            href: "/photos/dessert.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 2",
          },
          {
            href: "/photos/Diner.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 3",
          },
          {
            href: "/photos/Mariage.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 4",
          },
          {
            href: "/photos/assiette.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 1",
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
Les prêts sont faits à l’association –en cours de constitution – et seront remboursés selon les termes qui pourront soit :               <br />
                <br />
                - Etre explicites dans un contrat faisant office de reconnaissance de dette avec un échéancier de remboursement
                <br />
                <br />
                - Faire l’objet d’un accord oral entre le prêteur et l’association
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

      <Banner />
      <Offers
        titleId="sur-mesure"
        reversePosition
        link={
          <a
            href="/#contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <UtensilsCrossed className="mr-2 h-4 w-4" /> Contactez-nous
          </a>
        }
        title="Le montage financier"
        images={[
          { href: "/photos/offre1.jpg", alt: "Passages Rennes - offre 1" },
          { href: "/photos/offre2.jpg", alt: "Passages Rennes - offre 2" },
          { href: "/photos/offre3.jpg", alt: "Passages Rennes - offre 3" },
          { href: "/photos/offre4.jpg", alt: "Passages Rennes - offre 4" },
        ]}
        features={[
          {
            name: "L'association du 7 Pont Menou",
            description:
              "Créer une association loi 1901 pour se porter acquéreur du 7 Pont Menou.",
          },
          {
            name: "Dîners privés",
            description:
              "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
          },
          {
            name: "Privatisations",
            description: (
              <>
                Vous cherchez un endroit magique pour accueillir votre événement
                ? Nous mettons nos équipes et notre lieu à votre disposition.{" "}
                <a
                  className="underline"
                  href="https://form.heeds.eu/registration/10469/8afd3a9105968cd111197e9f3934a168"
                >
                  C&rsquo;est par ici!
                </a>
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
          src: "/photos/contact.jpg",
          alt: "Passages Rennes - qui nous sommes ?",
        }}
      />

      <BottomButtons />
    </main>
  )
}
