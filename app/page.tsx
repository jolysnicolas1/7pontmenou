import Link from "next/link"

import Banner from "@/components/Banner"
import BottomButtons from "@/components/BottomButtons"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
import { buttonVariants } from "@/components/ui/button"
import { socials } from "@/lib/socials"
import { reservationLink, formLink } from "@/lib/utils"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
      <Offers
        title="Le projet d'achat du 7 Pont Menou"
        intro="En premier lieu, l&apos;idée était donc de maintenir une capacité d&apos;hébergement à des tarifs accessibles proche de la Dérive. Dans un deuxième temps, ce projet s&apos;est agrémenté de tout un tas d&apos;idées saugrenues: que faire de tous ces espaces communs, des extérieurs, des locaux attenants, du trottoir, de l&apos;histoire de ses maisons."
        titleId="projet"
        images={[
          {
            href: "/photos/facade.jpeg",
            alt: "Façade du 7 Pont Menou",
          },
          {
            href: "/photos/pontmenou.jpeg",
            alt: "Village de Pont Menou",
          },
          {
            href: "/photos/bar.jpeg",
            alt: "Le bar restaurant",
          },
          {
            href: "/photos/trois.jpeg",
            alt: "Le projet du 7 Pont Menou",
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
                C&apos;est l&apos;ancien bar-restaurant au coeur du village et actuellement un espace ressource pour l&apos;association
                Pont Menou dans les bois qui gère la Dérive...<br />
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
        title="On imagine le lieu 🏠"
        titleId="on-imagine"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Nous avons fait une liste des multiples destinations possibles du lieu: hébergement avec maintien de loyers modérés, hébergements transitoires ou d&apos;urgence, refuge/repos, séjours de rupture ou de vacances parce que c&apos;est chouette de pouvoir voir la mer de temps en temps.
            </p>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Dans les espaces communs: faire revivre l&apos;ancien bar-restaurant de Pont Menou (des cantines, un bar asso, un espace d&apos;accueil de jour où boire un café...), une buanderie qui pourrait servir collectivement, une vidéothèque médiathèque (le temps de faire sa lessive!), un jardin collectif, des ateliers cuisine, un coiffeur prix libre.
            </p>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Et autour des questions de santé, un espace ouvert pour nourrir nos interventions et nos réflexions sur les questions de solidarité, de soin, de santé. Un accueil de jour, un centre de santé, des cabinets pour des praticiens, un centre d&apos;info et de ressources autour de questions du soin en général, d&apos;auto-défense administrative, un lieu pour organiser des interventions au sein de l&apos;institution ou pourquoi pas une future maison de retraite...
            </p>

          </>
        }
        image={{
          src: "/photos/masse.jpeg",
          alt: "",
        }}
      />
        <Features
          reversePosition
          title="Appel à dons ✨"
          titleId="appel-a-dons"
          text={
            <>
            <div className="m-10 flex sm:flex-row flex-col items-center justify-center gap-x-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={formLink}
                className={buttonVariants({ variant: "cta", size: "xl" })}
              >
                  Promesse de don ou de prêt
              </Link>
            </div>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Ce bien immobilier sera en vente à un prix global de 330.000 Euros. Le propriétaire propose l&apos;idée d&apos;une vente à terme: un premier versement de 200.000€ suivis pendant 7 ans d&apos;un versement mensuel de 1500 Euros par mois (sachant que le montant des loyers actuels s&apos;élève à 1400 Euros par mois).
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Nous avons eu bien peu de temps, depuis juin, pour réagir à l&apos;annonce de la vente, créer un collectif, dessiner un projet.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Nous réfléchissons encore aujourd&apos;hui au montage financier permettant d&apos;acquérir et de faire vivre un tel lieu. Nous tranchons en ce moment entre un modèle associatif ou une SCI pour l&apos;achat. L&apos;idée reste en tous cas de trouver la forme la moins risquée en terme financier, la moins réappropriable ou déstabilisante par le retrait d&apos;une ou plusieurs personnes. On privilégie une forme associative, démocratique, globalement maîtrisant la situation...
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                Quelle que soit la forme juridique que prendrait le collectif d&apos;achat, nous devrons compter sur des dons et des prêts.
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
                D&apos;où cet appel ! 
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
        intro="Le montage financier"
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
                C&apos;est la forme la plus avantageuse pour le projet puisqu&apos;ils sont considérés comme définitifs. Ces dons peuvent faire l&apos;objet d&apos;une réduction d&apos;impôts.
              </>
            ),
          },
          {
            name: "Les prêts à l’association",
            description: (
              <>    
Les prêts sont faits à l&apos;association –en cours de constitution – et seront remboursés selon les termes qui pourront     soit :               
              </>
            ),
          },
          {
            name: "Parts dans la SCI",
            description: (
              <>
                C&apos;est l&apos;ancien bar-restaurant au coeur du village et actuellement un espace ressource pour l&apos;association Pont Menou dans les bois qui gère la Dérive...<br />
              </>
            ),
          },
        ]}
      />


      <Slider />

      {/* <Logo /> */}

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
