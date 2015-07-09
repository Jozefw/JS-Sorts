numbersArr = [5, 15, 33,1,0,5];

function BubSort(numbersArr){
  var isSwapped;
  do{
    isSwapped = false;
    for ( var i=0; i<numbersArr.length-1; i++){
      if(numbersArr[i] > numbersArr[i+1]){
        var temp = numbersArr[i];
        numbersArr[i]=numbersArr[i+1];
        numbersArr[i+1]=temp;
       isSwapped = true;
      }
    }
  }while (isSwapped);
  return numbersArr;
}
var newValue = BubSort(numbersArr);
console.log(numbersArr);
console.log(newValue);

var nonsorted = document.getElementById("preSorted");
nonsorted.innerHTML = numbersArr;
var sorted = document.getElementById("sorted");
sorted.innerHTML = newValue;