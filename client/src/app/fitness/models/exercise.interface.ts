export interface Exercise {
    id: number;
    imgSrc: string;
    title: string;
    sets?: number
    repetitions?: number;
    completed?: boolean;
}


export interface ExerciceDictionary {
    [id: number]: Exercise[];
}