import { Exercise, ExerciceDictionary } from "../fitness/models/exercise.interface";

const stretchingExercises: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
    { id: 1, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
    { id: 2, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
    { id: 3, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
    { id: 4, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]

const chestExercices: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]

const shouldersExercises: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]

const tricepsExercises: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]

const bicepsExercices: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]
const absExercices: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]
const glutesExercices: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]
const legsExercices: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]
const backExercices: Exercise[] = [
    { id: 0, title: "Dumbbell Shoulder Press", imgSrc: "", sets: 1, repetitions: 10 },
]


export const allExercises: ExerciceDictionary = {
    1: stretchingExercises,
    2: chestExercices,
    3: shouldersExercises,
    4: tricepsExercises,
    5: backExercices,
    6: bicepsExercices,
    7: absExercices,
    8: glutesExercices,
    9: legsExercices,
}

export const muscleGroups = [
    {
        "id": 1,
        "name": "Stretching"
    },
    {
        "id": 2,
        "name": "Chest"
    },
    {
        "id": 3,
        "name": "Shoulders"
    },
    {
        "id": 4,
        "name": "Triceps"
    },
    {
        "id": 5,
        "name": "Back"
    },
    {
        "id": 6,
        "name": "Biceps"
    },
    {
        "id": 7,
        "name": "Abs"
    },
    {
        "id": 8,
        "name": "Glutes"
    },
    {
        "id": 9,
        "name": "Legs"
    }
]



