const solution = require("./daysCount.js");

let t1 = {    
    "2020-01-05": 8,
    "2020-01-06": 2,    
};
let a1 = {
    Mon: 2, Tue: 3, Wed: 4, Thu: 5, Fri: 6, Sat: 7, Sun: 8 
}

let t2 = {
    "2020-01-01": 4,
    "2020-01-02": 4,
    "2020-01-03": 6,
    "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -2,
};
let a2 = {
    Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 
}

let t3 = {
    "2020-01-01": 6,    
    "2020-01-04": 12,
    "2020-01-05": 14,
    "2020-01-06": 2,
    "2020-01-07": 4,    
};
let a3 = {
    Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 
}

let t4 = {    
    "2020-01-05": 13,
    "2020-01-06": 1,
    "2020-01-07": 3,
    "2020-01-08": 5,
};
let a4 = {
    Mon: 1, Tue: 3, Wed: 5, Thu: 7, Fri: 9, Sat: 11, Sun: 13 
}

let t5 = {
    "2020-01-01": 5,
    "2020-01-02": 2,
    "2020-01-03": 3,
    "2020-01-04": 0,    
    "2020-01-07": 6,    
};
let a5 = {
    Mon: 4, Tue: 6, Wed: 5, Thu: 2, Fri: 3, Sat: 0, Sun: 2 
}

test("compare answers", () => {
    expect(solution(t1)).toEqual(a1);
    expect(solution(t2)).toEqual(a2);
    expect(solution(t3)).toEqual(a3);
    expect(solution(t4)).toEqual(a4);
    expect(solution(t5)).toEqual(a5);
})