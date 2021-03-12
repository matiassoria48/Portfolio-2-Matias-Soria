let name = document.getElementById('name1');
let pw = document.getElementById('pw');


function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
}


function check() {


    let storedName1 = localStorage.getItem('name1');
    let storedPw = localStorage.getItem('pw');


    let userName1 = document.getElementById('userName1');
    let userPw = document.getElementById('userPw');

    if(userName1.value == storedName1 && userPw.value == storedPw) {
        alert('Has entradoo!!.')
       window.location.assign('index.html');
       alert('Has entradoo!!.') //si lo pongo dos veces me funciona
      
    }else {
        alert('ERROR.');
    }
}