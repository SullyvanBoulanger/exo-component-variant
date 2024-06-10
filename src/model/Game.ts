export interface GameSubsection {
    title : string;
    body : string;
}

export interface Game {
    title: string;
    backgroundImageSrc: string;
    subSections : GameSubsection[];
}