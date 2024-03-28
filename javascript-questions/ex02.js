function destiny_number(name) {

    _char_num_dict = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 8,
        'G': 3,
        'H': 5,
        'I': 1,
        'J': 1,
        'K': 2,
        'L': 3,
        'M': 4,
        'N': 5,
        'O': 7,
        'P': 8,
        'Q': 1,
        'R': 2,
        'S': 3,
        'T': 4,
        'U': 6,
        'V': 6,
        'W': 6,
        'X': 5,
        'Y': 1,
        'Z': 7,
    }
    _master_numbers = [ 11, 22, 33 ]

    function _reduce_num(num) {
        if (num > 9) {
            num % 10
        }
    }

    val = 0;
    for (var i = 0; i < name.length; i++) {
        val += _char_num_dict[name[i]]  
    }


    return val
}

person_name = 'TEENA'
console.log(destiny_number(person_name.toUpperCase()))

