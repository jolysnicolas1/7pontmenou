/* eslint-disable sonarjs/no-duplicate-string */
import { BellAlertIcon } from "@heroicons/react/24/outline"
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
        title="Pourquoi ce projet"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              En premier lieu, l’idée était donc de maintenir une capacité d’hébergement à des tarifs accessibles proche
              de la Dérive.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Dans un deuxième temps, ce projet s’est agrémenté de tout un tas d’idée saugrenue : que faire de tous ces
              espaces communs, des extérieurs, des locaux attenants, du trottoir, de l’histoire de ses maisons.
              À l’origine de la Dérive, il y a une pensée des alternatives, des ruptures, de l’autonomie. Notamment vis à
              vis de formes maltraitantes d’institutions sociales, médicales, administratives. Au fil des hasards, des
              arrivées, au fil des chantiers nécessaires pour que quelque chose existe, la Dérive est davantage devenu un
              espace d’autonomie et de partage matériel, un lieu d’artisanat, artistique, un lieu de fêtes et de
              célébrations également, soucieux du comment on construit, du comment on rassemble.
              *le collectif a grandi dans ces énergies là et les questions de l’accueil, de l’hébergement, du refuge, n’y
              ont pas trouvé leur place à proprement dit.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Le 7, ce serait alors un peu comme l’extension de la Dérive à ces envies anciennes, une histoire en
              parallèle, une histoire de 50m où l’on pense refuge, accueil, hébergements, sans même avoir à se
              préoccuper de la question des ateliers, de l’espace, du festif. C’est une opportunité unique de pouvoir
              ouvrir un tel lieu dans un espace rurale, l’immense chance de pouvoir compter avec un autre collectif,
              foisonnant, agissant, lumineux.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              C’est trouver de l’autonomie affective, sensible, au sein d’un réseau qui choisit au mieux ses
              dépendances.
            </p>
          </>
        }
        image={{
          src: "/photos/equipe2.png",
          alt: "Passages Rennes - qui sommes nous ? ",
        }}
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
            name: "Le coin sucré",
            description:
              "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l'heure du goûter ou au petit-déjeuner.",
          },
          {
            name: "Cocktails et réceptions",
            description:
              "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.",
          },
          {
            name: "Caterings et séminaires",
            description:
              "Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés",
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
