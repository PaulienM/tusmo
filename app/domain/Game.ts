import {GameStatusEnum} from "./GameStatusEnum";
import words from '../assets/filtered-words.json'
import {Guess} from "./Guess";
import {GuessLetterStatusEnum} from "./GuessLetterStatusEnum";

export class Game {
    static MAX_ATTEMPTS = 6;

    solution: string;
    status: GameStatusEnum = GameStatusEnum.NOT_STARTED;
    guesses: Guess[] = [];
    feedback: {letter: string, found: false}[];
    wrongPositionLetters: string[] = [];

    constructor(solution: string, guesses: string[] = []) {
        this.solution = solution;
        this.feedback = solution.split('').map((value) => ({letter: value, found: false}));
        guesses.forEach((guess) => this.addGuess(guess));
    }

    public addGuess(guess: string): boolean {
        guess = guess.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        guess = guess.toLowerCase();
        if (this.solution[0] !== guess[0] || this.solution.length !== guess.length) {
            return false;
        }
        if (words.indexOf(guess) === -1) {
            return false;
        }
        const guessObject = new Guess(this.solution, guess);
        this.guesses.push(guessObject);
        guessObject.feedback.forEach((value, index) => {
            if (value.status === GuessLetterStatusEnum.CORRECT) {
                this.feedback[index].found = true;
            }
        })
        this.wrongPositionLetters = [...new Set([
            ...this.wrongPositionLetters,
            ...guessObject.feedback.filter((value) => value.status === GuessLetterStatusEnum.WRONG_POSITION).map((value) => value.letter)
        ])];
        this.status = GameStatusEnum.IN_PROGRESS;
        if (this.guesses.length >= Game.MAX_ATTEMPTS) {
            this.status = GameStatusEnum.LOST;
        }
        if (guess === this.solution) {
            this.status = GameStatusEnum.WON;
        }

        return true;
    }
}