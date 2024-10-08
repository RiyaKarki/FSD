function Validated()
{
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById("result");
    if(username.length==0)
        {
            p1.innerText='Invalid input : Enter a username'
            return false;
        }
    else if(username.length<10)
    {
        p1.innerText='Invalid input : Username is less than 10'
        return false;
    }
    else if(pass.length==0)
        {
            p1.innerText='Invalid input : Enter a Password'
            return false;
        }
    else if(pass.length<10)
    {
        p1.innerText='Invalid input : Password is less than 10'
        return false;
    }
    else{
        p1.innerText='Form submitted'
        return true;
    }
    
}