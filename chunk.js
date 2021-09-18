const chunkArray = (arr, len) => {
    
    // Init chuncked arr
    const chunckedArr = [];

    // Loop through array
    arr.forEach(val => {
        // Get last element from array
        const last = chunckedArr[chunkArray.length - 1 ];

        // Check if last and if last length is equalto the chunck len
        if (!last || last.length === len){
            chunckedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    
    return chunckedArr;
}

module.exports = chunkArray;