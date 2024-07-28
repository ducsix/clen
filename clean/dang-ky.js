let register = document.querySelector("#register")
register.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById('email');
    let pw = document.getElementById("password");

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g; 

    if (email.value.trim().length == 0 && pw.value.trim().length == 0) { 
        alert("Please input your email & password")
    }
        else if (email.value.trim().length == 0) {
        alert("Please input your email")
    }
        else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }
        else if (pw.value.trim().length < 8) {
        alert("Password must be at least 8 characters.")
    }  
        else if (!pw.value.trim().match(lowerCaseLetter)) {
            alert("Password must  contain a lowercase letter")
    }
        else if (!pw.value.trim().match(upperCaseLetter)) {
        alert("Password must  contain a uppercase letter")
    }
        else if (!pw.value.trim().match(numbers)) {
        alert("Password must  contain a number or special character")
    }
        else {
            if(localStorage.account) { //kiểm tra trong kho xem có account không?
                let account = JSON.parse(localStorage.account) //gọi account từ kho
                account.push({ //thêm dữ liệu mới vào
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("account", JSON.stringify(account)) //cất account vào kho
            } else {
                localStorage.setItem("account", //ko có tự động tạo cái ms và đẩy vào
                JSON.stringify( 
                [
                    {
                      email: email.value.trim(),
                      pw: pw.value.trim()
                    }
                ]));
            }
            location.replace("./login.html")
    }
    

})
