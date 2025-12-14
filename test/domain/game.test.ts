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

describe('Test de la validation des essais', () => {
    test('Essai non pris en compte si première lettre différente', () => {
        const game = new Game('solution', ['sabotage', 'rutilant']);
        expect(game.guesses).length(1);
        expect(game.guesses[0].value).toBe('sabotage');
    })
    test('Essai non pris en compte si la taille est différente de celle de la solution', () => {
        const game = new Game('solution', ['resolu', 'solutions']);
        expect(game.guesses).length(0);
    })
    test('Suppression des accents des essais', () => {
        const game = new Game('solution', ['scélérat', 'soupçons']);
        expect(game.guesses[0].value).toBe('scelerat');
        expect(game.guesses[1].value).toBe('soupcons');
    })
    test('L\'accent sur une première lettre est valide', () => {
        const game = new Game('enseigne', ['écouteur']);
        expect(game.guesses).length(1);
    })
    test('Tous les caractères sont mis en minuscule', () => {
        const game = new Game('solution', ['SaboTage']);
        expect(game.guesses).length(1);
        expect(game.guesses[0].value).toBe('sabotage');
    })
    test('Seul les mots de la liste sont acceptés', () => {
        const game = new Game('solution', ['ssssssss']);
        expect(game.guesses).length(0);
    })
})