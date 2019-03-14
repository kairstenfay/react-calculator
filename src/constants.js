module.exports = {
    numbers: {
        seven: 7, eight: 8, nine: 9, four: 4, five: 5,
        six: 6, one: 1, two: 2, three: 3, zero: 0
    },
    operands: {
        add: '+', subtract: '-', multiply: '*', divide: '/'
    },
    equations: {
        add: (a, b) => { return Number(a) + Number(b); },
        subtract: (a, b) => { return Number(a) - Number(b); },
        multiply: (a, b) => { return Number(a) * Number(b); },
        divide: (a, b) => { return Number(a) / Number(b); }
    }
};