const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let rS = "";
    for (let i = 0; i < num; i++) {
        rS += string;
    }

    return rS;
};

// Do not edit below this line
module.exports = repeatString;
