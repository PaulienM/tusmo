#! /bin/bash

# Vérifie qu'un fichier a été fourni
if [[ -z "$1" ]]; then
    echo "Usage : $0 fichier.txt"
    exit 1
fi

file="$1"
length="$2"

# Vérifie que le fichier existe
if [[ ! -f "$file" ]]; then
    echo "Erreur : fichier introuvable"
    exit 1
fi

if [[ -n "$length" && ! "$length" =~ ^[0-9]+$ ]]; then
    echo "Erreur : la longueur doit être un nombre entier positif"
    exit 1
fi

if [[ -n "$length" ]]; then
    # longueur exactement égale à $length
    grep -E "^[a-zàâäéèêëîïôöùûüç]{${length}}$" "$file"
else
    # longueur >= 5 par défaut
    grep -E "^[a-zàâäéèêëîïôöùûüç]{5,}$" "$file"
fi