let name = {
    firstName: "krishna",
    lastName: "Kumar"
}

let printName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastName + "," + homeTown + "," + state);
}
let printMyname = printName.bind(name, "Dehradun");
printMyname("UttaraKhand")

Function.prototype.mybind = function (...args) {
    let obj = this
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyname2 = printName.mybind(name, "Dehradun");
printMyname2("UttaraKhand");