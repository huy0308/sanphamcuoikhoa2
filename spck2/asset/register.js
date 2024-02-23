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
        alert('missing out something');
    } else if (email.value.trim().length == 0) {
        alert('please add your email');
    } else if (pw.value.trim().length == 0) {
        alert('please add your password');
    } else if (name.value.trim().length == 0) {
        alert('please add your name');
    } else if (pw.value.trim() != passwordagain.value.trim()) {
        alert('please match your password'); 
    } else if (!emailRegex.test(email.value)) {
        alert('your email is missing something')
    } else if (!passwordRegex.test(pw.value)) {
        alert('your password is missing something')
    } else {
        if (localStorage.users) {
            alert('finished')
            let user = JSON.parse(localStorage.users);
            user.push({
                email: email.value.trim(),
                pass: pw.value.trim(),
                name: name.value.trim()
            })
            localStorage.setItem('users', JSON.stringify(user))
            window.location.href = 'login.html'
        } else {
            localStorage.setItem('users', JSON.stringify([{
                email: email.value.trim(),
                pass: pw.value.trim(),
                name: name.value.trim()
            }]))
            
        }
    }
})
