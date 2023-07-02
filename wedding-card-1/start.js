function removeStart(){
   let div = document.querySelector(".start");
   let car = document.querySelector("#introCarousel");
   let inner = document.querySelector(".carousel-inner");
   div.style.zIndex=-1;
   console.log(car.style.zIndex);
    div.classList.add("hide");
    audio.play();
    musicIcon.classList.add('fa-scale');
    let hidden = document.querySelectorAll(".carousel-item");
    let indicators = document.querySelector(".carousel-indicators");
    let music = document.querySelector(".music-icon");
    hidden.forEach((element)=>{
        element.classList.remove("d-none");
    })
    indicators.classList.remove("d-none");
    music.classList.remove("d-none");
    inner.classList.add("dark-bg");
}