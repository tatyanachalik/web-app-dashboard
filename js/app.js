
//  ---------- TOGGLE BTN ----------
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

//  ---------- SEARCH MEMBERS  ----------

const list = document.querySelector(".list");

function searchMembers() {
    // get search value from search box
    
    list.classList.add("show");
    let searchVal = document.getElementById('userField');
    let members = document.getElementsByClassName('member-list-item');
    searchVal = searchVal.value.toUpperCase();
    
    
    //console.log(searchVal);
    //console.log(members);

    for (let i = 0 ; i < members.length; i++) {
        console.log(members[i].textContent)
        let text = members[i].textContent;
   
        
        text = text.toUpperCase();
        // console.log(text);
        // console.log(text.indexOf(searchVal));
        if (text.includes(searchVal)) {
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



