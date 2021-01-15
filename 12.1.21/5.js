function runProgram(input){
    input = input.trim().split(" ")
    let code = input[0]
    console.log(code)
    let count = 0
    let countArray = []
    for(let i=0;i<code.length;i++){
        for(let j=i+1;j<code.length;j++){
            if(code[i]==code[j]){
                count++
                console.log(code[i])
                console.log(code[j])
            }
        }
        countArray.push(count)
        count = 0
    }
    countArray.sort((a,b)=>a-b)
    console.log((countArray[countArray.length-1])+1)
    
  
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