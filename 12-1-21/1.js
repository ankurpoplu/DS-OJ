function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    // console.log(num)
    let bay = input[1].trim().split(' ').map(Number)
    // console.log(bay)
    let sum = 0
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            if(i<j){
                let diff = j-i
                let absDiff = Math.abs(bay[j]-bay[i])
                // console.log(diff)
                if(diff===2){
                    sum += absDiff
                }
                else if(diff>2){
                    let flag = true
                    for(let k=2;k<diff;k++){
                        if(diff%k==0){
                            flag = false
                            break;
                        }
                    }
                    if(flag===true){
                        // console.log(diff)
                        sum += absDiff
                    }
                }
            }
        }
    }
    console.log(sum)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`8
    5 12 32 11 4 56 5 0`)
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