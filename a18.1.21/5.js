function runProgram(input){
    input = input.trim().split("\n")
    input.shift()
    let bay = input.map(e=>e.trim()).sort()
    for(let i=0;i<bay.length;i++){
        let count = 1
        for(let j=bay.length-1;j>i;j--){
            if(bay[i]===bay[j]){
                count++
                bay.splice(j,1)
            }
        }
        console.log(bay[i]+' '+count)
    }
    // console.log(bay)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`5
    aman
    vats
    aman
    aman
    aman`)
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