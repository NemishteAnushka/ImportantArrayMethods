const stringarr = ["abc", "bca", "dbe"]; //out put [021]


function getindex(stringarr) {
  let n = stringarr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let str1 = stringarr[i];
      let str2 = stringarr[j];
      for (let k = 0; k < str1.length; k++) {
        if (str1[k] === str2[k]) return [i, j, k];
      }
    }
  }
  return [];
}
console.log(getindex(stringarr));