function solution(rsp) {
    var answer = [];
    const newRsp = [...rsp];
    for(const i of newRsp) {
        if(i === "2"){
            answer.push("0");
        }
        if(i === "0"){
            answer.push("5");
        }
        if(i === "5"){
            answer.push("2");
        }
    }
    return answer.join("");
}