

// NAVBAR //

var navbar =document.getElementById("navbar");
function showMenu() {
    navbar.style.top = "0";
}

function hideMenu() {
    navbar.style.top = "-2000%";
}

// Cart-Side //
function cart() {
    document.getElementById("Mycart").style.right = "0";
  }
  
  function off() {
    document.getElementById("Mycart").style.right = "-500px";
}

// NAVSTICKY //
    const nav = document.querySelector('nav'); window.addEventListener("scroll",function(){
 
        if(document.documentElement.scrollTop > 50){ nav.classList.add("sticky");
        } else{
            nav.classList.remove("sticky");
        }
    })


// search //
function sides() {
    document.getElementById("Mysearch").style.display = "block";
  }
  
  function shows() {
    document.getElementById("Mysearch").style.display = "none";
  }


  var productImg = document.getElementById("productImg");
  var smallimg = document.getElementsByClassName("small-img");
       
  
        smallimg[0].onclick = function()
        {
          productImg.src = smallimg[0].src;
        }
  
        smallimg[1].onclick = function()
        {
          productImg.src = smallimg[1].src;
        }
  
        smallimg[2].onclick = function()
        {
          productImg.src = smallimg[2].src;
        }
  
        smallimg[3].onclick = function()
        {
          productImg.src = smallimg[3].src;
        }
  
        smallimg[4].onclick = function()
        {
          productImg.src = smallimg[4].src;
        }

