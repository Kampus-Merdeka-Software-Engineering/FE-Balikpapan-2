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


$(".slide img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})
