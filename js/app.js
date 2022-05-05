const toggle = document.getElementsByClassName("toggle");
const labels = document.getElementsByClassName("labels");

for(let i=0; i < 2; i++) {
    labels[i].innerHTML = "OFF";
    toggle[i].addEventListener( "click", () => {
        if(labels[i].innerHTML == "OFF") {
            // console.log("button toggled");
            labels[i].classList.add("on");
            labels[i].innerHTML= "ON";
        } else {
            labels[i].classList.remove("on");
            labels[i].innerHTML = "OFF";
        }
    });
}