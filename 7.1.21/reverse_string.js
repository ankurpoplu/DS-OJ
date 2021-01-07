function runProgram(input){
    input = input.trim().split('\n')
    let num = +input[0]
    for (let i=0;i<num;i++){
        input[i+1]=input[i+1].trim()
        let reverse = ''
        let str = input[i+1]
        for(let j=str.length-1;j>=0;j--){
            reverse += input[i+1][j]
        }
        console.log(reverse)
    }
 
}
if(process.env.USERNAME === "Dell"){
    runProgram(`3
        ab
        cd
        ef`);
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