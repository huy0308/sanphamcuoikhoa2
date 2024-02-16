let register = document.getElementById('register')
register.addEventListener('submit', function (events) {
    events.preventDefault();
    let name = document.getElementById('name');
    let passwordagain = document.getElementById('passwordagain');
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    let passwordRegex = /^[a-zA-Z0-9]{6,9}$/;

    console.log(pw.value);
    console.log(passwordagain.value);

    if (email.value.trim().length == 0 && pw.value.trim().length == 0 && name.value.trim().length == 0) {
        alert('nhap lai di');
    } else if (email.value.trim().length == 0) {
        alert('nhap lai email nhanh');
    } else if (pw.value.trim().length == 0) {
        alert('you,why');
    } else if (name.value.trim().length == 0) {
        alert('you buffon');
    } else if (pw.value.trim() != passwordagain.value.trim()) {
        alert('you again'); 
    } else if (!emailRegex.test(email.value)) {
        alert('sai dinh dang roi')
    } else if (!passwordRegex.test(pw.value)) {
        alert('sai dinh dang MK roi')
    } else {
        if (localStorage.users) {
            alert('ok roi do')
            let user = JSON.parse(localStorage.users);
            user.push({
                email: email.value.trim(),
                pass: pw.value.trim(),
                name: name.value.trim()
            })
            localStorage.setItem('users', JSON.stringify(user))
        } else {
            localStorage.setItem('users', JSON.stringify([{
                email: email.value.trim(),
                pass: pw.value.trim(),
                name: name.value.trim()
            }]))
            
        }
    }
})
