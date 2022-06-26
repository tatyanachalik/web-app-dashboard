
//  ---------- TOGGLE BTN ----------

// const toggle = document.getElementsByClassName("toggle");
// const labels = document.getElementsByClassName("labels");

// for(let i=0; i < 2; i++) {
//     labels[i].innerHTML = "OFF";
//     toggle[i].addEventListener( "click", () => {
//         if(labels[i].innerHTML == "OFF") {
//             // console.log("button toggled");
//             labels[i].classList.add("on");
//             labels[i].innerHTML= "ON";

//         } else {
//             labels[i].classList.remove("on");
//             labels[i].innerHTML = "OFF";
//         }
//     });
// }

//  ---------- SEARCH MEMBERS  ----------

const list = document.querySelector(".list");

function searchMembers() {
    // get search value from search box
    
    list.classList.add("show");
    let searchVal = document.getElementById('userField');
    let members = document.getElementsByClassName('member-list-item');
    let searchValUpper = searchVal.value.toUpperCase();
    
    
    //console.log(searchVal);
    //console.log(members);

    for (let i = 0 ; i < members.length; i++) {
        console.log(members[i].textContent)
        let text = members[i].textContent;
   
        
        text = text.toUpperCase();
        // console.log(text);
        // console.log(text.indexOf(searchVal));
        if (text.includes(searchValUpper)) {
            members[i].style.display = "";
        } else {
            members[i].style.display = "none";
        }

    members[i].addEventListener('click', () =>{
       console.log(`${members[i].textContent} was clicked`);
       searchVal.value = members[i].textContent;
       list.classList.remove("show");
    });

}

}


// ---------- ALERT BANNER AND DROPDOWN MENU ----------

const alertBanner = document.getElementById("alert");
const notifDot = document.querySelector(".appear");
const dropdown = document.querySelector(".dropdown");


// create the html for the banner
alertBanner.innerHTML = '<div class="alert-banner"> <p class="alert-text"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p> <p class="alert-banner-close">x</p></div>';

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
    notifDot.classList.add("disappear");
    }
    });

  
function dropdownFunct() {
    dropdown.classList.add("show");
}

window.onclick = function(e) {
    if (!e.target.matches('#bell') && !e.target.matches('#userField')){
        if(dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        // console.log("clicked!!!");
        }
        if(list.classList.contains("show")) {
            list.classList.remove("show");
            }
}
}


// ---------- LOCAL STORAGE DATA ----------

const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const emailBtn = document.getElementById("togBtn");
const publicBtn = document.getElementById("togBtn2");
let zone = document.getElementById("timezone");

var emailVal = localStorage.getItem("email");
var privacyVal = localStorage.getItem("privacy");
var zoneVal = localStorage.getItem("timezone");

console.log(emailVal);
console.log(privacyVal);
console.log(zoneVal);

save.addEventListener('click', () => {
    console.log("save clicked");
    localStorage.setItem("email", emailBtn.checked);
    localStorage.setItem("privacy", publicBtn.checked);
    localStorage.setItem("timezone", zone.value);
    console.log(emailBtn.checked);
});

cancel.addEventListener('click', () => {
    localStorage.clear();

    // for(let i=0; i < 2; i++) {
    //     labels[i].innerHTML = "OFF";
    //     labels[i].classList.remove("on");
    // }

    emailBtn.checked = false;
    publicBtn.checked =false;
    zone.selectedIndex = 0;
    // console.log(zone.value);
});

window.addEventListener("load", (event) => {
    console.log("emailVal", emailVal);
    zone.value = zoneVal;
    labelOne = document.getElementById("label1");
    labelTwo = document.getElementById("label2");

    
        if (emailVal === "true") {
        emailBtn.checked = true;
        // labelOne.classList.add("on");
        // labelOne.innerHTML = "ON";
        }  else if (emailVal === "false") {
        emailBtn.checked = false;
        // labelOne.classList.remove("on");
        // labelOne.innerHTML = "OFF";
        }

        if (privacyVal === "true") {
        publicBtn.checked = true;
        // labelTwo.classList.add("on");
        // labelTwo.innerHTML = "ON";
        
        } else if (privacyVal === "false") {
            // labelTwo.classList.remove("on");
            publicBtn.checked = false;
            // labelTwo.innerHTML = "OFF";
            
         }

         if (zoneVal === null) {
            zone.selectedIndex = 0;
         }

        
  });
  

