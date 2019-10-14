function preheader_function() {
    document.getElementById("preheader-subcontent").classList.toggle("show");
}


function hambergar_function() {

   
    document.getElementById("myTopnav").classList.toggle("responsive");
   
   
    if(document.getElementById("myTopnav").className=="header-nav responsive"){
        document.getElementById("hambergar").style.display = "none";
        document.getElementById("close-btn").style.display = "block";
        document.getElementById("preheaderLeft").style.display="block";
    }
    else{
        document.getElementById("hambergar").style.display = "block";
        document.getElementById("close-btn").style.display = "none";
        document.getElementById("preheaderLeft").style.display="none";
    }
   

}

window.onscroll = function(){headerfixed()};
function headerfixed() 
{
    
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}