function sorting(arrNumber) {
    for(var i = 0; i<arrNumber.length; i++){
        for(var j = i + 1; j<arrNumber.length; j++){
            if(arrNumber[i] > arrNumber[j]){
                var sementara = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = sementara;
            }
        }
    }
    return arrNumber;
}
  
function getTotal(arrNumber) {
    var angka = [];
    var jumlah = [];
    var lokasi = 0;
    var hasil = '';

    for(var i = 0; i<arrNumber.length; i++){
        if(i == 0){
            angka.push(arrNumber[i]);
            jumlah.push(1);
        }    
        else{
            var isDuplicate = false;
            for(var j = 0; j<angka.length; j++){
                if(arrNumber[i] == angka[j]){
                    jumlah[j] += 1;
                    isDuplicate = true;
                }
            }

            if(isDuplicate == false){
                angka.push(arrNumber[i]);
                jumlah.push(1);
            }
        }
    }
    lokasi = angka.length - 1;

    if(jumlah.length == 0){
        return ''
    }
    else{
        hasil = 'angka paling besar adalah ' + angka[lokasi] + ' dan jumlah kemunculan sebanyak ' + jumlah[lokasi] + ' kali';
        return hasil;
    }
}
  
function mostFrequentLargestNumbers(arrNumber) {
var listSort = sorting(arrNumber);
var countHighest = getTotal(listSort);
return countHighest;
}
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''