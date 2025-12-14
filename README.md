# TUSMO

## Développement

Lancer l'application en mode dev
```bash
npm run dev
```

Lancer les tests
```bash
npm run test
```

## Les mots

Les mots ont été récupérés sur le site https://www.freelang.com/dictionnaire/dic-francais.php.
Pour filtrer les mots (suppression des noms propres et mots composés)

```bash
iconv -t ASCII//TRANSLIT words.txt > normalized-words.txt
bin/filters.sh normalized-words.txt > app/assets/filtered-words.txt
bin/filters.sh normalized-words.txt 6 > app/assets/filtered-words-6.txt
bin/filters.sh normalized-words.txt 7 > app/assets/filtered-words-7.txt
bin/filters.sh normalized-words.txt 8 > app/assets/filtered-words-8.txt
bin/filters.sh normalized-words.txt 9 > app/assets/filtered-words-9.txt
bin/filters.sh normalized-words.txt 10 > app/assets/filtered-words-10.txt
bin/filters.sh normalized-words.txt 11 > app/assets/filtered-words-11.txt
bin/filters.sh normalized-words.txt 12 > app/assets/filtered-words-12.txt
bin/filters.sh normalized-words.txt 13 > app/assets/filtered-words-13.txt
bin/filters.sh normalized-words.txt 14 > app/assets/filtered-words-14.txt
```