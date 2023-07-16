function solution(arr, intervals) {
    const result = [];
    for(let i = 0; i < intervals.length; i++) {
        const newItem = arr.slice(intervals[i][0] , intervals[i][1]+1);
        for(let j = 0; j < newItem.length; j++) {
            result.push(parseInt(newItem[j]));
        }
    }
    return result;
}