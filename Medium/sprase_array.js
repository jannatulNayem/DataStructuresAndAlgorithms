function matchingStrings(string_arr, query_string){
    let string_object = {}

    string_arr.forEach(element => {
        if(element in string_object) string_object[element]++;
        else string_object[element] = 1
    });

    let output_arr = [];
    query_string.forEach(element => {
        if(element in string_object) output_arr.push(string_object[element])
        else output_arr.push(0);
    })
    return output_arr
}

// sprase(["ab", "ab", "abc"], ["ab", "abc", "bc"])
// sprase(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb","ab"])
// sprase(["def", "de", "fgh"], ["de", "Imn", "fgh"])
sprase(["abcde", "sdaklfj", "asdjf", "na", "hasdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"], ["abcde", "sdaklfj", "asdjf", "na", "basdn"] )
