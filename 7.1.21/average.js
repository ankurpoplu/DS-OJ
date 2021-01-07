function runProgram(input){
    input = input.trim().split('\n')
    let array = input[1].trim().split(' ').map(Number)
    // console.log(array)
    let sum = 0
    for(let i=0;i<array.length;i++){
        sum += array[i]
    }
    let avg = sum/array.length
    console.log(avg)
}
if(process.env.USERNAME === "Dell"){
    runProgram(`4
    2 5 0 9`);
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