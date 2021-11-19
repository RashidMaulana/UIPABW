const form = document.querySelector('#formreg');

  form.addEventListener('submit', function (e) {

    e.preventDefault();

    nama = form.elements.nama.value,
    username = form.elements.username.value,
    password = form.elements.password.value,
    email = form.elements.email.value,
    notelp = form.elements.notelp.value,
    alamat = form.elements.alamat.value,
    check(username, password, nama, email, alamat, notelp);

    nama = '';
    username = '';
    password = '';
    email =  '';
    notelp = '';
    alamat ='';
});

const check = (username, password, nama, email, alamat, notelp) =>  {
    if (nama === '') {
        alert("nama tidak boleh kosong");
    }else if (username === '') {
        alert("username tidak boleh kosong");
    }else if (password === '') {
        alert("password tidak boleh kosong");
    }else if (email === '') {
        alert("email tidak boleh kosong");
    }else if (notelp === '') {
        alert("notelp tidak boleh kosong");
    }else if (alamat === '') {
        alert("alamat tidak boleh kosong");
    }else if(document.getElementById("cek").checked == false){
        alert("silahkan centang ketentuannya.");
    } else{
        window.location.href='login.html';
    }
}