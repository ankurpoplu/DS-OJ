function runProgram(input){
    input = input.trim().split('\n')
    let array = input[1].trim().split(' ').map(Number)
    // console.log(array)
    let sum = 0
    for (let i=1;i<array.length;i=i+2){
        sum += array[i]
    }
    console.log(sum)
}
if(process.env.USERNAME === "Dell"){
    runProgram(`5
    3 5 0 9 8`);
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