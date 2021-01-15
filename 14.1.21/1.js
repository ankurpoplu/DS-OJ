function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    let bay = input[1].trim().split(' ').map(Number)
    let ray = []
    let flag = true
    for(let i=0;i<num;i++){
        for(let j=i+1;j<num;j++){
            if(bay[i]<bay[j]){
                flag = false
                break
            }
        }
        if(flag === true){
            ray.push(bay[i])
        }
        flag = true
    }
    console.log(ray.join(' '))
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`6
    16 17 4 3 5 2`)
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