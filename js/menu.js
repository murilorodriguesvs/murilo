var abrirMenu = document.querySelector('.menu-abrir');
var fecharMenu = document.querySelector('.menu-fechar');

abrirMenu.addEventListener('click', function(){
    document.documentElement.classList.add('menu-ativo');
});

fecharMenu.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-ativo');
});

document.documentElement.addEventListener("click", function(event){
    if(event.target == document.documentElement){
        document.documentElement.classList.remove('menu-ativo')
    }
});