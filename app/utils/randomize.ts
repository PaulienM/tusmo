export default function srand(seed: number): () => number {
	return function() {
		seed = (seed * 9301 + 49297) % 233280; // Un générateur de nombres pseudo-aléatoires basé sur la graine
		return seed / 233280.0; // Retourne un nombre entre 0 et 1
	};
}
