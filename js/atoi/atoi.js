// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim(); // Remove leading and trailing whitespace
    let sign = 1; // Default sign is positive
    let result = 0; // Initialize the result to 0

    // Check for the sign
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1); // Remove the sign character
    } else if (s[0] === '+') {
        s = s.slice(1); // Remove the sign character
    }

    // Iterate through the string and convert each digit to a number
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (charCode < 48 || charCode > 57) { // Check if the character is a digit
            break; // Stop the loop if a non-digit character is encountered
        }
        let digit = charCode - 48; // Convert the character to a number

        // Check for overflow and underflow conditions
        if (result > Math.floor(Number.MAX_SAFE_INTEGER / 10) || (result === Math.floor(Number.MAX_SAFE_INTEGER / 10) && digit > 7)) {
            return sign === 1 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;
        }

        result = result * 10 + digit;
    }

    return result * sign;
};  