import { Exercise, ExerciceDictionary } from "../fitness/models/exercise.interface";

const stretchingExercises: Exercise[] = [
    { id: 0, title: "Cat-Cow Stretch", imgSrc: "assets/stretch/CatCowStretch.jpg", sets: 2, repetitions: 10 },
    { id: 1, title: "Hamstring Stretch", imgSrc: "assets/stretch/HamstringStretch.jpg", sets: 3, repetitions: 10 },
    { id: 2, title: "Chest Opener", imgSrc: "assets/stretch/ChestOpener.jpg", sets: 3, repetitions: 10 },
    { id: 3, title: "Quadriceps Stretch", imgSrc: "assets/stretch/QuadricepsStretch.jpg", sets: 3, repetitions: 10 },
    { id: 4, title: "Spinal Twist", imgSrc: "assets/stretch/SpinalTwist.jpg", sets: 3, repetitions: 10 }
]

const chestExercices: Exercise[] = [
    { id: 0, title: "Push-Ups", imgSrc: "assets/chest/PushUps.jpg", sets: 3, repetitions: 15 },
    { id: 1, title: "Bench Press", imgSrc: "assets/chest/BenchPress.jpg", sets: 4, repetitions: 10 },
    { id: 2, title: "Dumbbell Flyes", imgSrc: "assets/chest/DumbbellFlyes.jpg", sets: 3, repetitions: 12 },
    { id: 3, title: "Cable Crossovers", imgSrc: "assets/chest/CableCrossovers.jpg", sets: 3, repetitions: 10 },
    { id: 4, title: "Incline Dumbbell Press", imgSrc: "assets/chest/InclineDumbbellPress.jpg", sets: 4, repetitions: 10 }
]

const shouldersExercises: Exercise[] = [
    { id: 0, title: "Lateral Raises", imgSrc: "assets/shoulders/LateralRaises.jpg", sets: 4, repetitions: 12 },
    { id: 1, title: "Front Raises", imgSrc: "assets/shoulders/FrontRaises.jpg", sets: 3, repetitions: 10 },
    { id: 2, title: "Arnold Press", imgSrc: "assets/shoulders/ArnoldPress.jpg", sets: 3, repetitions: 10 },
    { id: 3, title: "Reverse Flyes", imgSrc: "assets/shoulders/ReverseFlyes.jpg", sets: 3, repetitions: 12 },
    { id: 4, title: "Shrugs", imgSrc: "assets/shoulders/Shrugs.jpg", sets: 4, repetitions: 15 }
]

const tricepsExercises: Exercise[] = [
    { id: 0, title: "Tricep Dips", imgSrc: "assets/triceps/TricepDips.jpg", sets: 3, repetitions: 12 },
    { id: 1, title: "Skull Crushers", imgSrc: "assets/triceps/SkullCrushers.jpg", sets: 3, repetitions: 10 },
    { id: 2, title: "Tricep Kickbacks", imgSrc: "assets/triceps/TricepKickbacks.jpg", sets: 3, repetitions: 15 },
    { id: 3, title: "Overhead Tricep Extension", imgSrc: "assets/triceps/OverheadTricepExtension.jpg", sets: 3, repetitions: 12 },
    { id: 4, title: "Close Grip Bench Press", imgSrc: "assets/triceps/CloseGripBenchPress.png", sets: 3, repetitions: 10 }
]

const bicepsExercices: Exercise[] = [
    { id: 0, title: "Bicep Curls", imgSrc: "assets/biceps/BicepCurls.jpg", sets: 3, repetitions: 12 },
    { id: 1, title: "Hammer Curls", imgSrc: "assets/biceps/HammerCurls.jpg", sets: 3, repetitions: 10 },
    { id: 2, title: "Concentration Curls", imgSrc: "assets/biceps/ConcentrationCurls.jpg", sets: 3, repetitions: 10 },
    { id: 3, title: "Preacher Curls", imgSrc: "assets/biceps/PreacherCurls.jpg", sets: 3, repetitions: 10 },
    { id: 4, title: "Cable Bicep Curls", imgSrc: "assets/biceps/CableBicepCurls.jpg", sets: 3, repetitions: 12 }
]
const absExercices: Exercise[] = [
    { id: 0, title: "Crunches", imgSrc: "assets/abs/Crunches.jpg", sets: 3, repetitions: 15 },
    { id: 1, title: "Plank", imgSrc: "assets/abs/Plank.jpg", sets: 3, repetitions: 3 },
    { id: 2, title: "Russian Twists", imgSrc: "assets/abs/RussianTwists.jpg", sets: 3, repetitions: 20 },
    { id: 3, title: "Leg Raises", imgSrc: "assets/abs/LegRaises.jpg", sets: 3, repetitions: 15 },
    { id: 4, title: "Bicycle Crunches", imgSrc: "assets/abs/BicycleCrunches.jpg", sets: 3, repetitions: 20 }
]
const glutesExercices: Exercise[] = [
    { id: 0, title: "Squats", imgSrc: "", sets: 4, repetitions: 12 },
    { id: 1, title: "Lunges", imgSrc: "", sets: 3, repetitions: 10 },
    { id: 2, title: "Hip Thrusts", imgSrc: "", sets: 3, repetitions: 12 },
    { id: 3, title: "Glute Bridges", imgSrc: "", sets: 3, repetitions: 15 },
    { id: 4, title: "Step-Ups", imgSrc: "", sets: 3, repetitions: 10 }
]
const legsExercices: Exercise[] = [
    { id: 0, title: "Leg Press", imgSrc: "", sets: 3, repetitions: 10 },
    { id: 1, title: "Deadlifts", imgSrc: "", sets: 3, repetitions: 10 },
    { id: 2, title: "Calf Raises", imgSrc: "", sets: 4, repetitions: 15 },
    { id: 3, title: "Goblet Squats", imgSrc: "", sets: 3, repetitions: 12 },
    { id: 4, title: "Leg Extensions", imgSrc: "", sets: 3, repetitions: 12 }
]
const backExercices: Exercise[] = [
    { id: 0, title: "Pull-Ups", imgSrc: "", sets: 3, repetitions: 10 },
    { id: 1, title: "Bent Over Rows", imgSrc: "", sets: 3, repetitions: 12 },
    { id: 2, title: "Lat Pulldowns", imgSrc: "", sets: 3, repetitions: 10 },
    { id: 3, title: "Deadlifts", imgSrc: "", sets: 3, repetitions: 10 },
    { id: 4, title: "T-Bar Rows", imgSrc: "", sets: 3, repetitions: 10 }
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



