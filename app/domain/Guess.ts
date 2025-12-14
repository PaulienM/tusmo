import { GuessLetterStatusEnum } from "./GuessLetterStatusEnum";

export class Guess {
	value: string;
	feedback: { letter: string; status: GuessLetterStatusEnum }[];

	constructor(solution: string, guess: string) {
		this.value = guess;
		const guessArray = guess.split("");
		this.feedback = guessArray.map((value) => ({
			letter: value,
			status: GuessLetterStatusEnum.INCORRECT,
		}));
		guessArray.forEach((value, index) => {
			if (value === solution[index]) {
				this.feedback[index].status = GuessLetterStatusEnum.CORRECT;
			}
		});

		const solutionWithoutCorrect = solution
			.split("")
			.filter(
				(_, index) =>
					this.feedback[index].status !== GuessLetterStatusEnum.CORRECT,
			);
		guessArray.forEach((value, index) => {
			if (this.feedback[index].status === GuessLetterStatusEnum.CORRECT) {
				return;
			}

			if (solutionWithoutCorrect.indexOf(value) > -1) {
				this.feedback[index].status = GuessLetterStatusEnum.WRONG_POSITION;
				solutionWithoutCorrect.splice(solutionWithoutCorrect.indexOf(value), 1);
			}
		});
	}
}
