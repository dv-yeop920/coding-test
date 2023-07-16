function solution(my_string, overwrite_string, s) {
    const myString = [...my_string];
    myString.splice(s, overwrite_string.length, overwrite_string);
    return myString.join("");
}