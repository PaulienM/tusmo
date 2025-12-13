import filteredWords from '~/assets/filtered-word.txt?raw'

const words: Array<string> = filteredWords.split('\n').filter(mot => mot.trim() !== '');

export default words;