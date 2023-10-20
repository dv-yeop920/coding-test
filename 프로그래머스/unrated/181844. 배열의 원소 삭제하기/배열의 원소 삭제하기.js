function solution(arr, delete_list) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {

        for(let j = 0; j < delete_list.length; j++) {

            if (arr[i] === delete_list[j]) {
                delete arr[i]
            }
        }
    }
    arr.map(item => item !== null && result.push(item));
    return result;
}