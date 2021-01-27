function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let bay = input.map(e=>e.trim().split(' '))
    let dev = bay[0][0]
    let high = bay[0][1]
    for(let i=0;i<num;i++){
        bay[i][1] = +bay[i][1]
        if(high<bay[i][1]){
            dev = bay[i][0]
            high = bay[i][1]
        }
    }
    console.log(dev)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`4
    ankit 10
    amit 40
    shivam 25
    shubham 33`)
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