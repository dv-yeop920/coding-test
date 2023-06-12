function solution(names) {
    const newArr = [...names];
    const result = [];
  
    while (newArr.length !== 0) { 
      result.push(newArr.splice(0, 5)[0]);
    }
    return result;
}