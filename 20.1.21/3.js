function runProgram(input){
    input = input.trim().split(" ")
    let bay = input[0]
    // console.log(bay)
    let count = 0
    for(let i=0;i<bay.length;i++){
        for(let j=i+1;j<bay.length;j++){
            if(bay[i]==bay[j]){
                count++
            }
        }
    }
    if(count===0){
        console.log('Unique')
    }else{
        console.log('No')
    }
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`masai`)
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