// var myBtn = document.getElementById("myBtn")

// var items = document.getElementsByClassName("item")

// console.log(items)

// var items = document.getElementsByName()

// var items = document.getElementsByTagName("div")

//   console.log(items)

// var items = document.querySelector(".parent .item")
// var items = document.querySelectorAll(".parent .item")

// myBtn.addEventListener("click", function(){
//     alert("hello")
// } )

// myBtn.addEventListener("click", x)

// function x(eeeeeeee){

// }

// var items = document.getElementsByClassName("item")

// for(var i = 0 ; i < items.length ; i++){
//     items[i].addEventListener("click" , function(){
//         alert("hello")
//     })
// }

// items.addEventListener("click" , function(){
//     alert("hello")
// })

// var itemOne = document.getElementById("itemOne")

// itemOne.addEventListener("click" , function(){
//     // itemOne.style.backgroundColor = "red"
//     // itemOne.style.cssText = ` `
//     // itemOne.classList.add("item1")
// })

// document.addEventListener("click" , function(e){
//     console.log(e.target.src)
// })

// var x = Math.random() * 100
// console.log(x)

// document.addEventListener("mousemove" , function(){
//     var r = Math.random() *255
//     var g = Math.random() *255
//     var b = Math.random() *255

//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}) `

// })

// var img = document.getElementById("img")

// document.addEventListener("mousemove" , function(e){
//     img.style.left = e.clientX +"px"
//     img.style.top = e.clientY +"px"

// })

/////      0   1    3
// var arr =[ 1 , 2 , 3 ]

// arr.indexOf(2)

var imgs = Array.from(document.getElementsByClassName("img_item"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");

var currentIndexSlid = 0;

for (var i = 0; i < imgs.length; i++) {
   imgs[i].addEventListener("click", function (eventInfo) {
      currentIndexSlid = imgs.indexOf(eventInfo.target); //0 1 2 3 4 5 6
      // console.log(currentIndexSlid)

      lightBoxContainer.style.display = "flex";
      var imgSrc = eventInfo.target.src;
      lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
   });
}

// nextSlide
next.addEventListener("click", nextSlide);
function nextSlide() {
   currentIndexSlid++;
   if (currentIndexSlid == imgs.length) {
      currentIndexSlid = 0;
   }
   //console.log(currentIndexSlid)
   var imgSrc = imgs[currentIndexSlid].src;
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
   lightBoxItem.style.transition = `all 0.6s`;
}
//closeSlide
close.addEventListener("click", closeSlide);
function closeSlide() {
   lightBoxContainer.style.display = "none";
}

//prev
prev.addEventListener("click", prevSlide);
function prevSlide() {
   currentIndexSlid--;
   if (currentIndexSlid < 0) {
      currentIndexSlid = imgs.length - 1;
   }
   //console.log(currentIndexSlid)
   var imgSrc = imgs[currentIndexSlid].src;
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
   lightBoxItem.style.transition = `all 0.6s`;
}

//
document.addEventListener("keydown", function (e) {
   if (e.keyCode == 39) {
      nextSlide();
   } else if (e.keyCode == 37) {
      prevSlide();
   } else if (e.keyCode == 27) {
      closeSlide();
   }
});
