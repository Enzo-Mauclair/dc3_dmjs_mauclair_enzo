function inversercaracteres(cara) {

    var result = "";
    var i = cara.length - 1;

    while (i >= 0) {
      result += cara[i];
      i--;
    }

      return result;
    }

    console.log(inversercaracteres("inversecemot"));
    