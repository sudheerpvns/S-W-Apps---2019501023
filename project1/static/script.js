function ValidateEmail(mail_id) 
{	
var key = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
if (mail_id.match(key))
{
    return true;
}
return false;
}

function CheckPassword(inputtxt) 
{ 
var passw= /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
if(inputtxt.match(passw)) 
{ 
    return true;
}
else
{ 
    return false;
}
}
document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.warning').style.visibility = "hidden"


document.querySelector('.btn').onclick = function() {
    const name = document.querySelector('#username').value
    const pw = document.querySelector('#password').value
    // if (ValidateEmail(name))
    if (!ValidateEmail(name) && !CheckPassword(pw))
    {
        // console.log("WRONG")
        document.querySelector('#username').value = ""
        document.querySelector('#password').value = ""	
        document.querySelector('.warning').style.visibility = "visible"
        return false
    }
}
})