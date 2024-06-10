import "./styles.css";
import "./tailwind.output.css";

const srcValorant =
  "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/valorant-ameliorer-aim-visee-astuces";
const srcLol =
  "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b";
export default function App() {
  return (
    <div className="App pb-8">
      <h1 className="text-red-500 text-4xl font-bold uppercase p-8">
        Riot games
      </h1>
      <ul className="flex flex-col px-8 gap-8">
        <li>
          <div className="flex flex-col border-2 border-blue-800 rounded-lg overflow-hidden bg-purple-900 text-white relative">
            <img
              className="absolute w-full h-full top-0 left-0 z-0 opacity-25 object-cover object-top"
              src={srcValorant}
            />
            <div className="relative p-4 font-bold uppercase text-2xl text-blue-100">
              Valorant
            </div>

            <div className="relative w-full flex flex-col gap-2 p-4 pt-0">
              <div className="text-xl font-bold text-orange-300">
                Concept et Gameplay
              </div>
              <p>
                Valorant, développé par Riot Games, est un jeu de tir tactique à
                la première personne (FPS) sorti en juin 2020. Il se distingue
                par son mélange unique de gameplay tactique et de compétences de
                personnages, offrant une expérience à la fois stratégique et
                dynamique.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Agents et Compétences
              </div>
              <p>
                Valorant est un FPS tactique en 5v5 où les joueurs incarnent des
                agents avec des compétences spécifiques. Le jeu combine des
                éléments de tir classiques, rappelant des titres comme
                Counter-Strike, avec des capacités uniques de chaque agent,
                apportant une dimension stratégique supplémentaire. Les parties
                se déroulent en plusieurs rounds où une équipe attaque en
                tentant de poser une bombe ("Spike") et l'autre défend.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Cartes et Stratégies
              </div>
              <p>
                Les agents de Valorant proviennent de diverses régions du monde
                et chacun possède des compétences uniques réparties en quatre
                catégories : Initiateurs, Sentinelles, Duelistes, et
                Contrôleurs. Cela permet une grande variété de styles de jeu et
                de stratégies, encourageant la coopération et la communication
                entre les joueurs.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Équilibre et Compétitivité
              </div>
              <p>
                Le jeu propose plusieurs cartes, chacune avec ses propres
                caractéristiques et défis. Les cartes sont conçues pour
                favoriser des stratégies variées, permettant aux joueurs de
                tirer parti de leur connaissance de la carte, de la
                positionnement et de l'utilisation des compétences des agents.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Communauté et Esports
              </div>
              <p>
                Valorant est régulièrement mis à jour pour maintenir un
                équilibre entre les agents et les armes, garantissant une
                expérience de jeu juste et compétitive. Les développeurs de Riot
                Games sont attentifs aux retours des joueurs et ajustent le jeu
                en conséquence, ce qui contribue à une méta dynamique et en
                constante évolution.
              </p>
            </div>
            <div className="relative w-full bg-blue-800 p-4 gap-4 flex flex-row justify-end shadow-2xl">
              <button className="px-6 py-2 bg-green-600 text-sm text-white font-bold rounded">
                J'aime
              </button>
              <button className="px-6 py-2 bg-red-600 text-sm text-white font-bold rounded">
                J'aime pas
              </button>
            </div>
          </div>
        </li>

        <li>
          <div className="flex flex-col border-2 border-blue-800 rounded-lg overflow-hidden bg-purple-900 text-white relative">
            <img
              className="absolute w-full h-full top-0 left-0 z-0 opacity-25 object-cover object-top"
              src={srcLol}
            />
            <div className="relative p-4 font-bold uppercase text-3xl text-blue-100 z-1">
              League of legends
            </div>

            <div className="relative w-full z-1 flex flex-col gap-2 p-4 pt-0">
              <div className="text-xl font-bold text-orange-300">
                Concept et Gameplay
              </div>
              <p>
                League of Legends (LoL), développé et publié par Riot Games, est
                un jeu en ligne multijoueur de bataille arène (MOBA) sorti en
                octobre 2009. Il a rapidement gagné en popularité et est devenu
                un pilier de la scène esports mondiale. Ce jeu est acclamé pour
                sa profondeur stratégique, sa dynamique compétitive et son vaste
                univers.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Champions et Compétences
              </div>
              <p>
                League of Legends oppose deux équipes de cinq joueurs dans une
                bataille stratégique sur une carte appelée la "Faille de
                l'invocateur". Chaque joueur contrôle un "champion" avec des
                capacités uniques et un style de jeu distinct. L'objectif est de
                détruire le Nexus ennemi, situé au cœur de leur base, après
                avoir franchi des lignes de tours de défense et combattu des
                champions adverses.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Cartes et Modes de Jeu
              </div>
              <p>
                LoL offre plus de 150 champions, chacun avec un ensemble unique
                de compétences et un rôle spécifique dans l'équipe (tel que
                tank, support, carry, etc.). Cette diversité permet une
                multitude de stratégies et de combinaisons, rendant chaque
                partie unique et complexe.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Profondeur Stratégique
              </div>
              <p>
                Bien que la Faille de l'invocateur soit la carte la plus jouée,
                League of Legends propose d'autres cartes et modes de jeu, comme
                ARAM (All Random All Mid) et Teamfight Tactics (TFT), un mode de
                jeu auto-battler. Ces variations ajoutent de la richesse et de
                la diversité au jeu, offrant aux joueurs différentes façons de
                s'engager avec le contenu.
              </p>
              <div className="text-xl font-bold text-orange-300">
                Esports et Compétition
              </div>
              <p>
                Le gameplay de LoL est profond et complexe, exigeant une
                connaissance approfondie des champions, des objets, des
                stratégies d'équipe et des timings. La coordination et la
                communication au sein de l'équipe sont essentielles, et chaque
                décision peut avoir un impact significatif sur l'issue de la
                partie.
              </p>
            </div>

            <div className="relative w-full bg-blue-800 p-4 gap-4 flex flex-row justify-end shadow-2xl">
              <button className="px-6 py-2 bg-green-600 text-sm text-white font-bold rounded">
                J'aime
              </button>
              <button className="px-6 py-2 bg-red-600 text-sm text-white font-bold rounded">
                J'aime pas
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
