// Variables that we need
var f = document.getElementById("files");
var files_number = document.getElementsByClassName("files-number");
var dotted_pack = document.getElementsByClassName("dotted-pack");
var selected_files = document.createElement("div");
var upload_form = document.getElementById("upload");
var pdf_cont_div = document.getElementsByClassName("pdf-container");
var pdf_cont_opacity = 0;
selected_files.className = "selected-files-names";


// A function that gets triggered when the content of the upload changes
f.onchange = function() {
    var x;
    var all_files_names = [];
    var files = f.files;
    var files_length = files.length;

    // Remove convert button and images name and change the text if there are no selected files
    if (files_length == 0) {
        files_number[0].innerHTML = "No images selected";
        document.getElementsByClassName("selected-files-names")[0].innerHTML = "";
        document.getElementsByClassName("selected-files-names")[0].remove()
        if (document.getElementById("convert-but") != null) {
            document.getElementById("convert-but").remove()
        }
    } else {
        if (files_length == 1) {
            files_number[0].innerHTML = "" + files_length + " image selected";
        } else {
            files_number[0].innerHTML = "" + files_length + " images selected";
        }

        // Append all the uploaded file names to the array
        for (let i = 0;i < files_length;i++) {
            all_files_names.push(files[i].name);
        }

        // If the names are already there and we upload different files, remove old names and add the new ones
        if (document.getElementsByClassName("selected-files-names")[0] != null) {
            document.getElementsByClassName("selected-files-names")[0].remove();
            selected_files.innerHTML = "";
            for (let j of all_files_names) {
                x = document.createElement("p");
                x.className = "images-labels";
                x.innerHTML = j;
                selected_files.appendChild(x);
                dotted_pack[0].appendChild(selected_files);
            }
        } else {
            for (let j of all_files_names) {
                x = document.createElement("p")
                x.className = "images-labels";
                x.innerHTML = j;
                selected_files.appendChild(x);
                dotted_pack[0].appendChild(selected_files);
            }
        }

        // If the convert button doesnt already exist, add a one and remove the download button if it exists
        if (document.getElementById("convert-but") == null) {
            // if the download button is there and we change the
            if (document.getElementById("download-but") != null) {
                document.getElementById("download-but").remove()
            }
            var convert_but = document.createElement("button");
            convert_but.className = "btn btn-outline-light";
            convert_but.type = "submit";
            convert_but.id = "convert-but";
            convert_but.style.fontSize = "20px";
            convert_but.innerHTML = "Convert";
            upload_form.appendChild(convert_but);
        }

        // Apply spinning animation while conversion
        upload_form.addEventListener("submit", loading_animation);
    }

    // When we choose different files, remove the green-check if it exists.
    if (document.getElementsByClassName("green-check")[0] != null ) {
        document.getElementsByClassName("green-check")[0].remove();
    }
}


// Functions that we need

// Spinning animation for while conversion
function loading_animation() {
    convert_but = document.getElementById("convert-but");
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
    upload_form.appendChild(spinner_button);
}

// Page listeners for elements

// Home click
document.getElementsByClassName("home-logo")[0].addEventListener("click", function() {
    window.location.href = "/"
})


// Landing animation (fade)
var pdf_cont_fade = setInterval( function() {
    if (pdf_cont_div[0].style.opacity != 1) {
        pdf_cont_opacity += 0.1;
        pdf_cont_div[0].style.opacity = "" + pdf_cont_opacity;
    } else {
        clearInterval(pdf_cont_fade);
    }
}, 50)