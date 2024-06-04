// $('.left-all li').eq().siblings().css('left','-1200px');
// var slideI=0;
// setInterval(function(){
//     if(slideI<2){
//         slideI++;
//     }else{
//         slideI=0;
//     }
//     $('.left-all li').eq(slideI).siblings().animate({left:'-1200px'},500)
//     $('left-all li').eq(slideI).animate({left:'0'},500)
// },2500);


// $('.top-all li').eq().siblings().css('top','300px')
// var slideI=0;
// setInterval(function(){
//     if(slideI<2){
//         slideI++;
//     }else {
//         slideI=0;
//     }
//     $('.top-all li').eq(slideI).siblings().animate({top:'300px'},500)
//     $('.top-all li').eq(slideI).animate({top:'0'},500)
// },2500)

$('.fade-all li').eq().siblings().hide()
var slideI=0;
setInterval(function(){
    if(slideI<2){
        slideI++;
    }else {
        slideI=0;
    }
    $('.fade-all li').eq(slideI).siblings().fadeOut(500)
    $('.fade-all li').eq(slideI).fadeIn(0)
},2500)