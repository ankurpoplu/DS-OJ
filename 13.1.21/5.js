function runProgram(input){
    input = input.trim().split(" ")
    let code = input[0]
    // console.log(code)
    let decode = []
    let pce = code[0]
    let count = 0
    for(let i=0;i<code.length;i++){
        if(code[i]===pce){
            count++
        }else if(code[i]!==pce){
            pce = code[i]
            decode.push(count)
            count = 1
        }
    }
    decode.push(count)
    decode = decode.sort((a,b)=>b-a)
    console.log(decode[0])
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`CTCAGGTCCG`)
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