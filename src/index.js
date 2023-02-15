module.exports = function toReadable (number) {
    if (number === 0) return "zero";
    let obj_1 = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let obj_10 = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let obj_20 = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let result = [];

    if (Math.floor(number / 100) !== 0) {
        result.push(obj_1[Math.floor(number / 100)]);
        result.push("hundred");
    }

    if (Math.floor((number % 100) / 10) === 1) {
        result.push(obj_10[number % 100]);
    }

    if (Math.floor((number % 100) / 10) > 1) {
        result.push(obj_20[Math.floor((number % 100) - (number % 10))]);
    }

    if (Math.floor((number % 100) / 10) !== 1 && number % 10 !==0) {
        result.push(obj_1[number % 10]);
    }

    return result.join(' ');
}
