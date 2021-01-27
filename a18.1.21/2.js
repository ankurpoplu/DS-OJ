function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let bay = input.map(e=>e.trim().split(' '))
    for(let i=0;i<num;i++){
        bay.shift()
        bay[i] = bay[i].map(Number)
        let flag = false
        for(let j=0;j<bay[i].length;j++){
            let replicate = bay[i][j]
            // console.log(replicate)
            for(let k=j+1;k<bay[i].length;k++){
                if(replicate===bay[i][k]){
                    flag = true
                    break
                }
            }
        }
        if(flag===false){
            console.log('No')
        }else{
            console.log('Yes')
        }
    }
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`3
    1
    1
    2
    1 1
    3
    1 2 3`)
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