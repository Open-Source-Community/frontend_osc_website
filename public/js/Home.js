x=0;
ele_width= document.getElementsByClassName('card')[0];
function Move_Menu_left()
{
  if(x<0){
  x+=1;
  var mar_left=(x*(window.screen.width)) ;
  document.getElementById("cards_list").style.left = mar_left;
  }
}
function Move_Menu_right()
{

  num =14
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
     num=15
  }
    if(x==0 ||((x-1)*window.screen.width-100)> -(ele_width.offsetWidth * num) ){
      x-=1;
      var mar_right=(x*(window.screen.width-100)) ;
      document.getElementById("cards_list").style.left= mar_right;
  
  }
 
}
window.onscroll = function() {scrollFunction()};
nav_height=document.getElementsByClassName("top_navbar")[0].style.height;
function scrollFunction() {
if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){

if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  document.getElementsByClassName("top_navbar")[0].style.height = "95px";
  document.getElementsByClassName("top_navbar")[0].style.fontSize  = "15px";
  document.getElementsByClassName("top_navbar")[0].style.backgroundColor   = "white";
  document.getElementById("logo_at_Navbar").style.width = "80px";
  document.getElementById("logo_at_Navbar").style.margin = "0 0 0 80px";
  document.getElementById("OSC_img").style.width = "180px";
} else {
  document.getElementsByClassName("top_navbar")[0].style.height = nav_height;
  document.getElementsByClassName("top_navbar")[0].style.margin = "0 0 0 0";
  document.getElementsByClassName("top_navbar")[0].style.fontSize  = "18px";
  document.getElementsByClassName("top_navbar")[0].style.backgroundColor   = "transparent";
  document.getElementById("logo_at_Navbar").style.width = "110px";
  document.getElementById("logo_at_Navbar").style.margin = "0";
  document.getElementById("OSC_img").style.width = "250px";

}
}
}