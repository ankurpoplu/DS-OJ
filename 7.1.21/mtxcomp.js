function runProgram(input){
    input = input.trim().split('\n')
    let array = []
    for(let i=0;i<input.length;i++){
        array[i] = input[i].trim().split(' ').map(Number)
    }
    let sum1 = 0
    let sum2 = 0
    let row = array[0][0]
    let col = array[0][1]
    array.splice(0,1)
    // console.log(array)
    if((row===1)&&(col===1)){
        sum1 = array[0][0]
        array.splice(0,row)
    }else{
        for(let i=0;i<row;i++){
            // console.log(array[i])
            sum1 = sum1 + array[i].reduce((e,s)=>e+s)
        }
    }
    // console.log(sum1)
    row = array[0][0]
    col = array[0][1]
    // console.log(col)
    array.splice(0,1)
    if((row===1)&&(col===1)){
        sum2 = array[0][0]
    }else{
        for(let i=0;i<row;i++){
            sum2 =sum2 + array[i].reduce((e,s)=>e+s)
        }
    }
    if(sum1>sum2){
        console.log(sum1)
    }else{
        console.log(sum2)
    }
    
}
if(process.env.USERNAME === "Dell"){
    runProgram(`3 4
    1 2 3 4
    0 5 6 1
    9 3 0 8
    2 2
    8 8
    8 8`);
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