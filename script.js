// function sendMail(){
//     var params = {
//         name:document.getElementById("name").value ,
//         email:document.getElementById("email").value,
//         number:document.getElementById("number").value,
//         subject:document.getElementById("subject").value,
//         message:document.getElementById("content").value,
//     }
    
//     const serviceID = "service_msh18zi"
//     const templateID = "template_h4xms3x"
    
//     emailjs.send(serviceID,templateID,params)
//     .then((res)=>{
//             document.getElementById("name").value = ""
//             document.getElementById("email").value = ""
//             document.getElementById("number").value = ""
//             document.getElementById("subject").value = ""
//             document.getElementById("content").value = ""
//             console.log(res)
//             alert("You Have Submitted Your Content");
//         }
//     )
//     .catch((err) => console.log(err))
// }


// From:{{name}},

// Email:{{email}}:

// User Number:{{number}}:

// User subject:{{subject}}:

// {{message}}