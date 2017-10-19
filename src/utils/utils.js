import dictionary from '../dataService/data.js'
import * as games from '../dataService/games.js'

// Get the results as an object and return an array of ids, and the last element will be
// a letter.
function GetIdChar(oTestResult) {
  
  // Convert The Object to an Array
  const aTestResult = []
  for (var letter in oTestResult) {
    aTestResult.push([letter, oTestResult[letter]])
  }

  aTestResult.sort(function(a, b) {
      return b[1] - a[1]
  })

  //const selecForFilter = aTestResult[0][1] - 10

  // Make The Array Of Ids
  const ResultIds = games.CHARACTERS.map(function(game) {

    // Filter the Dictionary
    //const CharsFiltered = dictionary[game].characters.filter(function(character) {
    //  return character.Type[aTestResult[0][0]] >= selecForFilter
    //})

    // Organize The Chars 
    const CharsOrdered = dictionary[game].characters.sort(function(a, b) {
      return (
      ((b.Type[aTestResult[0][0]] * 2.5) + (b.Type[aTestResult[1][0]] * 2)) - 
      ((a.Type[aTestResult[0][0]] * 2.5) + (a.Type[aTestResult[1][0]] * 2))
      )
    })

    return CharsOrdered[0].Id
  })
  
  ResultIds.push(aTestResult[0][0])
  
  return ResultIds
}

export default GetIdChar