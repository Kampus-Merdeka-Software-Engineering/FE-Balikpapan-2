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


let scrollContainer = document.querySelector(".related");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

scrollContainer.addEventListener("wheel",(evt) =>{
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "smooth";
})

prev.addEventListener("click",()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

next.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
})