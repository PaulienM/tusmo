import {GameStatusEnum} from "./GameStatusEnum";

export class Game {
    static MAX_ATTEMPTS = 6;

    solution: string;
    status: GameStatusEnum = GameStatusEnum.NOT_STARTED;
    guesses: string[] = [];

    constructor(solution: string, guesses: string[] = []) {
        this.solution = solution;
        guesses.forEach((guess) => this.addGuess(guess));
    }

    public addGuess(guess: string): void {
        this.guesses.push(guess);
        this.status = GameStatusEnum.IN_PROGRESS;
        if (this.guesses.length >= Game.MAX_ATTEMPTS) {
            this.status = GameStatusEnum.LOST;
        }
        if (guess === this.solution) {
            this.status = GameStatusEnum.WON;
        }
    }
}