/* eslint-disable sonarjs/no-duplicate-string */
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import { socials } from "@/lib/socials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      
      <HeroContent />
      <div className="flex flex-col text-center max-w-5xl">
        <h3 className="text-gray-500 font-medium text-xl m-3">Bonjour à toustes !</h3>
        <p className="text-lg text-red-500">Voici la nouvelle que nous vous promettions depuis quelques semaines</p>
        <p className="text-lg text-red-500">Le compromis de vente est entre nos mains. Nous avons signé le 22 août !</p>
        <p className="text-2xl font-medium text-amber-500 m-5">Merci à toustes pour votre soutien !!!</p>
        <p className="text-gray-700 m-1 text-amber-500">Cette première étape de l&apos;achat touche à sa fin un an après notre premier mail
          qui invitait, sur la liste de diffusion de la Dérive, à penser comment
          inventer un projet à Pont Menou, autour des questions de logement, de
          santé et de soin collectif. Nous en sommes ravi•e•s !
        </p>
        <p className="text-gray-700 m-1 text-green-500">
        En un an, nous avons donc réuni 52000€ de dons et 170 000€ de prêts (à
          court et long terme).
        </p>
        <p className="text-gray-700 m-1 text-green-500">
        La réflexion autour de nos activités tourne à plein. Les festivités commencent, l&apos;administratif continue, il y a encore beaucoup à rêver !
        </p>
        <p className="text-gray-700 m-1 text-sky-500">
        La vie de l&apos;association est toujours rejoignable ! Il y a de la place pour vos envies, vos initiatives, vos propositions.
        </p>
        <p className="text-gray-700 m-1 text-sky-500">
        Voilà pourquoi nous vous proposons de nous retrouver avant chacune de nos réunions - quasi - hebdomadaires.
        Si vous nous prévenez, il est possible de venir 1h avant pour avoir le temps de vous accueillir.
        </p>
      </div>
      <Offers
        title="LE PROJET"
        intro="Il s'agit de l’achat de l'ancien bar-restaurant au cœur du village et de la maison attenante, offrant
        240 m2 de logements et un joli terrain arboré de 400m2, répartis en 3 habitations actuellement
        louées. On y trouve également des espaces communs (une buanderie, un grand atelier), des
        locaux annexes (un local qui sert de miellerie et un appentis), un joli pas de porte au carrefour
        du hameau, des histoires à raconter..."
        titleId="projet"
        intro2=""
        intro3=""
        intro4=""
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
              Cet achat est l&apos;occasion de discuter
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
              collective, habité dans des lieux d&apos;accueil, travaillé dans des centres de santé... Réuni.es par des constats communs, embarqué.es dans notre enthousiasme, confirmé.es par les messages de
              soutien qui nous parviennent !
            </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
          Un cercle d&apos;une dizaine de personnes nous aide à monter le projet, des
          collectifs amis (dont la Dérive en voisine) l&apos;encouragent, le relaient, le facilitent.
        </p>
        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
          Et 68 contributeur.rices réunissent déjà 226000€ de dons et de prêts
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

            Depuis juin 2023, nous nous projetons dans les possibles et les activités du 7pontmenou.
            Aujourd&apos;hui, nous posons les premières pierres du projet pour les locataires actuels, pour ce lieu
            bar-restaurant qui pourra s&apos;ouvrir à nouveau sur le hameau, pour ces perspectives d&apos;espaces de

            réflexions, d’accueil et d’expérimentations.
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


      <Features
        titleId="contact"
        title="Contact"
        text={
          <>
            <div className="space-y-6 pt-6 pb-24">
              <div className="italic">
                Nous sommes rejoignables, plus ou moins débordables, on ne se suffit pas à nous-mêmes, on
                croit fermement que des rencontres se feront.
                Il aussi est toujours possible de contribuer financièrement au projet.
              </div>
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
