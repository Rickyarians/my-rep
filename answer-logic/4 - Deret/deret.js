const NextNumberPattern = (array) => {
    let dynamic = false
    // Check that the array has at least 3 numbers
    if (array.length < 3) {
      return "Array must have at least 3 numbers";
    }
  
    var firstpattern = array[1] - array[0];
    let nextAdd = 0
    for (var i = 2; i < array.length; i++) {
      if (array[i] - array[i-1] != firstpattern) {
            dynamic = true
            patternbefore = array[i-1] - array[i-2]
            patternafter = array[i] - array[i-1]
            nextAdd = patternafter + (patternafter - patternbefore)
      }
    }

    if(dynamic){
      var nextNumber = array[array.length - 1] + nextAdd
    } else {
      var nextNumber = array[array.length - 1] + firstpattern 
    }
    return nextNumber
  
}


const generateArrayNumberPattern = (arr, length) => {
      let arrAdd = arr
      let arraylength = arr.length
      let iterate = length - arraylength

      for(i = 0; i < iterate; i++) {
          arrAdd.push(NextNumberPattern(arrAdd))
      }
      return arrAdd
}

console.log(NextNumberPattern([5, 8, 11, 14, 17]))

console.log(NextNumberPattern([5, 8, 13, 20, 29]))

console.log(NextNumberPattern([1, 4, 9, 16, 25, 36]))



console.log(generateArrayNumberPattern([5, 8, 11, 14, 17], 10))

console.log(generateArrayNumberPattern([5, 8, 13, 20, 29], 10))

