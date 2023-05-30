function solution(s){
    let count1 = 0;
    let count2 = 0;
    let py = [...s].map(item => {
        item === 'p' || item === 'P'? count1++ : null;
        item === 'y' || item === 'Y' ? count2++ : null;
        
    });
    if(count1 === count2) {
            return true;
        }
        else {
            return false;
        }
    console.log(count1)
}