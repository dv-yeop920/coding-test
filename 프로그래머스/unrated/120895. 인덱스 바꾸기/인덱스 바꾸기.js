function solution(myString, num1, num2) {
    const result = [...myString];
    const newStr = result.splice(num1, 1, myString[num2]);
    const newStr2 = result.splice(num2, 1, myString[num1]);
 
    return result.join("");
}