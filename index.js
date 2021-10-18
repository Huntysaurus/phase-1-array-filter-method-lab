function findMatching(arr, letter) {
  return arr.filter(el => el.toLowerCase().startsWith(letter.toLowerCase()))
}

function fuzzyMatch(arr, letter) {
  return arr.filter(el => el.startsWith(letter))
}

function matchName(arr, name) {
  console.log('-----', name)
  return arr.filter(function(element) {
    return element.name === name 
  })
}
