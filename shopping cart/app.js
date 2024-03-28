console.log("hello");

const kucuk_photo_1 = document.getElementById("photo_1")
const kucuk_photo_2 = document.getElementById("photo_2")
const kucuk_photo_3 = document.getElementById("photo_3")
const kucuk_photo_4 = document.getElementById("photo_4")
const buyukresim = document.getElementById("buyuk_resim")

async function logProduct() {
    const response = await fetch("https://b6f5db1d3ce546e2bdf9dd300c774a55.api.mockbin.io/");
    const ayakkabi = await response.json();
    
    console.log(ayakkabi);
    title = ayakkabi.title;
    seller = ayakkabi.seller;
    description = ayakkabi.description;
    price = ayakkabi.price;
    discountAmount = ayakkabi.discountAmount;
    photo_1 = ayakkabi.photos[0];
    photo_2 = ayakkabi.photos[1];
    photo_3 = ayakkabi.photos[2];
    photo_4 = ayakkabi.photos[3];
    kucuk_photo_1.src = photo_1;
    kucuk_photo_2.src = photo_2;
    kucuk_photo_3.src = photo_3;
    kucuk_photo_4.src = photo_4;
    buyukresim.src = photo_1;
    console.log(title);
    console.log(seller);
    console.log(description);
    console.log(price);
    console.log(discountAmount);
  }
logProduct();

function buyukresim1() {
    buyukresim.src = kucuk_photo_1.src;
}
function buyukresim2() {
    buyukresim.src = kucuk_photo_2.src;
}
function buyukresim3() {
    buyukresim.src = kucuk_photo_3.src;
}
function buyukresim4() {
    buyukresim.src = kucuk_photo_4.src;
}

