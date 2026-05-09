

let student = {
    name:"manishyadav",
    profession:"devloper ",
    age:19,
    cgpa:7.6,
    potential:true,
    enterpreneur:true


};

console.log(student)

// /FOR IN LOOP IN OBJECT 

for(let KEY in student){  //FOR LOOP RETURN THE KEYS
    console.log("key="+KEY+"  value = "+student[KEY]);

}