export interface Exercise {
    id: number;
    imgSrc: string;
    title: string;
    sets?: number
    repetitions?: number;
}


export interface ExerciceDictionary {
    [id: number]: Exercise[];
}