function runProgram(input){
    input = input.trim().split("\n")
    let bay = input.map(e=>e.trim().split(' '))
    let num = +bay[0]
    bay.shift()
    // console.log(num)
    let ray = []
    for(let i=0;i<num;i++){
        ray[i]=bay.map(e=>e[num-i-1])
    }
    ray.forEach(e=>console.log(e.join(' ')))
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`)
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