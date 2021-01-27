function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let bay = input.map(e=>e.trim().split(' '))
    // console.log(bay)
    for(let i=0;i<num;i++){
        if(bay[i][0]==='India'){
            console.log(i+1)
        }
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`5
    Russia
    USA
    Japan
    China
    India`)
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