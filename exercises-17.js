var hasil = 0;
var sementara = 0;
var tampung = 0;
var counter = 0;
var strAngka = '';
function kaliTerusRekursif(angka) {
    if(counter == 0){
        hasil = 1;
        sementara = 0;
        counter = 1;
        tampung = 0;
        strAngka = angka.toString();
    }

    if(tampung == strAngka.length){
        if(hasil > 9 ){
            counter = 0;
            return kaliTerusRekursif(hasil)
        }
        else{
            counter = 0;
            return hasil;
        }
    }
    else{
        sementara = parseInt(strAngka[tampung]);
        tampung += 1;
        hasil *= sementara;
        return kaliTerusRekursif(angka);
    }
}
  
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6