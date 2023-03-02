let obj={
    name:"peter",
    address:{
        city:"Noida",
        state:"UP"
    },
    getData:function(){
        return "all data is here";
    }
}
let user={...obj};
user.address.city="Gurgaon";
console.warn("object is :", obj);// here print city is gurgaon because if we use spread operator then its copy value only upper level but not go into the object under object (its only the memory value of that object ) so here we need deep copy

//Solution(deep copy)

let user=JSON.parse(JSON.stringify(obj));

console.warn("object is:",obj);// here it print the noida 

//so here we firstly convert the string form then we parse that object
console.warn("user is:",user) // here it print all the thing city is gurgaon but not print the function because in deep copy we can not print the function and date time there only one solution which is lodash 
// we use let user=_.clonedeep(obj)
