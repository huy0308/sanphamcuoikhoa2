let login = document.getElementById('login')
login.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email');
    let name = document.getElementById('name')
    let pw = document.getElementById('password');
    let person = JSON.parse(localStorage.users);
    for (let i = 0; i < person.length; i++) {
        if (email.value.trim() == person[i].email
            && pw.value.trim() == person[i].pass && name.value.trim() == person[i].name) {
            window.location.href = 'home.html'
            alert('finished')
        }else{
            alert('username or password are incorrect')
        }
    }
})