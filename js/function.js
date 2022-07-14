$(function (){


    abrirMenu();
    function abrirMenu(){
    $(".icon-menu").click(function(){
        $(".menu-mobile").fadeIn()
    })
    }
    
    $("body").click(function(e){
        e.stopPropagation
        $(".menu-mobile").fadeOut()
    })

    

})