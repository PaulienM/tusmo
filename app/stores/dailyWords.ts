import {defineStore} from "pinia";
import srand from "../utils/randomize";

export const useDailyWordsStore = defineStore('dailyWords', (): { main: string } => {
    const {getWordByRandomNumber} = useWordList();

    const currentDate: number = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const randomizer = srand(currentDate);

    return {
        main: getWordByRandomNumber(randomizer()),
    };
})