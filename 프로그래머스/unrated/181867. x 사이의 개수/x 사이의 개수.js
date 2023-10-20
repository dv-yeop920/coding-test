function solution(myString) {
    const result = [];
    const filterStr = 
          myString.split("x")
            .map((item) => {
                result.push(item.length);
        })
    
    return result;
}