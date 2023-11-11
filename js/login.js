let users = {
    "username":"password",
    "chocolate":"cookie",
    "wiener":"peter"
}

function signin(){
    let input_username = document.getElementById("username").value;
    let input_passwd = document.getElementById("password").value;
    if(input_username in users && users[input_username]==input_passwd){
        alert("successful login!")
        window.location.href="html/homepage.html"
    }
    else alert("sorry")
}