function login() {
    const email = login.html('Email').value;
    const password = login.html('Password').value;

    
    if (email & password) {
        alert('Masuk sebagai:' + email);
    } else {
        alert('Silakan isi semua kolom.');
    }
}