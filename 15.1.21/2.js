function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    input.shift()
    let bay = input.map(e=>e.trim().split(' '))
    let sum1 = 0
    let sum2 = 0
    let team1 = bay[0][0]
    let team2 = ''
    // console.log(team1)
    for(let i=0;i<num;i++){
        if(bay[i][0]===team1){
            sum1++
        }else if(bay[i][0]!==team1){
            sum2++
            team2 = bay[i][0] 
        }
    }
    if(sum1>sum2){
        console.log(team1)
    }else{
        console.log(team2)
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`5
    A
    ABA
    ABA
    A
    A`)
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