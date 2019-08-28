function changeVocals (str) {
    var dataLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var dataUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // if(str[i] == str[i].toLowerCase()){
    //     for(var j = 0; j<dataLower.length; j++){
    //         if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e'|| str[i] == 'o'){
    //             if(str[i] == dataLower[j]){
    //                 sementara += dataLower[j + 1]
    //             }
    //         }
    //         else{
    //             sementara += str[i]
    //         }
    //     }
    // }
    // else if(str[i] == str[i].toUpperCase()){
    //     for(var j = 0; j<dataUpper.length; j++){ 
    //         if(str[i] == 'A' || str[i] == 'I' || str[i] == 'U' || str[i] == 'E'|| str[i] == 'O'){
    //             if(str[i] == dataUpper[j]){
    //                 sementara += dataUpper[j + 1]
    //             }
    //         }
    //         else{
    //             sementara += str[i];
    //         }
    //     }
    // }

    var sementara = '';

    for(var i = 0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o'){
            for(var j = 0; j<dataLower.length; j++){
                if(str[i] == dataLower[j]){
                    sementara += dataLower[j + 1];
                }
            }
        }
        else  if(str[i] == 'A' || str[i] == 'I' || str[i] == 'U' || str[i] == 'E' || str[i] == 'O'){
            for(var j = 0; j<dataUpper.length; j++){
                if(str[i] == dataUpper[j]){
                    sementara += dataUpper[j + 1];
                }
            }
        }
        else{
            sementara += str[i];
        }
        
    }
    return sementara;
}

function reverseWord (str) {
    var sementara = str.split('');
    for(var i = 0; i<sementara.length; i++){
        for(var j = i + 1; j<sementara.length; j++){
            if(i < j){
                var balik = sementara[i];
                sementara[i] = sementara[j];
                sementara[j] = balik;
            }
        }
    }

    var hasil = sementara.join('');
    
    return hasil;
}

function setLowerUpperCase (str) {
    var dataLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var dataUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var sementara = '';
    for(var i = 0; i<str.length; i++){
        
        if(str[i] == ' '){
            sementara += ' ';
        }
        else if(str[i] == str[i].toLowerCase()){
            for(var j = 0; j<dataLower.length; j++){
                if(str[i] == dataLower[j]){
                    sementara += dataUpper[j];
                }
            }
        }
        else if(str[i] == str[i].toUpperCase()){
            for(var j = 0; j<dataUpper.length; j++){
                if(str[i] == dataUpper[j]){
                    sementara += dataLower[j];
                }
            }
        }
    }
    
    return sementara;
}

function removeSpaces (str) {
    var hasil = '';
    for(var i =0; i<str.length; i++){
        if(str[i] !== ' '){
            hasil += str[i];
        }
    }
    
    return hasil;
}

function passwordGenerator (name) {
    var vocal = changeVocals(name);
    var reverse = reverseWord(vocal);
    var set = setLowerUpperCase(reverse);
    var remove = removeSpaces(set);
    
    return remove;
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'