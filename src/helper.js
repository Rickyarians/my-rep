export const convertMAC = (string) => {
    let [number, mac] = string.split(',')
    let MACresult = mac.match( /.{1,2}/g )
    .join( ':' )

    return `${number},${MACresult}`
}


export const createPyramid = (start, height) => {
    let n = height;
    let string = "";
    let count = start.charCodeAt(0) - 65;
    // External loop
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        string += "&nbsp;&nbsp;";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        string += String.fromCharCode(count + 65);
        count++;
      }
      string += "<br/>";
    }
  
    return string
  }



  const NextNumberPattern = (array) => {
    let dynamic = false
    // Check that the array has at least 3 numbers
    if (array.length < 3) {
      return "Array must have at least 3 numbers";
    }
  
    var firstpattern = array[1] - array[0];
    let patternafter = 0
    let patternbefore = 0
    let nextAdd = 0
    for (let i = 2; i < array.length; i++) {
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
      var nextNumber = array[array.length - 1] + parseInt(firstpattern)
    }
    return nextNumber
  
}


export const generateArrayNumberPattern = (arr, length) => {
      let arrAdd = arr
      let arraylength = arr.length
      let iterate = length - arraylength

      for(let i = 0; i < iterate; i++) {
          arrAdd.push(NextNumberPattern(arrAdd))
      }
      return arrAdd
}