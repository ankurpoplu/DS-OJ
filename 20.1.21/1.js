function runProgram(input){
    input = input.trim().split("\n")
    input.shift()
    let bay = input.map(e=>e.trim())
    let str = ""
    // console.log(bay)
    for(let i=0;i<bay.length;i++){
        for(let j=bay[i].length-1;j>=0;j--){
            str += bay[i][j] 
        }
        console.log(str)
        str = ""
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`3
    ab
    cd
    ef`)
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