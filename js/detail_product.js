const s = document.getElementById("s"),
m = document.getElementById("m"),
l = document.getElementById("l"),
xl = document.getElementById("xl");

const size= ""
s.addEventListener("click", ()=>{
  size="s";
});
m.addEventListener("click", ()=>{
  size="m"
});
l.addEventListener("click", ()=>{
  size="l"
});
xl.addEventListener("click", ()=>{
  size="xl"
});

console.log("size");


const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1
plus.addEventListener("click", ()=>{
  a++;
  num.innerText = a;
});
minus.addEventListener("click", ()=>{
  if(a>1){
    a--;
  }
  num.innerText = a;
});


function prev(){
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 270;
}

var slideImgs = document.querySelectorAll(".slide img");
slideImgs.forEach(function(img) {
img.addEventListener("click", function() {
this.classList.toggle('zoomed');
document.querySelector(".overlay").classList.toggle('active');
});
});