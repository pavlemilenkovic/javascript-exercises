const sumAll = function(left, right) {
    // Ensure left is smaller than right
    if (left > right) {
        let temp = left;
        left = right;
        right = temp;
    }

    // Validate inputs
    if (left < 0 || right < 0 || 
        typeof left !== 'number' || typeof right !== 'number' ||
        !Number.isInteger(left) || !Number.isInteger(right)) {
        return 'ERROR';
    }

    // Calculate the sum
    let sum = 0;
    for (let i = left; i <= right; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
