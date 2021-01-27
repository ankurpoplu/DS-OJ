function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let bay = input[0].trim().split(' ').map(Number)
    let count = 1
    for(let i=0;i<num;i++){
        if(bay[i]>bay[i+1]){
            // console.log(bay[i])
            count++
        }
    }
    console.log(count)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`6
    1 2 4 3 5 8`)
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