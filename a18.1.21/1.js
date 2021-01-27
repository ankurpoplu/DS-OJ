function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let bay = input.map(e=>e.trim().split(' '))
    for(let i=0;i<num;i++){
        bay.shift()
        bay[i] = bay[i].map(Number).reduce((a,b)=>a+b)
        // console.log(bay[i])
        if(bay[i]%2===0){
            console.log('No')
        }else{
            console.log('Yes')
        }
    }
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`3
    1
    1
    2
    1 101
    2
    1 200`)
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