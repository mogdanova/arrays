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

function range(){
  console.log(sumInRange( 10 ));
  console.log(sumInRange( 1, 11 ));
  console.log(sumInRange( 1, 10, 3 ));
  console.log(sumInRange( 8, null, 3 ));
  console.log(sumInRange( 8, null ));
  console.log(sumInRange( -2, -5 ));
  console.log(sumInRange( -5, -2 ));
  console.log(sumInRange( -5, -2, 2 ));
}

function sumInRange(start, end, step) {
  let arr = [];
  if(step == undefined) step = 1;
  if(end == null || end == undefined){
    for(var i = 0; i < start; i += step){
      arr.push(i);
    }
  }
  for(let i = start; i < end; i += step){
    arr.push(i);
  }
  return arr;
}
