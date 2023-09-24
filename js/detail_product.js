// const inputTotal = document.getElementById("counter");
// const tambahProduk = document.getElementById("tambahProduk");
// tambahProduk.addEventListener("click", function () {
//     let currentValue = parseInt(inputTotal.value);
//     currentValue += 1;
//     inputTotal.value = currentValue;
//     });


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