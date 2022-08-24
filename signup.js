document.querySelector('#btn').addEventListener('click', signUp)
    // let arr = JSON.parse(localStorage.getItem('user')) || []
    function signUp  (event) {
    event.preventDefault()
    document.querySelector("#warn1").textContent = "";

    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value

    if(password.length<6){
        document.getElementById('warn1').innerText="Password must be 6 characters long."
        return 0;
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