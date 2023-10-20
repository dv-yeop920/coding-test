function solution(myString) {
    const result = 
          myString.split("x")
            .sort()
            .filter(item => item !== "");
    return result;
}