function valeursidentiques(array) {

  var unique = {};

  for (var i of array) 
  {
    if (unique[i]) 
    
    {
      return "True";
    }
    unique[i] = true;
  }

  return "False";
}
console.log(valeursidentiques([87, 16, 12, 89 ,33, 33, 64,8]));