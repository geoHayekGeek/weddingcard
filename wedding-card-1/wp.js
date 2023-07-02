let carousel = document.getElementById('introCarousel');
let wpBtn = document.getElementById("whatsapp");

carousel.addEventListener('slid.bs.carousel', function(event){
    var activeIndex = event.to;

  if (activeIndex === 4) {
    wpBtn.classList.remove("d-none");   
    console.log("lol");
}
});