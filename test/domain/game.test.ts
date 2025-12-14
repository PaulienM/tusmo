import {test, describe, expect} from 'vitest'
import {Game} from "../../app/domain/Game";
import {GameStatusEnum} from "../../app/domain/GameStatusEnum";

describe('Test des status de la classe Game', () => {
    test('Partie non commencée si aucun essai n\'a été fait', () => {
        const game = new Game('solution', []);
        expect(game.status).toBe(GameStatusEnum.NOT_STARTED)
    })

    test('Partie en cours si un essai a été fait', () => {
        const game = new Game('solution', ['sabotage']);
        expect(game.status).toBe(GameStatusEnum.IN_PROGRESS);
    })

    test('Partie gagnée si le premier mot correspond à la solution', () => {
        const game = new Game('solution', ['solution']);
        expect(game.status).toBe(GameStatusEnum.WON);
    })

    test('Partie perdue si on fait 6 essais faux', () => {
        const game = new Game('solution', ['sabotage', 'saccager', 'sacrifié', 'sagacité', 'sagement', 'saignant']);
        expect(game.status).toBe(GameStatusEnum.LOST);
    })
})