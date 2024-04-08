import Image from "next/image"
import heroImg from "../public/photos/hero.jpeg"

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
        <div className="mx-auto max-w-full pt-32 sm:pt-48 lg:pt-56 pb-12">
          <div className="text-center flex flex-col justify-center items-center space-y-12 text-white">
            <h1 className="uppercase font-pitch font-bold tracking-[0.085em] text-2xl sm:text-4xl md:text-5xl">
              Projet d'Achat du 7 Pont-Menou
            </h1>
            <p className="mt-4 sm:text-lg leading-7">
              Le 7pontmenou est un immeuble dans la célèbre localité de Pont Menou, terre d'aventures aux confins des Côtes-d'Armor et du Finistère, port d'attache et de retour d'un certain nombre de personnes * en Dérive * ces dernières années.
            </p>
            <div className="bottom-0 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center py-5 px-24 rounded-xl">
              <div className="text-center flex flex-col justify-center items-center max-w-4xl space-y-4">
                <p className="font-medium uppercase text-2xl py-3">Le 7 PontMenou à la Dérive</p>
                <p className="text-2xl">Le 13 avril 2024</p>
                <p className="text-lg">Café à 14h, ateliers à 16h, concert à 18h et écoute sonore à 20h30,</p>
                <p className="text-lg">le tout agrémenté de petites choses à manger !</p>
              </div>
              <div className="text-left max-w-4xl space-y-4 mt-8">
                <p className="text-lg">Bonjour, nous croyons de plus en plus en l'achat du 7 ; le financement, l'administratif, nos engagements, penser le lieu avec les locataires actuels, voilà ce qui dessine le quotidien de l'asso depuis quelques mois.</p>
                <p className="text-lg">Aujourd'hui nous ressentons également le besoin de commencer des activités, de donner un peu de corps à nos rencontres, de penser la suite à plus nombreu.ses.</p>
                <p className="text-lg">Voilà pourquoi nous vous convions pour une journée de rencontres le 13 avril à la Dérive !</p>
                <p className="text-lg">À 14H, café éphémère au 7 rue de Pont Menou où nous avons également convié les habitant.es du hameau.</p>
                <p className="text-lg">Après nous allons à la Dérive !</p>
                <p className="text-lg">À 16h, deux ateliers à partager, merci de vous inscrire:</p>
                <ul className="list-disc ml-8">
                  <li>On réfléchit ensemble à l'accessibilité d'un lieu (avec Sabrina Morisson d'Idéographik).</li>
                  <li>Un atelier jeux de société autour de la santé ouvert aux enfants de 7 à 99 ans (avec Gaëlle Panier du 7pontmenou).</li>
                </ul>
                <p className="text-lg">À 18h, concert du T R I O R A ù M.</p>
                <p className="text-lg">À 19h apéro / repas.</p>
                <p className="text-lg">À 20h30 écoute sonore sur l'accessibilité aux soins de santé en Bretagne.</p>
                <p className="text-lg">Vous êtes les bienvenu.es ! La soirée sera prix libre - le concert pour les musicien.nes, le repas pour le 7pontmenou et la Dérive, l'écoute sonore pour la Caisse Autonome de Soins et de Santé (CASS)</p>
              </div>
              <div className="bottom-0 flex flex-col justify-center items-center py-5 px-24 rounded-xl">
              <div className="text-center flex flex-col justify-center items-center max-w-4xl space-y-4 text-gray-50 pt-44">
                <p className="font-medium uppercase text-2xl py-3">T R I O    R A ù M</p>
                <p className="text-lg">« On s'appelle RAùM. C'est un peu comme si Piazzolla s'était attablé avec Ligetti, qu'ils s'étaient amusés à refaire la bande son des Temps modernes de Chaplin, et qu'entre-temps Philip Glass les avait rejoints pour boire un dernier verre, le tout dans un café d'architecture Bauhaus. »</p>
                <p className="text-lg">Fabrice Bez : Accordéon</p>
                <p className="text-lg">Ségolène Neyroud : Clavier Prophet</p>
                <p className="text-lg">Maxime Tisserand : Clarinettes</p>
                <p className="text-lg">Les musiciens de /RAùM/ se sont inspirés de figures marquantes de la célèbre école d'arts appliqués allemande Bauhaus pour composer leur répertoire. Les créations d'Oskar Schlemmer, d'Anni Albers, de Paul Klee ou encore d'Anni Wottitz deviennent ainsi les fondations des pièces musicales originales du trio.</p>
                <p className="text-lg">/RAùM/ se traduit littéralement de l'allemand par « espacer », mais par extension, c'est la notion d'espace et de liberté d'espace (ou vide) qui intéresse nos musiciens dans sa signification.</p>
                <p className="text-lg">L'un des préceptes fondateurs du Bauhaus est de placer la création sous l'égide de l'édifice. Gropuis assure que « le but ultime d'une production plastique est l'édifice ».</p>
                <p className="text-lg">Dans la création du répertoire de /RAùM/, l'idée est de considérer ce répertoire comme un édifice à construire. Tout comme en architecture, il prendra place dans un espace vide qui n'est pas à « combler » mais à habiter.</p>
                <p className="text-lg">Habiter l'espace par des sons, des notes, des textures, des silences.</p>
                <p className="text-lg">Extraits à écouter : <a className="hover:text-myGreen duration-100" href="https://www.lebazardier.com/ra%C3%B9m" target="_blank">https://www.lebazardier.com/ra%C3%B9m</a></p>
                <p className="font-medium uppercase text-2xl py-3">Écoute radiophonique + échanges sur l'accessibilité aux soins de santé en Bretagne</p>
                <p className="text-lg">Qu'ils soient monétaires, géographiques ou liés à des discriminations spécifiques (âge, genre, race...), les problèmes d'accès aux soins sont nombreux.</p>
                <p className="text-lg">J'ai voulu interroger mes proches à ce sujet mais aussi recueillir les témoignages de structures médicales et associatives locales pour essayer de comprendre leurs missions et les freins qu'iels rencontrent dans un contexte où le soin n'est pas vraiment la priorité.</p>
                <p className="text-lg">Ça donne un podcast radiophonique d'une heure qu'on vous propose d'écouter suivi d'une discussion pour celleux qui souhaitent poursuivre la réflexion..</p>
                <p className="text-lg">La CASS c'est une Caisse Autonome et Soin et de Santé en Bretagne.</p>
                <p className="text-lg">On est un collectif de personnes intéressées par les questions de soin et santé. C'est avant tout une caisse de solidarité, nous récoltons de l'argent via des soirées de soutien et des dons et nous le redistribuons selon les demandes aux personnes précaires au sens large pour leur soins de santé en Bretagne.</p>
                <p className="text-lg">Ces personnes nous contactent via une boite mail : <a className="hover:text-myGreen duration-100" href="mailto:lacass@riseup.net">lacass@riseup.net</a></p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
