let login = document.getElementById('login')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    let account = JSON.parse(localStorage.account); //gọi account

    let email = document.getElementById("email");
    let pw = document.getElementById("password");

    let check = account.map(index => index.email == email.value.trim() && index.pw == pw.value.trim());

    if (check[0] == true){
        window.location.href = "./logout.html"
    } else {
        alert("Please input again")
    }
})