/* function validMinValue(value, minValue=2){
    if(value.length < minValue)
        return false
    
    return true
} */

function validMinValueTwo(value,){
    const regEx = /[0-9a-zA-Z]{2,}/
    if(!regEx.test(value))
    return false

return true
}

function validAdress(value,){
    const regEx = /([0-9]{3}\s)+([0-9]{2}\s)+([a-öA-Ö]{2,})/ 
    
    if(!regEx.test(value))
    return false

return true
}

function validEmail(value){
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regEx.test(value))
        return false

    return true
}

function validPassword(value){
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if(!regEx.test(value))
        return false
    
    return true
}

function validConfirmPassword(value){

    if(document.getElementById('password').value === value)
        return true
    return false    
}

function DateOfBirthValidate(birth) {
    const today = new Date();
    let nowyear = today.getFullYear();
    let nowmonth = (today.getMonth()+1);
    let nowday = today.getDate();

    let birthyear = birth.slice(0,4);
    let birthmonth = birth.slice(4,6);
    let birthday = birth.slice(6,8);
    
    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;
    
    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
        age = parseInt(age) - 1;
    }

    if (age === 17){
        if (birthmonth < nowmonth) {
            age = parseInt(age) + 1;
        }
    }
    
    if (birth.length < 8)
        return true

    if (birth.length > 8)
        return true

    if(age > 17)
        return false
    return true
   
}


function onSubmit(e){
    e.preventDefault()
    console.log("submitted")
}

function checkValidForm(elements){
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]   

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })     

    if(submitButton !== undefined)
        submitButton.disabled = disable
}

var forms = document.querySelectorAll('.needs-validation')

forms.forEach(element =>{

   switch(element.type){
        case "text":
            element.addEventListener("keyup", function(e){
                if(e.target.id === "adress"){
                    element.addEventListener("keyup", function(e){
                        if(!validAdress(e.target.value)){
                            e.target.classList.add("is-invalid");
                            checkValidForm(forms)
                        }
                        else{
                            e.target.classList.remove("is-invalid");
                        checkValidForm(forms)
                        }
                    })
                }

                if (e.target.id === "DateOfBirth"){
                    element.addEventListener("keyup", function(e){
                        if(DateOfBirthValidate(e.target.value)){
                            e.target.classList.add("is-invalid");
                            checkValidForm(forms)
                        }
                        else{
                            e.target.classList.remove("is-invalid");
                            checkValidForm(forms)
                        }
                     })
                }
                else{
                    if(!validMinValueTwo(e.target.value)){
                    e.target.classList.add("is-invalid");
                    document.getElementById(`${e.target.id}-error`).style.display ="block";
                    checkValidForm(forms)
                    }
                    else{
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display ="none";
                        checkValidForm(forms)
                            
                    }
                }
                
            })
        break;

        case "email":
            element.addEventListener("keyup", function(e){
                if(!validEmail(e.target.value)){
                    e.target.classList.add("is-invalid");
                    checkValidForm(forms)
                }
                else{
                    e.target.classList.remove("is-invalid");
                    checkValidForm(forms)
                }
             })
        break;
     

        case "password":
            element.addEventListener("keyup", function(e){
                if(e.target.id === "password"){
                    if(!validPassword(e.target.value)){
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }
                    else{
                        e.target.classList.remove("is-invalid");
                        checkValidForm(forms)
                    }
                }
                else {
                    if(!validConfirmPassword(e.target.value)){
                        e.target.classList.add("is-invalid");
                        checkValidForm(forms)
                    }
                    else{
                        e.target.classList.remove("is-invalid");
                        checkValidForm(forms)
                    }
                }
            
            
            })
        break;

        

    }

})
checkValidForm(forms)