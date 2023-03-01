function inversercaracteres(chaine) {
    var result = "";
    for (var i = chaine.length - 1; i >= 0; i--) {
        result += chaine[i];
      }
    
      return result;
    }

console.log(inversercaracteres("inversecemot"));
