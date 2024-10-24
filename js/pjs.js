// image //
filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product-col");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
   while (arr1.indexOf(arr2[i]) > -1) {
     arr1.splice(arr1.indexOf(arr2[i]), 1);
   }
 }
 element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("myBtncontainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
 btns[i].addEventListener("click", function(){
   var current = document.getElementsByClassName("activeZ");
   current[0].className = current[0].className.replace(" activeZ", "");
   this.className += " activeZ";
 });
}


// DIGITAL CLOCK //
let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

setInterval(()=>{
    let currentTime = new Date ();

    day.innerHTML = (currentTime.getDay()) + currentTime.getDate();
    hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minute.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();


},1000)