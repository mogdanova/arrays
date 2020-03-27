var start = document.getElementById("start");
var stop = document.getElementById("stop");
var step = document.getElementById("step");
console.log(start);
console.log(stop);
console.log(step);

function initial(m, k){
  m = [1,2,3,4,5,6,7,8,9,0];
  k = 4;
  m.splice(m.length-k, k);
  return m;
}

function compact(arr) {
  arr = [1, 2, 0, false];
  let onlyTruthyValues = arr.filter(element => Boolean(element) === true);
  return onlyTruthyValues;
}

function union(arr){
  arr = [1, 2, 3, 1, 5, 3, 6, 1, 5, 4, 2, 7, 1];
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;  
}

function range(a, b, c){
  let result = [];
  if(b == null){
    for (var i = 0; i < a; i+=c) {
      result.push(i);
    }
  }
  else {
    for (var i = a; i < b; i+=c) {
      result.push(i);
    }
  }
  return result;
}