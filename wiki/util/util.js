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

module.exports = {
  getAllPhrases,
  getActivePhrases,
  addPhrase
}