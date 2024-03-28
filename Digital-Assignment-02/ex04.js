function countVowels(string) {
    var count = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (var index = 0; index < string.length; index++) {
        if (vowels.includes(string[index]) == true) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Detonate!'))