import Banner from "@/components/Banner"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import { socials } from "@/lib/socials"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
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
            href: "/photos/trois.png",
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
              Nous sommes un noyau de quelques personnes qui ont traversé depuis plusieurs années, au cours
              d’expériences militantes, associatives et professionnelles, des espaces du médico-social, des groupes
              d’auto-défense administrative, des habitats partagés. On a participé à la construction d’espaces de vie
              collective, habité dans des lieux d’accueil, travaillé dans des centres de santé... Réuni.es depuis à peine 3
              mois par des constats communs, embarqué.es dans notre enthousiasme, confirmé.es par les messages de
              soutien qui nous parviennent !
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Un cercle d’une dizaine de personnes nous aide à monter le projet, des
              collectifs amis (dont la Dérive en voisine) l’encouragent, le relaient, le facilitent.
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
          // eslint-disable-next-line sonarjs/no-duplicate-string
          src: "/photos/masse.png",
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
              focalisé.es sur la date du 1er
              octobre. Nous déterminons les conditions d’achat, tout en posant les
              premières pierres du projet. Pour les locataires, pour ce lieu bar-restaurant qui pourrait se réouvrir sur le
              hameau, pour ces perspectives d’espaces de réflexions, d’accueil et d’expérimentations. Quoi qu’il arrive,
              nous pressentons que la graine est semée : et nous la déploierons ici ou ailleurs !
            </p>
          </>
        }
        image={{
          src: "/photos/masse.png",
          alt: "",
        }}
      />

      <Offers
        // reversePosition
        title="ON IMAGINE"
        intro="1) Les destinations du 7pontmenou"
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
        title="Comment on s'y projette"
        titleId="l-histoire"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 font-bold">
            Les deux premières années
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Affinage du projet grâce à des rencontres avec les associations, collectifs locaux et de plus loin, autour
              des questions d’hébergements, de soin, de santé, d’auto-défense administrative et institutionnelle.
              Réouvertures progressives du bar-restaurant et de l’atelier annexe sous forme de stages, formations,
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
      <Banner />

      <Features
        reversePosition
        title="INTENTIONS DE CONTRIBUTIONS"
        titleId="contributions"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Ce bien immobilier est en vente à un prix global de 330 000 euros. Le propriétaire propose l'idée d'une
              vente à terme : un premier versement de 200 000 euros suivi pendant 7 ans d'un versement mensuel de
              1500 euros par mois (sachant que le montant des loyers actuels s'élève à 1400 euros par mois).
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Nous avons eu bien peu de temps, depuis fin juin, pour réagir à l&apos;annonce de la vente, créer un collectif,
              dessiner un projet.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Nous réfléchissons encore aujourd&apos;hui au montage financier et à la structure juridique permettant
              d&apos;acquérir et de faire vivre un tel lieu, les options de modèle associatif ou une SCI pour l&apos;achat sont à
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
          src: "/photos/masse.png",
          alt: "",
        }}
      />


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


      {/* <BottomButtons /> */}
    </main>
  )
}
