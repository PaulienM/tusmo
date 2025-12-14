import {test, describe, expect} from 'vitest'
import {Game} from "../../app/domain/Game";
import {GameStatusEnum} from "../../app/domain/GameStatusEnum";

describe('Test de la classe Game', () => {
    test('Partie gagnée si le premier mot correspond à la solution', () => {
        const game = new Game('solution', ['solution']);
        expect(game.status).toBe(GameStatusEnum.WON)
    })
})