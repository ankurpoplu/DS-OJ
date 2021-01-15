function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let sum = 0
    for(let i=0;i<num;i++){
        input.shift()
        let bay = input[i].trim().split(' ').map(Number)
        if(bay.length===1&&bay[0]%2!==0){
            console.log('No')
        }else{
            console.log('Yes')
        }

    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`2
    1
    5
    4
    1 2 3 4`)
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