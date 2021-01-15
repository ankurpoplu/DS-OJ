function runProgram(input){
    input = input.trim().split("\n")
    let num = +input[0]
    // console.log(num)
    input.shift()
    let bay = []
    for(let i=0;i<input.length;i++){
        bay[i] = input[i].trim().split(' ').map(Number)
    }
    for(let i=0;i<num;i++){
        bay.shift()
        let sum = 0
        let count = 0
        for(let j=0;j<bay[i].length;j++){
            sum += bay[i][j]
            if(bay[i][0]%2===0){
                if(bay[i][j]%2==0){
                    count ++
                }
            }else if(bay[i][0]%2!==0){
                if(bay[i][j]%2!==0){
                    count ++
                }
            }
        }
        if(sum%2!==0){
            console.log('YES')
        }else if(sum%2===0){
            if(count==bay[i].length){
                console.log('NO')
            }else{
                console.log('YES')
            }
        }
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`2
    5
    1 2 3 4 5
    5
    2 2 2 2 2`)
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