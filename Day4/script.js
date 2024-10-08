function validate(){
    let username=document.getElementById('un').value;
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById('result')
    if(username=="admin"){
        if(pass=="admin"){
            // alert("Validated");
            p1.innerText = 'Validated'
        }
        else{
            p1.innerText = 'Invalid password'
        }
    }
    else{
        // alert("Invalidated");
        p1.innerText = 'Invalid Username'
    }
}
