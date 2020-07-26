var abrirMenu = document.querySelector('.menu-abrir');
var fecharMenu = document.querySelector('.menu-fechar');
var fechar = document.querySelector('#fechar');
var fechar1 = document.querySelector('#fechar1');
var fechar2 = document.querySelector('#fechar2');
var fechar3 = document.querySelector('#fechar3');

abrirMenu.addEventListener('click', function(){
    document.documentElement.classList.add('menu-ativo');
});

fecharMenu.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-ativo');
});

fechar.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-ativo');
});
fechar1.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-ativo');
});
fechar2.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-ativo');
});
fechar3.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-ativo');
});

document.documentElement.addEventListener("click", function(event){
    if(event.target == document.documentElement){
        document.documentElement.classList.remove('menu-ativo')
    }
});