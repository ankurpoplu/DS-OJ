function runProgram(input){
    input = input.trim().split("\n")
    let num = Number(input[0])
    input.shift()
    let bay = input.map(e=>e.trim().split(' '))
    for(let i=0;i<num;i++){
        bay.shift()
        bay[i]=bay[i].map(e=>+e)
        bay[i].sort((a,b)=>(a-b))
        // bay[i]=bay[i].sort()
        // console.log(bay[i])
        let sumEven = 0
        let sumOdd = 0
        for(let j=0;j<bay[i].length;j++){
            if(j%2==0){
                sumEven += bay[i][j]
            }else if(j%2!=0){
                sumOdd += bay[i][j]
            }
        }
        let diff = (sumOdd - sumEven)
        if(diff<0){
            diff = diff*-1
        }
        console.log(diff)
    }
    
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`3
    12
7058 6277 7840 1883 2919 6915 9114 2712 5998 5979 752 7579
20
1128 2125 2796 8242 6548 1130 7913 3667 1868 5209 8179 8108 6975 7064 646 7055 5489 4637 1252 3064
13
1743 6268 4055 9689 5616 1524 7455 1253 4807 6332 1716 7207 4075`)
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