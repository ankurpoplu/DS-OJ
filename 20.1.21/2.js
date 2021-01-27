function runProgram(input){
    input = input.trim().split('').sort()
    let bay = input
    let count = 0
    let a = bay[0]
    let total = 0
    for(let i=0;i<bay.length;i++){
        if(a===bay[i]){
            count++
        }else if(a!==bay[i]){
            a=bay[i]
            count = 0
            count++
        }
        total = total + count
    }
    console.log(total)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`abcab`)
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