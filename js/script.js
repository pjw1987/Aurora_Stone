$(document).ready(function(){

    $('.right_menu_mo').click(function(){
        $('.mo_menu_box').css({
            left: '0px',
        })
    })

    $('.mo_clickbox').click(function(){
        $('.mo_menu_box').css({
            left: '-500px',
        })
    });
})