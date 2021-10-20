const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function solution(D) {
    let bool = [false, false, false, false, false, false, false];
    let keys = Object.keys(D);
    let ans = {};
    for (let i= 0; i < keys.length; i++) {
        let dayNum = new Date(keys[i]).getDay();
        let day = days[dayNum];
        bool[dayNum] = true;
        if (day in ans) {
            ans[day] = ans[day] + D[keys[i]];
        }
        else {
            ans[day] = D[keys[i]];
        }
    }    
    fillMissingDays(bool, ans);
    formatAnswer(ans);      
    return ans;
}

function fillMissingDays(bool, ans) {
    for (let i = 0; i < 7; i++) {
        if (!bool[i]) {
            let prev = ((i-1) + 7) % 7;
            let next = ((i+1) + 7) % 7;
            while (!bool[prev]) {
                prev = ((prev - 1) + 7) % 7;
            }
            while (!bool[next]) {
                next = (next + 1) % 7;
            }            
            let gap = ((next - prev) + 7) % 7;
            let diff = ans[days[next]] - ans[days[prev]];            
            ans[days[i]] = ans[days[prev]] + (diff / gap) * (((i - prev) + 7) % 7);
            bool[i] = true;
        }
    }    
}

function formatAnswer(ans) {
    let newAns = {};
    for (let i = 1; i < 7; i++) {
        newAns[days[i]] = ans[days[i]];
    }
    newAns[days[0]] = ans[days[0]];
    console.log(newAns);    
}

module.exports = solution;