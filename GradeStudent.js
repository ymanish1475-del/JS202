//PRACTICE Q 2

let grade = prompt("enter your grade");

if(grade>=90 && grade <=100){
    //console.log("A");
    grade="A";
}

else if(grade>=70 && grade <=89){
    // console.log("B")
     grade="A";
}

else if(grade>=60 && grade <=69){
    // console.log("C")
     grade="C";
}

else if(grade>=50 && grade <=59){
    // console.log("D")
     grade="D";
}

else if(grade>= 0 && grade <=49){
    // console.log("F")
     grade="F";
}
 else {
    console.log("please enter your real grade not garbage value");
}


console.log(grade);