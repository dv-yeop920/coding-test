function solution(s) {
    let num = 0;
    let result = [...s];
    
    for(let i = 0; i < s.length; i++) {
        num += i;
    }
    if(s.length % 2 !== 0) {
            return result.splice(Math.round(num/s.length) , 1).join("");
        
    }
    if (s.length % 2 === 0) {
            return result.splice(Math.round(num/s.length) -1 , 2).join("");
        }
  
}