function runProgram(input){
    input = input.trim().split("")
    let bay = input
    // console.log(bay)
    let count = 0
    let str = ''
    for(let i=0;i<bay.length;i++){
        str = str+bay[i]
        // console.log(str)
        for(let j=i+1;j<bay.length;j++){
            str = str + bay[j]
            // console.log(str)
            let revstr = ''
            for(let k=str.length-1;k>=0;k--){
                revstr = revstr + str[k]
            }
            if(str===revstr){
                let len = str.length
                if(count<len){
                    count = len
                }
            }
        }
        str = ''
    }
    if(count>1){
        console.log(count)
    }else{
        console.log(1)
    }
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`thisracecarisgood`)
}
else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
    runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    }); 
}