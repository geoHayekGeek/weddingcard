// Set the date we're counting down to
var countDownDate = new Date("Jul 15, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //store in array
  var d = [days, hours, minutes, seconds];
    
  // Output the result in an element with id="demo"
  var table = document.querySelector("table");
  var thead = table.querySelector("thead");
  var ths = thead.querySelectorAll("th");
  ths.forEach((th, index) => {
    th.classList.add("h2", "px-2");
  	if(index!=0){
    th.innerHTML=d[index];
    th.style.borderLeft="solid 1px white";
    }
    else {
    th.innerHTML=d[index];
    }
  });  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
