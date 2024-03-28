function reverseNumber(number) {
    auxList = [];
    auxNum = number;

    while (auxNum > 9) {
        auxList.push(auxNum % 10);
        auxNum = (auxNum  - (auxNum % 10)) / 10;
    }
    auxList.push(auxNum);    

    result = auxList.join('');

    console.log(result);
    return result;
}

reverseNumber(123);

