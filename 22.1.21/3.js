function runProgram(input){
    input = input.trim().split("\n")
    let str1 = input[0].trim().split('').filter(e=>e===' '?'':e).sort().reduce((a,b)=>a+b)
    let str2 = input[1].trim().split('').filter(e=>e===' '?'':e).sort().reduce((a,b)=>a+b)
    // console.log(str1,str2)
    if(str1===str2){
        console.log('True')
    }else{
        console.log('False')
    }
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`anagram
    nag a ram`)
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