//Lets Learn Shallow_copy in javascript

let obj={
    name:"peter"
}

let user=Object.assign({},obj); // here not the copy of the memory location copy that value of the object
let user={...obj};//this is another method you can assign here it is also print same value
user.name="bruce";

console.warn(obj); //peter
console.warn(user);//bruce
