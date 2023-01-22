function solution(angle) {
    let num = 0;
    if(0 < angle && angle< 90){
        return num + 1;
    }else if(angle === 90){
        return num + 2;
    }else if(90 < angle && angle< 180){
        return num + 3;
    }else if(angle === 180){
        return num + 4;
    }
}

