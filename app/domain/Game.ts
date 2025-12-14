import {GameStatusEnum} from "./GameStatusEnum";

export class Game {
    solution: string;
    status: GameStatusEnum = GameStatusEnum.NOT_STARTED;
    guesses: string[] = [];

    constructor(solution: string, guesses: string[] = []) {
        this.solution = solution;
        guesses.forEach((guess) => this.addGuess(guess));
    }

    public addGuess(guess: string): void {
        this.guesses.push(guess);
        if (guess === this.solution) {
            this.status = GameStatusEnum.WON;
        }
    }
}