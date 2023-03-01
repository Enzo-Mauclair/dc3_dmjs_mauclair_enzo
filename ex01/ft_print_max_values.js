function plusGrandesValeurs(array){
    var plusgrand1 = 0;
    var plusgrand2 = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > plusgrand1){
            plusgrand2 = plusgrand1;
            plusgrand1 = array[i];
        }
        else if(array[i] > plusgrand2){
            plusgrand2 = array[i];
        }
    }
    return [plusgrand1,plusgrand2];
}

console.log(plusGrandesValeurs([10,75,21,130,33,99,23]));