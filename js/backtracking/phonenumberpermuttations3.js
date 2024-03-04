var letterCombinations = function(digits) {
    const result = [];
    if (!digits.length) {
        return [];
    }
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    const bt = (start, combinations) => {
        if (start === digits.length) {
            result.push(combinations.join(''));
            return;
        }
        const letters = map[digits[start]];
        for (let i=0;i<letters.length;i++) {
            combinations.push(letters[i]);
            bt(start+1, combinations);
            combinations.pop();
        }
    }
    bt(0, []);
    return result;
}

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // []