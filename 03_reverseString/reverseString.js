const reverseString = function(string) {
    let revString = ""
    for(let i = 0; i < string.length; i++) {
        let c = string.charAt(string.length - 1 - i)
        revString += c;
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
