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
    <p className="text-2xl font-semibold leading-7 text-myGreen">09 janvier 2024</p>
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Compte-rendu télégraphié depuis la rencontre autour du 7pontmenou</h1>
    <p className="mt-6 text-xl leading-8">
      Nous avions conviés les contributeur.ices et sympathisant.es du projet ainsi que les personnes sur la liste interne de la Dérive et les habitant.es à nous rejoindre de 18 à 20h pour se rencontrer et échanger sur les prochaines étapes.
    </p>
    <p>
      Nous étions plus de 30 réuni.es, déjà <strong>merci de vos présences !</strong> Merci également à celles et ceux qui nous avait envoyé et transmis des messages.
    </p>
    <p>
      Nous avons commencé par un tour de table pour percevoir ce qui résonnait en chacun.e dans ce projet. <strong>Les questions de maintien de logements / possibilités d’hébergement, les questions de lien social et de soin/santé globale résonnent.</strong> La complémentarité-continuité avec le projet initial de la Dérive. C’était bon de sentir le <strong>soutien et l’enthousiasme.</strong>
    </p>
    <p>
      Précisions sur le projet collectif : il nous apparaît encore <strong>flou dans sa matérialisation concrète</strong> (quelles activités ?), et parce que les contours des possibles ont de multiples variables et parce que jusqu’à présent notre petit collectif s’est concentré sur les questions de formes, pour avoir les moyens d’acheter. Ce qui nous réunit c’est des <strong>rêves plus grands que nous</strong>, et comment nos rencontres créent plus que l’addition de nos complémentarités !
      Dans les idées citées : une <strong>laverie-cinémathèque-kiosque-infos</strong>, rouvrir le bar-resto régulièrement.
    </p>
    <p>
      Précisions sur la structure : nous avons choisi la <strong>forme associative</strong> pour sa simplicité et souplesse, les statuts vont être déposés prochainement, après conseils avisés (résam, avocat, C.L.I.P.), fonds sous forme de contrats d’apports associatifs avec et sans droit de reprise grâce aux contributeur.ices
    </p>
    <p>
      Précisions sur le lieu : 3 logements actuellement en location (2 appartements et une partie maison avec 2 chambres, soit 6 habitant.es. (cf plan du lieu) Question des espaces disponibles pour les activités de l’association, en lien avec les habitant.es : rez-de-chaussée de l’immeuble avec l’actuel atelier + buanderie (environ 70m2) à court terme. Possibilité d’envisager des travaux pour intégrer la partie bar-restaurant + sanitaires à cet espace en réaménageant un espace cuisine pour le logement dans la partie maison à moyen terme. Possibilité d’envisager dès maintenant un espace-cabinet de soin dans un des appartements.
    </p>
    <p>
      Côté travaux, les bâtiments sont globalement <strong>sains</strong>, sans gros travaux urgents à prévoir. Les différents artisan.es ayant été sollicités estiment une enveloppe de <strong>40 000 euros</strong> à prévoir dans les 5 à 10 ans pour le remplacement d’ouvrants et une partie de la toiture de l’ancien bar-restaurant.
      Les bilans énergétiques situent les différents espaces entre <strong>C et E</strong> et ne relèvent aucun vice.
    </p>
    <p>
      Précisions sur le montage financier : actuellement à <strong>15 000 euros</strong> de pouvoir faire une offre à 270 000 au vendeur, avec le principe de la vente à terme : <strong>160 000 à l’achat</strong> puis <strong>110 000 en mensualités sur 8 ans.</strong> (+Les frais de notaires qui sont de <strong>25 000 euros.</strong>) Taxes 1600/an, loyers actuels : 1400/mois Nous aurions à rembourser <strong>38500 euros au bout de 4/5 ans</strong> et <strong>78500 à 8 ans,</strong> lissé sur les 8 ans cela fait <strong>16000 à 20000 euros par an à trouver.</strong> (en plus des loyers).
    </p>
    <p>
      Précisions humaines : nous étions 4 : <strong>Babeth, Gaëlle, Martin et Pauline</strong> à recevoir vos mots, impressions, questions. C’était la première fois que nous « présentions » le projet et nous avons pu à certains endroits nous sentir un peu fébriles, peut-être aussi n’avons nous pas eu l’impression de transmettre toutes les informations que nous aurions aimé transmettre. Mais c’était bon de sentir que vous étiez là et avoir vos retours !
    </p>
    <p>
      Alors pour répondre à cette question : qu’est ce qui vous manque là pour faire une offre ?
    </p>
    <ul>
      <li>Sentir le <strong>soutien pour faire vivre le projet, les coups de main, les engagements sur certaines thématiques, au-delà des moyens financiers, les moyens humains</strong></li>
      <li>S’assurer des <strong>quelques deniers de plus pour pouvoir faire cette offre au propriétaire</strong></li>
      <li>Ce qu’on a déjà : la <strong>confiance que ça vaut la peine d’être vécu, dans les pires scénarios, le « risque » est maîtrisé, la vente à terme nous permet de revendre tout ou partie pour rembourser les prêts.</strong></li>
      <li>La <strong>confiance que certain.es nous rejoignent incessamment, que le projet trouvera du soutien plus large, dans les cercles dans lesquels il s’inscrit, dans le terreau de la Dérive, tout en ouvrant les perspectives</strong></li>
    </ul>
    <div className="mt-16">
      <div className="mt-4 gap-x-2 text-sm leading-6 text-gray-500">
        Nous sommes toujours bien évidemment disponibles si vous souhaitez plus d’informations sur le projet, les modalités de participations financières, sur les statuts de l’association, etc, en nous écrivant à l’adresse : <span><a className="text-gray-600 hover:text-myGreen duration-500" href="mailto:7pontmenou@riseup.net">7pontmenou@riseup.net</a></span>
      </div>
    </div>
    <div className="mt-16">
      <div className="mt-4 gap-x-2 text-sm leading-6 text-gray-500">
        Nous nous racontons par ailleurs un peu (de façon plus ou moins réactualisées) ci-dessous.
        C’est là également que vous trouverez le lien pour contribuer : 
        <span><a className="text-myGreen hover:text-gray-700 duration-500" href="https://noteforms.com/forms/achat-du-7-pont-menou-promesses-de-dons-et-de-prets-fxeixg" target= "_blank"> Contribuer au projet</a></span>
      </div>
      <div className="mt-4 gap-x-2 text-sm leading-6 text-gray-500">
        Pour s&apos;inscrire à la liste de diffusion :
        <span><a className="text-myGreen hover:text-gray-700 duration-500" href="mailto:7pontmenou-subscribe@lists.riseup.net"> Liste de diffusion</a></span>
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
