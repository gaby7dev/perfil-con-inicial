const input = document.querySelector('#username');
const btn = document.querySelector('#confirm');
let perfil = document.querySelector('#nameperfil');

function capturarName(){
    
    if(input.value.length > 2){
        let char = input.value.charAt(0).toUpperCase();
        perfil.innerHTML = `<span class="letter">${char}</span>`;
    } else{
        alert('Ingresa un nombre min 2 caracteres');
    }
}

btn.addEventListener('click', capturarName);