// Variables that we need
var convert_form = document.getElementById("link-form");
var convert_but = document.getElementById("convert-but");
var input = document.getElementById("input");
var input_but_div = document.getElementsByClassName("input-button");
var youtube_cont_div = document.getElementsByClassName("youtube-container");
var youtube_cont_opacity = 0;


// Functions that we need

// Spinning animation while conversion
function loading_animation() {
    convert_but.remove();
    var spinner_button = document.createElement("button");
    spinner_button.className = "btn btn-outline-light"
    spinner_button.type = "button";
    spinner_button.disabled = true;
    spinner_button.style.width = "5em";
    var span1 = document.createElement("span");
    span1.className = "spinner-border spinner-border-sm";
    span1.role = "status";
    span1.ariaHidden = true;
    var span2 = document.createElement("span");
    span2.className = "visually-hidden";
    span2.innerHTML = "Loading...";
    spinner_button.appendChild(span1);
    spinner_button.appendChild(span2);
    input_but_div[0].appendChild(spinner_button);
}

// Page listeners for elements

// Apply spinning animation while conversion
convert_form.addEventListener("submit", loading_animation)

// Home click
document.getElementsByClassName("home-logo")[0].addEventListener("click", function() {
    window.location.href = "/"
})


// Landing animation (fade)
var youtube_cont_fade = setInterval( function() {
    if (youtube_cont_div[0].style.opacity != 1) {
        youtube_cont_opacity += 0.1;
        youtube_cont_div[0].style.opacity = "" + youtube_cont_opacity;
    } else {
        clearInterval(youtube_cont_fade);
    }
}, 50)