/* eslint-disable sonarjs/no-duplicate-string */
import { PiggyBank } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import Banner from "@/components/Banner"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import { buttonVariants } from "@/components/ui/button"
import { socials } from "@/lib/socials"
import { formLink } from "@/lib/utils"




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      
      <HeroContent />

      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-myGreen">10 novembre 2023</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Des nouvelles du projet d’achat de l’immeuble du 7 pontmenou...</h1>
          <p className="mt-6 text-xl leading-8">
          ...Car le projet en est toujours un ! L’immeuble est encore en vente, il l’est même officiellement depuis cette fin de semaine.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
            Depuis septembre, les prix ont baissé : il est mis en vente chez le notaire et un agent immobilier à 330 000€. Cependant le propriétaire continue à nous proposer une remise sous la forme d’une vente à terme de 150 000€ maintenant et 150 000€ mensualisés pendant 8 ans.
            De notre côté, nous avons reçu les diagnostics et évalué les travaux à faire les années à venir. Les statuts de l'association se finalisent et nous avons reçu 50 000€ de promesses de dons et des promesses de prêts auprès de 49 personnes.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                Il nous manque de quoi payer les frais de notaire pour faire une première offre d’achat : c’est à dire qu’il nous manque 25 000€ !
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                25 000€ de dons et/ou de prêts à moyen ou long terme (soit 3-4 minimum)… On a bien conscience que la marche est encore haute mais vu le chemin parcouru depuis juillet, telles de petit.es poucet.tes qui chourrent ses bottes de sept lieus à l’ogre spéculateur, nulle somme monstrueuse ne nous fait plus peur.
                Nous persistons à vouloir arracher ce petit refuge pour le partager au mieux à l’avenir !
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                Babeth, Gaëlle, Martin, Nico, Pauline
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <div className="mt-4 gap-x-2 text-sm leading-6 text-gray-500">
              Nous sommes toujours bien évidemment disponible si vous souhaitez plus d’informations sur le projet, les modalités de participations financières, sur les statuts de l’association, etc, en nous écrivant à l’adresse : <span><Link className="text-gray-600 hover:text-myGreen duration-500" href="mailto:7pontmenou@riseup.net">7pontmenou@riseup.net</Link></span>
            </div>
          </div>
        </div>
      </div>

      <Offers
        title="LE PROJET"
        intro="Il s'agit de l'ancien bar-restaurant au cœur du village et de la maison attenante, offrant 240 m2 de logements et un joli terrain arboré de 400m2, répartis en 3 habitations actuellement louées. On y trouve
        également des espaces communs (une buanderie, un grand atelier), des locaux annexes (un local qui sert
        de miellerie et un appentis), un joli pas de porte au carrefour du hameau, des histoires à raconter..."
        titleId="projet"
        intro2="Le 7pontmenou sera en vente au 1er octobre..."
        intro3="Il aiguise l'appétit des promoteurs immobiliers sur un territoire où le nombre de logements à loyers modérés fond comme les neiges des Alpes en 2023."
        intro4="Et nous, nous aimerions bien le leur arracher."
        images={[
          {
            // eslint-disable-next-line sonarjs/no-duplicate-string
            href: "/photos/facade.jpeg",
            alt: "Façade du 7 Pont Menou",
          },
          {
            // eslint-disable-next-line sonarjs/no-duplicate-string
            href: "/photos/pontmenou.png",
            alt: "Village de Pont Menou",
          },
          {
            href: "/photos/bar.jpeg",
            alt: "Le bar restaurant",
          },
          {
            href: "/photos/masse.png",
            alt: "Le projet du 7 Pont Menou",
          },
        ]}
        features={[
        ]}
      />
      <Features
        reversePosition
        title="CE QUI NOUS ANIME"
        titleId="ce-qui-nous-anime"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Cette vente a été l&apos;occasion de discuter
              du manque, en milieu rural, d&apos;espaces
              refuge, de logements d&apos;urgence, de prestations médicales, d&apos;espaces
              ressources, de transmissions et d&apos;informations quant aux
              problématiques sociales et de santé.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Il est de plus en plus difficile de se loger à des prix modiques, il est
              de plus en plus difficile d&apos;avoir accès à des lieux de soins.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              On sait l&apos;incurie dans laquelle sont laissées les institutions du
              médico-social aujourd&apos;hui, on sait les difficultés financières et les
              dynamiques d&apos;isolement qui se déploient autour de nous, parmi nous.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Il ne s&apos;agit pas de faire sans les institutions et les assistances
              hospitalières, psychiatriques, sociales ; néanmoins, face à leur
              délabrement, nous savons aussi qu&apos;il faut multiplier les espaces
              intermédiaires, tampons, susceptibles de limiter cette casse
              gouvernementale de la solidarité et du vivre-ensemble.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">Attaché.es à ce village déjà bien vivant, nous nous sommes pris.es à imaginer sortir cet immeuble de la
              spéculation immobilière pour y mettre en jeu, en acte, nos réflexions, envies, luttes autour de
              l&apos;hébergement, du soin, de la santé.
            </p>
          </>
        }
        image={{
          src: "/photos/pontmenou.png",
          alt: "",
        }}
      />
      
      
      <Features
        // reversePosition
        title="QUI NOUS SOMMES"
        titleId="qui-nous-sommes"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Nous sommes un noyau de quelques personnes qui ont traversé depuis plusieurs années, au cours
              d&apos;expériences militantes, associatives et professionnelles, des espaces du médico-social, des groupes
              d&apos;auto-défense administrative, des habitats partagés. On a participé à la construction d&apos;espaces de vie
              collective, habité dans des lieux d&apos;accueil, travaillé dans des centres de santé... Réuni.es depuis à peine 3
              mois par des constats communs, embarqué.es dans notre enthousiasme, confirmé.es par les messages de
              soutien qui nous parviennent !
            </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
          Un cercle d&apos;une dizaine de personnes nous aide à monter le projet, des
          collectifs amis (dont la Dérive en voisine) l&apos;encouragent, le relaient, le facilitent.
        </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
          Et 22 contributeur.rices réunissent déjà 110 000€ de dons et de prêts.
        </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
          Nous sommes rejoignables, plus ou moins débordables, on ne se suffit pas à nous-mêmes, on croit
          fermement que des rencontres se feront.
        </p>


          </>
        }
        image={{
          // eslint-disable-next-line sonarjs/no-duplicate-string
          src: "/photos/facade.jpeg",
          alt: "",
        }}
      />
      <Features
        reversePosition
        title="L'HISTOIRE"
        titleId="l-histoire"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 font-bold">
            1) Une émanation de LA DÉRIVE
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              À l’origine de la Dérive, il y a « un groupe espérant être rejoint, ici ou ailleurs, avec une envie de créer
              des places fortes nous armant face à l’aridité actuelle autant économique que sociale.
              Un groupe cherchant à avoir de manière pérenne un lieu, un asile, un havre, une fourmilière créatrice où
              nous retrouver aujourd’hui et demain pour faire, créer, apprendre et partager. »
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            La Dérive est un espace artisanal, artistique et d’autonomie nourricière, un lieu de fêtes et de célébrations
            également, soucieux du comment on construit, du comment on rassemble.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Les maisons du 7 seraient alors des voisines de la Dérive, en connivence, des voisines qui se consacrent
              encore davantage aux questions de refuge, accueils, hébergements, sans même avoir à se préoccuper de la
              question des ateliers, de l’espace, du festif.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              <a className="text-myGreen hover:text-green-900 duration-500" href="https://pontmenou.jimdofree.com/" target="_blank" rel="noopener noreferrer">https://pontmenou.jimdofree.com</a>
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 font-bold">
              2) ...aujourd’hui en pleine élaboration.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">

              Depuis fin juin, nous nous projetons dans les possibles et les activités du 7pontmenou.
              Nous sommes à la fois dans la phase de conception et d’articulation avec les locataires actuels et
              focalisé.es sur la date de mise en vente du 1er
              octobre. Nous déterminons les conditions d’achat, tout en posant les
              premières pierres du projet. Pour les locataires, pour ce lieu bar-restaurant qui pourrait se réouvrir sur le
              hameau, pour ces perspectives d’espaces de réflexions, d’accueil et d’expérimentations. Quoi qu’il arrive,
              nous pressentons que la graine est semée : et nous la déploierons ici ou ailleurs !
            </p>
          </>
        }
        image={{
          src: "/photos/pontmenou_contrast.png",
          alt: "",
        }}
      />

      <Offers
        // reversePosition
        title="ON IMAGINE"
        intro="Les destinations du 7pontmenou"
        intro2="Nous avons fait une liste des multiples destinations possibles du lieu :"
        intro3=""
        intro4=""
        titleId="on-imagine"
        images={[
          {
            href: "/photos/facade.jpeg",
            alt: "",
          },
          {
            href: "/photos/trois.png",
            alt: "",
          },
          {
            href: "/photos/bar.jpeg",
            alt: "",
          },
          {
            href: "/photos/pontmenou.png",
            alt: "",
          },
        ]}
        features={[
          {
            name: "Des hébergements",
            description: (
              <>
              Logements avec maintien de loyers modérés, hébergements transitoires ou d’urgence, refuge/repos,
              séjours de rupture ou de vacances parce que c’est chouette de pouvoir voir la mer de temps en temps.
              </>
            ),
          },
          {
            name: "Dans les espaces communs",
            description: (
              <>    
                Faire revivre l’ancien bar-restaurant de Pont Menou (des cantines, un bar asso, un espace où boire un
                café...), une buanderie qui pourrait servir collectivement, une vidéothèque médiathèque (le temps de faire
                sa lessive!), un jardin collectif, des ateliers cuisine, un coiffeur prix libre...             
              </>
            ),
          },
          {
            name: "Autour des questions de santé",
            description: (
              <>
                Un espace ouvert pour nourrir nos interventions et nos réflexions sur les questions de solidarité, de soin,
                de santé, un accueil de jour, un centre de santé, des cabinets pour des praticiens, un centre d’info et de
                ressources autours de questions du soin en général, d’auto-défense administrative, un lieu pour organiser
                des interventions au sein de l’institution ou pourquoi pas une futur maison de retraite...
              </>
            ),
          },
        ]}
      />

      <Features
        reversePosition
        title="COMMENT ON S'Y PROJETTE"
        titleId="l-histoire"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 font-bold">
            Les deux, trois premières années
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Affiner le projet grâce à des rencontres avec les associations, collectifs locaux et de plus loin, autour
              des questions d’hébergements, de soin, de santé, d’auto-défense administrative et institutionnelle.
              Ouvrir progressivement le bar-restaurant et l’atelier annexe sous forme de stages, formations,
              rencontres, évènements.
              Donner un aperçu d’initiatives et de luttes actuelles.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 font-bold">
              Par la suite
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Libérer les appartements du locatif, pour mettre en place des espaces refuge, de repos, d’accueil
              d’urgence sur des temps courts, à la mesure de ce que le collectif créé aura les compétences et l’énergie de
              mettre en place.
              Libérer des espaces pour la commune de Pont Menou, en faire un lieu de vie du village.
            </p>
          </>
        }
        image={{
          src: "/photos/masse.png",
          alt: "",
        }}
      />
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 font-serif">
        LES TROIS PREMIÈRES PHASES DU PROJET
      </h2>
      <Image
        src="/photos/step1_comp.jpeg"
        alt="Schéma étape 1"
        width="900"
        height="900"
      />
      <Image
        src="/photos/step3.jpeg"
        alt="Schéma étape 3"
        width="900"
        height="900"
      />

      <Banner />

      <Features
        reversePosition
        title="INTENTIONS DE CONTRIBUTIONS"
        titleId="contributions"
        text={
          <>
            <div className="m-10 flex sm:flex-row flex-col items-center justify-center gap-x-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={formLink}
                className={buttonVariants({ variant: "cta", size: "xl" })}
              >
                <PiggyBank className="mx-2"/>
                <span className="inline-block align-baseline pt-1">Promesses de dons ou de prêts</span>

              </Link>
            </div>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Ce bien immobilier est en vente à un prix global de 300 000 euros. Le propriétaire propose l&apos;idée d&apos;une
              vente à terme : un premier versement de 200 000 euros suivi pendant 8 ans d&apos;un versement mensuel de
              1500 euros par mois (sachant que le montant des loyers actuels s&apos;élève à 1400 euros par mois).
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Nous avons eu bien peu de temps, depuis fin juin, pour réagir à l&apos;annonce de la vente, créer un collectif,
              dessiner un projet.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Nous réfléchissons encore aujourd&apos;hui au montage financier et à la structure juridique permettant
              d&apos;acquérir et de faire vivre un tel lieu, les options de modèle associatif ou d&apos;une SCI pour l&apos;achat sont à
              l&apos;étude. L&apos;idée reste en tous cas de trouver la forme la moins risquée en terme financier, la moins
              réappropriable ou déstabilisante par le retrait d&apos;une ou plusieurs personnes.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Quelle que soit la forme juridique que prendrait le collectif d&apos;achat, nous devrons compter sur des dons et
              des prêts.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 font-bold">
              ✨ D&apos;où cet appel ✨ !
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Il nous faut rassembler 240 000 euros pour faire une offre : 200 000 euros pour l&apos;achat + 40 000 euros afin
              d&apos;avoir suffisamment de trésorerie pour couvrir les premières années de dépenses liées au lieu, aux
              remboursements des mensualités au propriétaire et des prêts des contributeurs. Cette part de trésorerie
              nous laissera le temps d&apos;engager les activités du collectif et de pouvoir monter des dossiers de subventions
              de fondations et de collectivités.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Actuellement nous en sommes à des promesses de plus de 50 000 euros de dons et 60 000 euros de prêts
              auprès d&apos;un petit cercle de personnes, issu du collectif ou ayant réagit aux premières annonces du projet.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Pour pouvoir faire une offre d&apos;achat dans les meilleurs délais – mise en vente le 1 Octobre – nous
              recherchons donc encore 130 000 euros, en dons ou en prêts, de préférence remboursables au terme de la
              vente (7 ans après la date d&apos;achat) - ou pas trop rapidement après l&apos;achat.
            </p>
          </>
        }
        image={{
          src: "/photos/pm_rue.jpeg",
          alt: "",
        }}
      />


      <Features
        titleId="contact"
        title="Contact"
        text={
          <>
            <div className="space-y-6 pt-6 pb-24">
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
    </main>
  )
}
