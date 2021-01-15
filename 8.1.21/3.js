function runProgram(input){
    input = input.trim().split('\n')
    let array = []
    for(let i=1;i<input.length;i++){
        array[i-1] = input[i].trim().split(' ').map(Number)
    }
    let sum = 0
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]%3==0){
                sum += array[i][j]
            }
        }
    }
    console.log(sum)
}
if(process.env.USERNAME === "Dell"){
    runProgram(`2 3
    3 1 8
    2 6 0`);
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