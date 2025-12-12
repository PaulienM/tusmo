#! /bin/bash

# Vérifie qu'un fichier a été fourni
if [[ -z "$1" ]]; then
    echo "Usage : $0 fichier.txt"
    exit 1
fi

file="$1"

# Vérifie que le fichier existe
if [[ ! -f "$file" ]]; then
    echo "Erreur : fichier introuvable"
    exit 1
fi

# Filtre les lignes qui contiennent autre chose qu'une lettre minuscule (filtres des noms propres et mots composés)
grep -E '^[a-zàâäéèêëîïôöùûüç]+$' "$file"