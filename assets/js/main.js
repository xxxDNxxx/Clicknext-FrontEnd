/*var btnToggle = document.querySelector('.toggle-side-menu');
var sidebar = document.querySelector('.sidebar');
var btnClose = document.getElementById('btn-close');

function toggleSideMenu(){
    if(sidebar.className.indexOf('hide') === -1){
        sidebar.classList.add('hide');
    }else{
        sidebar.classList.remove('hide');
    }
    if(sidebar.className.indexOf('show')=== -1){
        sidebar.classList.add('show');
    }else{
        sidebar.classList.remove('show');
    }    
   


}


btnToggle.onclick = toggleSideMenu;
btnClose.onclick = toggleSideMenu;
*/

//jQuery
$('.toggle-side-menu').on('click',function(){
    $('.sidebar').toggleClass('hide');
    $('.sidebar').toggleClass('show');
})
$('btn-close').on('click',function(){
    $('.sidebar').toggleClass('hide');
    $('.sidebar').toggleClass('show');
})