function findFengShuiNumber(address) {
    count = 0;
    for (var i = 0; i < address.length; i++) {
        int = parseInt(address[i]);
        
        // console.log(address[i]);
        // console.log(int);
        console.log(count);
        
        if (int != null) {
            count += int;
        }
    }

    return count;
}

// Tests
console.log(findFengShuiNumber('5 3'));