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

function union(value, index, self){
  self = [1, 2, 3], [1, 5, 3, 6], [1, 5, 4], [2, 7, 1];
  return self.indexOf(value) === index;
}

function range(){

}