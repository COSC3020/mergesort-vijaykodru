function mergesort(array) {
    var length = array.length;
    if(array.length <= 1){
        return array
    }
    else{
        for(let i = 1; i < length; i *= 2){
            for(let LE = 0; LE < length - 1; LE += 2*i){
                let Mid = Math.min(LE + i - 1, length - 1);
                let RE = Math.min(LE + (2 * i - 1), length - 1);

    
                let LS = LE;
                let RS = Mid + 1;
                let merged = [];
    
                while (LS <= Mid && RS <= RE) {
                    if (array[LS] <= array[RS]) {
                        merged.push(array[LS++]);
                    } else {
                        merged.push(array[RS++]);
                    }
                }
    
                while (LS <= Mid) {
                    merged.push(array[LS++]);
                }
    
                while (RS <= RE) {
                    merged.push(array[RS++]);
                }
    
                for (let k = LE; k <= RE; k++) {
                    array[k] = merged[k - LE];
                }
            }
        }
        return array

    }
}


/*
Sources used:

1. Geek for geeks
2. Stackoverflow
3. looked over the fellow classmates repositories
    a. ross223
    b. Assel-Alijazwe

*/
