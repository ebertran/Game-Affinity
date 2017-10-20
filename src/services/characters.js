import axios from 'axios'

const api_key = "d7991f9eeb5808246e2d17e09f7be99b4becd042"
const url_base = "https://proxy-game.herokuapp.com/api/characters/"

class CharactersService {

  getCharacterInfo(characterId) {
    return axios(`${url_base}?api_key=${api_key}&filter=id%3A${characterId}%3B&format=json`)
  }
}

/* exportamos un singleton de la clase */
export default new CharactersService()

/*
export const characterInfo1 = characterId => {
  return new Promise( (resolve, reject) =>
    resolve(getCharacterInfo(characterId))
  )
}

export const characterInfo2 = characterId => {
  return new Promise( (resolve, reject) =>
    resolve(getCharacterInfo(characterId))
  )
}
*/


//const characterIdUrl = axios(
//  `${url_base}?api_key=${api_key}&filter=id${character_id}&format=json`
//  )

//export const characterInfo = () => {
//  return new Promise( (resolve, reject) =>
//    resolve(characterIdUrl)
//  )
//}

//https://www.giantbomb.com/api/characters/?api_key=d7991f9eeb5808246e2d17e09f7be99b4becd042&filter=id%3A14829%3B&format=json