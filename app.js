const $forms = document.querySelectorAll(".signup-form")
//console.log($forms);
/*
const sendEmail = (miVariable) => {
    miVariable.preventDefault();
    console.log(miVariable);
}*/

function sendEmail(params){
    params.preventDefault();
    console.log(params);
    const email = params.target.querySelector("input").value
    console.log(email);
    getTemplate()
    .then((response) => {
        sendEmailToApi(email,template)
        console.log(response);
    })
    .catch((error) => {
        console.log(error, "error al obtener el template");
    })
}

const getTemplate = () => {
    return fetch("./template.html")
    .then((response) => response.text())    
} 

for(let i = 0; i < $forms.length; i++){
   //console.log($forms[i]); 
   $forms[i].addEventListener("submit", sendEmail)
}


/* revisar archivos dribble */