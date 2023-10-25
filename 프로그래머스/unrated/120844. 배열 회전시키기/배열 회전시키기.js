function solution(numbers, direction) {
    const result = [...numbers];
    if (direction === "right") {
        const str = result.splice(-1, 1).join("");
        result.splice(0, 0, parseInt(str));
    }
    if (direction === "left") {
        const str = result.splice(0, 1).join("");
        const str2 = result.splice(-1, 1, parseInt(str));
        result.splice(-1, 0, parseInt(str2));
    }
    return result;
}