import GameSection from "../components/GameSection";
import UnorderedList from "../design/UnorderedList";
import { Game } from "../model/Game";

export default function HomeContainer() {
  const games: Game[] = [
    {
      title: "Valorant",
      backgroundImageSrc:
        "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/valorant-ameliorer-aim-visee-astuces",
      subSections: [
        {
          title: "Concept et Gameplay",
          body: "Valorant, développé par Riot Games, est un jeu de tir tactique à la première personne (FPS) sorti en juin 2020. Il se distingue par son mélange unique de gameplay tactique et de compétences de personnages, offrant une expérience à la fois stratégique et dynamique.",
        },
        {
          title: "Agents et Compétences",
          body: 'Valorant est un FPS tactique en 5v5 où les joueurs incarnent des agents avec des compétences spécifiques. Le jeu combine des éléments de tir classiques, rappelant des titres comme Counter-Strike, avec des capacités uniques de chaque agent, apportant une dimension stratégique supplémentaire. Les parties se déroulent en plusieurs rounds où une équipe attaque en tentant de poser une bombe ("Spike") et l\'autre défend.',
        },
        {
          title: "Cartes et Stratégies",
          body: "Les agents de Valorant proviennent de diverses régions du monde et chacun possède des compétences uniques réparties en quatre catégories : Initiateurs, Sentinelles, Duelistes, et Contrôleurs. Cela permet une grande variété de styles de jeu et de stratégies, encourageant la coopération et la communication entre les joueurs.",
        },
        {
          title: "Équilibre et Compétitivité",
          body: "Le jeu propose plusieurs cartes, chacune avec ses propres caractéristiques et défis. Les cartes sont conçues pour favoriser des stratégies variées, permettant aux joueurs de tirer parti de leur connaissance de la carte, de la positionnement et de l'utilisation des compétences des agents.",
        },
        {
          title: "Communauté et Esports",
          body: "Valorant est régulièrement mis à jour pour maintenir un équilibre entre les agents et les armes, garantissant une expérience de jeu juste et compétitive. Les développeurs de Riot Games sont attentifs aux retours des joueurs et ajustent le jeu en conséquence, ce qui contribue à une méta dynamique et en constante évolution.",
        },
      ],
    },
    {
      title: "League of legends",
      backgroundImageSrc:
        "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
      subSections: [
        {
          title: "Concept et Gameplay",
          body: "League of Legends (LoL), développé et publié par Riot Games, est un jeu en ligne multijoueur de bataille arène (MOBA) sorti en octobre 2009. Il a rapidement gagné en popularité et est devenu un pilier de la scène esports mondiale. Ce jeu est acclamé pour sa profondeur stratégique, sa dynamique compétitive et son vaste univers.",
        },
        {
          title: "Champions et Compétences",
          body: 'League of Legends oppose deux équipes de cinq joueurs dans une bataille stratégique sur une carte appelée la "Faille de l\'invocateur". Chaque joueur contrôle un "champion" avec des capacités uniques et un style de jeu distinct. L\'objectif est de détruire le Nexus ennemi, situé au cœur de leur base, après avoir franchi des lignes de tours de défense et combattu des champions adverses.',
        },
        {
          title: "Cartes et Modes de Jeu",
          body: "LoL offre plus de 150 champions, chacun avec un ensemble unique de compétences et un rôle spécifique dans l'équipe (tel que tank, support, carry, etc.). Cette diversité permet une multitude de stratégies et de combinaisons, rendant chaque partie unique et complexe.",
        },
        {
          title: "Profondeur Stratégique",
          body: "Bien que la Faille de l'invocateur soit la carte la plus jouée, League of Legends propose d'autres cartes et modes de jeu, comme ARAM (All Random All Mid) et Teamfight Tactics (TFT), un mode de jeu auto-battler. Ces variations ajoutent de la richesse et de la diversité au jeu, offrant aux joueurs différentes façons de s'engager avec le contenu.",
        },
        {
          title: "Esports et Compétition",
          body: "Le gameplay de LoL est profond et complexe, exigeant une connaissance approfondie des champions, des objets, des stratégies d'équipe et des timings. La coordination et la communication au sein de l'équipe sont essentielles, et chaque décision peut avoir un impact significatif sur l'issue de la partie.",
        },
      ],
    },
  ];
  return (
    <div className="App pb-8">
      <h1 className="text-red-500 text-4xl font-bold uppercase p-8">
        Riot games
      </h1>
      <UnorderedList>
        {games.map((game) => {
          return (
            <li>
              <GameSection {...game} />
            </li>
          );
        })}
      </UnorderedList>
    </div>
  );
}
