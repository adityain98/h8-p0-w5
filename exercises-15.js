var hasil = 0;
var counter = 0;
function makanTerusRekursif(waktu) {
    if(counter == 0){
        counter = 1;
        hasil = 0;
    }
    if(waktu < 1){
        counter = 0;
        return hasil;
    }
    else{
        hasil += 1;
        return makanTerusRekursif(waktu - 15);
    }
}
  
// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0