function runProgram(input){
    input = input.trim().split('\n')
    let array = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b)
    input.splice(0,2)
    input = input.map(e=>+e)
    for(let i=1;i<input.length;i++){
       if(input[i]>array[array.length-1]){
           console.log('-1')
        }else {
           for(let j=0;j<array.length;j++){
               if(input[i]<array[j]){
                  console.log(array[j])
               break;
               } 
           } 
        }
    }
}
if(process.env.USERNAME === "Dell"){
    runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    4
    100
    76
    5
    15`);
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