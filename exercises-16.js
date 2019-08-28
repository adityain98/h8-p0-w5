var hasil = 0;
var counter = 0;
var tampung = 0;
var strAngka = '';
var sementara = 0;
function totalDigitRekursif(angka) {
    if(counter == 0){
        counter = 1;
        hasil = 0;
        tampung = 0;
        strAngka = angka.toString();
    }

    if(tampung == strAngka.length){
        counter = 0;
        return hasil;
    }
    else{
        sementara = parseInt(strAngka[tampung]);
        hasil += sementara;
        tampung += 1;
        return totalDigitRekursif(angka); 
    }
}
  
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

// var a = 512;
// var b = a.toString();

// console.log(b.length);