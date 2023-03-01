function valeursidentiques(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
       return "True";
     }
   }
 }
 return "False";
 }

console.log(valeursidentiques([87, 16, 12, 89 ,33, 33, 64,8]));