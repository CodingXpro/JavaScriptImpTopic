//Lets Learn object_Copy in javascript

let obj={
    name:"krishna"
}

let x=obj;
x.name="rahul";
console.warn(obj.name); //rahul

//when we copy the object value here in x then it is copy the memory address the obj not the value 

let x="anil";
let y=x;
y="sidhu";
console.warn(x);

//but when we copy the variable then it is copy the variable value
