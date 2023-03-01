function enleverdoublons(array) {

  return [...new Set(array)];
}

var array = [10, 22, 33, 22, 4, 3];
var arraywithout = enleverdoublons(array);
console.log(arraywithout);