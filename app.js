const btn = document.querySelector(".btn");
const texterror = document.querySelector(".texterror");
const imageerror = document.querySelector(".imageerror");
const input = document.querySelector(".input");
const textevalid = document.querySelector(".textevalid");

   function checkEmail(email) {
             var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
         }

btn.addEventListener("click", () => {
    
    var email = document.querySelector(".input").value;

if (checkEmail(email)) {
                input.classList.add("inputvalid");
                textevalid.classList.add("active");

setTimeout(function() {
    input.classList.remove("inputvalid");
    textevalid.classList.remove("active");
}, 2000);

                
                
             } else {
                texterror.classList.add("active");
                imageerror.classList.add("imageerroractive");
                input.classList.add("inputerror");
             }           
});



input.addEventListener("click", () => {
    texterror.classList.remove("active");
    imageerror.classList.remove("imageerroractive");
    input.classList.remove("inputerror");
    input.classList.remove("inputvalid");
    textevalid.classList.remove("active");
});


1
