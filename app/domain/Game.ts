import {GameStatusEnum} from "./GameStatusEnum";
import words from '../assets/filtered-words.json'
import {Guess} from "./Guess";

export class Game {
    static MAX_ATTEMPTS = 6;

    solution: string;
    status: GameStatusEnum = GameStatusEnum.NOT_STARTED;
    guesses: Guess[] = [];

    constructor(solution: string, guesses: string[] = []) {
        this.solution = solution;
        guesses.forEach((guess) => this.addGuess(guess));
    }

    public addGuess(guess: string): void {
        guess = guess.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        guess = guess.toLowerCase();
        if (this.solution[0] !== guess[0] || this.solution.length !== guess.length) {
            return;
        }
        if (words.indexOf(guess) === -1) {
            return;
        }
        this.guesses.push(new Guess(this.solution, guess));
        this.status = GameStatusEnum.IN_PROGRESS;
        if (this.guesses.length >= Game.MAX_ATTEMPTS) {
            this.status = GameStatusEnum.LOST;
        }
        if (guess === this.solution) {
            this.status = GameStatusEnum.WON;
        }
    }
}