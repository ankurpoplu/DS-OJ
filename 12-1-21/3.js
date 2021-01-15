function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    let count = 0
    for(let i=0;i<num;i++){
        if(arr[i]==2||arr[i]==3){
            count++
        }
    }
    console.log(count)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`8
    2 3 1 1 3 2 5 6`)
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