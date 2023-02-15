const createPyramid = (start, height) => {
  let n = height;
  let string = "";
  let count = start.charCodeAt(0) - 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      string += String.fromCharCode(count + 65);
      count++;
    }
    string += "\n";
  }

  return string
}

console.log(createPyramid('B', 3))

function generatePascalArrays(num) {
  var result = [[1],[1,1]];
  for (var i = 2; i < num; i++) {
    result[i] = [];
    result[i][0] = 1;
    for (var j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][j] = 1;
  }
  return result;
}

function pascals(num) {  
  if (num <= 1) {
    console.log(num);
  }
  var result = generatePascalArrays(num),  
      width = Math.max(...result[result.length-1]).toString().length;  
  for (var i = 0; i < result.length; i++) {
	let preOffsetter = result[result.length-i-1].length * Math.floor(width/3) + result.length - i
	console.log(' '.repeat(preOffsetter) + result[i].map((x) => ' '.repeat(width - x.toString().length) + x));
  }
}

pascals(6)