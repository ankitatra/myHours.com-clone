document.querySelector('#btn').addEventListener('click', signIn)

let x = JSON.parse(localStorage.getItem('user'))
let userData = JSON.parse(localStorage.getItem('userdata')) || []
function signIn() {
    event.preventDefault()
    
    
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        let loginData = {
            Email:email,
            Password:password
        }
       
        for(let key in x){
            console.log(x.Password)
            if((x.Email == email) && (x.Password == password)){
                email = document.getElementById('email').value=null
                password = document.getElementById('password').value=null
                userData.push(loginData)
                localStorage.setItem('userdata', JSON.stringify(userData))
                alert("login Successful")
                window.location.href=''
                break
            }else{
                alert('Please Enter Correct Details')
                break
            }
        }
       
    // })
}

document.getElementById('image').addEventListener('click', function(){
    window.location.href="index.html"
})