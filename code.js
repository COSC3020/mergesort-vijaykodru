function mergesort(array) {
    var length = array.length;
    if(array.length <= 1){
        return array
    }
    else{
        for(let i = 1; i < length; i *= 2){
            for(let LE = 0; LE < length - 1; LE += 2*i){
                let Mid = LE + i - 1
                let RE = Math.min(LE + (2 * (i - 1)), length - 1)
    
                let LS = LE;
                let RS = Mid + 1;
    
                while(LS <= Mid && RS <= RE){
                    if(array[LS] <= array[RS]){
                        LS++
                    }
                    else{
                        let temp = array[RS];
                        for(let j = RS; j > LS; j--){
                            array[j] = array[j - 1];
                        }
                        array[LS] = temp;
                        LS++;
                        Mid++;
                        RS++;
                    }
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
