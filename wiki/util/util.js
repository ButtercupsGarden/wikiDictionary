const fs = require('fs')

const uri = 'data.JSON'
let data = fs.readFileSync(uri)

function getAllPhrases() {
  return JSON.parse(data)
}

function getActivePhrases() {
  return JSON.parse(data).filter((phrase) => phrase.active)
}

function addPhrase(phrase, translate, active = false) {
  let phrases = JSON.parse(data)
  let maxId = Math.max(...phrases.map(i => i.id))

  let newPhrase = {
    id: maxId + 1,
    phrase: phrase,
    translate: translate,
    active: active
  }

  phrases.push(newPhrase)
  fs.writeFileSync('data.JSON', JSON.stringify(phrases, null, 2))
  return newPhrase
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

module.exports = {
  getAllPhrases,
  getActivePhrases,
  addPhrase,
  shuffle
}
