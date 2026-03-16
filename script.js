function toggleMenu(){
document.getElementById("menuPanel").classList.toggle("open");
}

const gallery=document.getElementById("galleryScroll");
const images=gallery.querySelectorAll("img");

function updateActive(){

let center=gallery.scrollLeft + gallery.offsetWidth/2;

images.forEach(img=>{
let box=img.offsetLeft + img.offsetWidth/2;
let distance=Math.abs(center-box);

if(distance<120){
img.classList.add("active");
}else{
img.classList.remove("active");
}

});

}

gallery.addEventListener("scroll",updateActive);
updateActive();


function sendWhatsApp(){

const name=document.getElementById("custName").value;
const phone=document.getElementById("custPhone").value;
const pincode=document.getElementById("custPincode").value;
const msg=document.getElementById("custMsg").value;
const error=document.getElementById("pincodeError");

if(!name || !phone || !pincode){
alert("Please fill required fields.");
return;
}

if(pincode!=="641606" && pincode!=="641604"){
error.textContent="Area Not Deliverable";
return;
}

error.textContent="";

let text=`Bill Upload

Name - ${name}
Phone - ${phone}
Pincode - ${pincode}
Message - ${msg}`;

let url="https://wa.me/919444517649?text="+encodeURIComponent(text);

window.open(url,"_blank");

}