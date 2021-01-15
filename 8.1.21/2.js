function runProgram(input){
    input = input.trim().split('\n')
    let array = []
    for(let i=1;i<input.length;i++){
        array[i-1] = input[i].trim().split(' ').map(Number)
    }
    let row = +input[0][0]
    // console.log(row)
    let count = 0
    for(let i=0;i<row;i++){
        array.shift()
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]%2==0){
                count++
            }
        }
        console.log(count)
        count = 0
    }
    
}
if(process.env.USERNAME === "Dell"){
    runProgram(`2
    2
    1 1
    3
    1 2 3`);
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