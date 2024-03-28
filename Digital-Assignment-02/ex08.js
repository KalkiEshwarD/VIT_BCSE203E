numerologyNumberChart = {
    'A': 1, 'B': 2, 'C': 3,
    'D': 4, 'E': 5, 'F': 8,
    'G': 3, 'H': 5, 'I': 1,
    'J': 1, 'K': 2, 'L': 3,
    'M': 4, 'N': 5, 'O': 7,
    'P': 8, 'Q': 1, 'R': 2,
    'S': 3, 'T': 4, 'U': 6,
    'V': 6, 'W': 6, 'X': 5,
    'Y': 1, 'Z': 7,
}

function findDestinyNumber(name) {
    num = createFirstNum(name);
    destinyNumber = reduceNumber(num);
    return destinyNumber;
}

function createFirstNum(name) {
    string = name.toUpperCase();
    auxList = [];
    for (var i = 0; i < string.length; i++) {
        auxList.push(numerologyNumberChart[string[i]]);
    }
    return parseInt(auxList.join(''));
}

function reduceNumber(number) {
    strNum = number.toString();
    numList = strNum.split('');

    if (strNum.length == 1) {
        return number;
    } else if (number == 11 | number == 22 | number == 33) {
        return number;
    } else {
        auxNum = 0;
        for (var i = 0; i < strNum.length; i++) {
            auxNum += parseInt(numList[i]);
        }
        return reduceNumber(auxNum);
    }
}

function isMasterNumber(number) {
    strNum = number.toString();
    for (var i = 0; i < strNum.length; i++) {
        if (strNum[i] != strNum[0]) {
            return false;
        }
    }
    return true;
}


// TESTS
// console.log(isMasterNumber(3344));
// console.log(reduceNumber(73));
// console.log(createFirstNum('teena'));
console.log(findDestinyNumber('kalki'));