document.querySelector('#btn').addEventListener('click', signUp)
    // let arr = JSON.parse(localStorage.getItem('user')) || []
    function signUp  (event) {
    event.preventDefault()
    document.querySelector("#warn1").textContent = "";
    document.querySelector("#warn2").textContent = "";
    document.querySelector("#warn3").textContent = "";

    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
        console.log(name,email,password)
    if(password.length<6){
        document.getElementById('warn1').innerText="Password must at least be 6 characters long."
        return 0;
    }else if((name.length<2) && (email<2)){

        document.getElementById('warn3').innerText="Please enter full name"
        document.getElementById('warn2').innerText="Please enter valid email"
        return 0
    }else{
        var obj = {
            Name : name,
            Email : email,
            Password : password
        };

        // arr.push(obj);  
        localStorage.setItem('user', JSON.stringify(obj))
    }
    console.log(obj)
    name=document.getElementById('name').value=null
    email=document.getElementById('email').value=null
    password=document.getElementById('password').value=null
    alert('signup successful')
    window.location.href="login.html"
 }


// class profile{
//     constructor(n,e,p) {
//         this.name=n;
//         this.email=e;
//         this.password=p;
//     }
// }

document.getElementById('image').addEventListener('click', function(){
    window.location.href="index.html"
})