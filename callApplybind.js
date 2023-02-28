// // var API_KEY = 'faaf2fa37f4b1350885fbab9df18b8d1-15b35dee-49bfe7b3';
// // var DOMAIN = 'sandboxdee4422b074646468fa1e918ee889eaf.mailgun.org';
// // // var HOST = 'smtp.gmail.com';

// // var mailgun = require('mailgun-js')
// //     ({ apiKey: API_KEY, domain: DOMAIN });

// // sendMail = function (sender_email, receiver_email,
// //     email_subject, email_body) {

// //     const data = {
// //         "from": sender_email,
// //         "to": receiver_email,
// //         "subject": email_subject,
// //         "text": email_body
// //     };



// //     mailgun.messages().send(data, (error, body) => {
// //         if (error) console.log(error)
// //         else console.log(body);
// //     });
// // }

// // var sender_email = 'krishnassm420012@gmail.com'
// // var receiver_email = 'krishnassm8540@gmail.com'
// // var email_subject = 'Mailgun Demo'
// // var email_body = 'Greetings from geeksforgeeks'

// // // User-defined function to send email
// // sendMail(sender_email, receiver_email,
// //     email_subject, email_body)


// const mailgun = require("mailgun-js");
// const DOMAIN = 'sandboxdee4422b074646468fa1e918ee889eaf.mailgun.org';
// var api_key = 'pubkey-1ccca9faa19b8325b4ec28fda5170911';
// const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
// const data = {
//     from: 'Excited User <me@samples.mailgun.org>',
//     to: 'bar@example.com, krishnassm420012@gmail.com@DOMAIN',
//     subject: 'Hello',
//     text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
//     if (error) {
//         console.log(error)
//     }
//     console.log(body);
// });

// Call Method (1st approach)
let name = {
    firstName: "krishna",
    LastName: "Kumar",
}
let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.LastName + " " + "from" + " " + homeTown + " " + state)
}

printFullName.call(name, "mumbai", "maharashtra");

let name2 = {
    firstName: "rahul",
    LastName: "Kumar"
}
printFullName.call(name2, "Delhi", "India");

//call method (2nd Approach)

let name3 = {
    firstName: "Ankit",
    LastName: "Gupta",
    printFullName: function () {
        console.log(this.firstName + " " + this.LastName);
    }
}
let name4 = {
    firstName: "akash",
    LastName: "soni"
}
name3.printFullName.call(name4);

//In Apply Method we simply apply the argument in array or arraylist

printFullName.apply(name, ["mumbai", "maharashtra"]);


