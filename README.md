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
bin/filters.sh words.txt > app/assets/daily-words.json
iconv -t ASCII//TRANSLIT sutom.txt > normalized-words.txt
bin/filters.sh normalized-words.txt > app/assets/filtered-words.json
bin/filters.sh normalized-words.txt 6 > app/assets/filtered-words-6.json
bin/filters.sh normalized-words.txt 7 > app/assets/filtered-words-7.json
bin/filters.sh normalized-words.txt 8 > app/assets/filtered-words-8.json
bin/filters.sh normalized-words.txt 9 > app/assets/filtered-words-9.json
bin/filters.sh normalized-words.txt 10 > app/assets/filtered-words-10.json
```