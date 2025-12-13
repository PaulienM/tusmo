import words from "../utils/words";

export const useWordList = () => {
    const getWordByIndex = (index: number): string => {
        const result = words[index];
        if (typeof result !== 'string') {
            throw new Error(`Le mot à l'index ${index} est introuvable`);
        }

        return result;
    }

    const getWordByRandomNumber = (random: number): string => {
        return getWordByIndex(Math.floor(random * (words.length - 1)))
    }

    return {
        getWordByIndex,
        getWordByRandomNumber,
    };
}