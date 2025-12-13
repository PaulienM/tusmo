export default function srand(seed: number): () => number {
    // Un générateur de nombres aléatoires basé sur la seed (algorithme Lehmer)
    let m = 2 ** 32; // Un grand nombre (modulus)
    let a = 1664525; // Un facteur multiplicatif
    let c = 1013904223; // Une constante ajoutée

    // Fonction pour obtenir un nombre aléatoire entre 0 et 1 basé sur la seed
    return (): number => {
        seed = (a * seed + c) % m;
        return seed / m;
    }
}