// variables that we need
var home = document.getElementById("home");
var tools = document.getElementById("tools");
var contact = document.getElementById("contact");
var home_check_tool = document.getElementById("home-check-tool");
var g_preview_home_div = document.getElementById("preview-home")
var g_preview_opacity = 0;


// Functions for the html page

// this makes the home page our landing page
function onLand() {
    var home = document.getElementById("home");
    home.style.color = "#808080";
 }

 // Function for tools click (nav)
 function go_to_tools() {
    home.style.color = "white";
    tools.style.color = "#808080";
    contact.style.color = "white";
    var existing_div = document.getElementById("preview-home");
    var existing_div2 = document.getElementById("contact-container");
    if (existing_div != null || existing_div2 != null) {
        try {
            existing_div.remove();
        } catch(err) {
            existing_div2.remove();
        }
        var iBody = document.getElementById("body");
        var tool_cont = document.createElement('div');
        tool_cont.id = "tools-container";

        // TOOL ONE ------------------
        var tool = document.createElement('div');
        tool.className = "tool";
        var tool_img = document.createElement("img");
        tool_img.className = "image-pdf"
        tool_img.src = "/static/images/pdf.png"
        var tool_h3 = document.createElement("h3");
        tool_h3.innerHTML = "Image to PDF converter"
        var tool_p = document.createElement("p");
        tool_p.className = "tool-explanation";
        tool_p.innerHTML = "A fast image to pdf conversion tool that may be useful in lots of cases. PDF is a preferable type as it uses less space.";
        var tool_but = document.createElement("button");
        tool_but.type = "button";
        tool_but.className = "btn btn-outline-light";
        tool_but.id = "but1"
        tool_but.innerHTML = "Check Tool";
        tool.appendChild(tool_img);
        tool.appendChild(tool_h3);
        tool.appendChild(tool_p);
        tool.appendChild(tool_but);

        // TOOL 2 -----------------------
        var tool2 = document.createElement('div');
        tool2.className = "tool";
        var tool2_img = document.createElement("img");
        tool2_img.className = "image-youtube"
        tool2_img.src = "/static/images/ytb-mp3.png"
        var tool2_h3 = document.createElement("h3");
        tool2_h3.innerHTML = "Youtube to MP3 converter"
        var tool2_p = document.createElement("p");
        tool2_p.className = "tool-explanation";
        tool2_p.innerHTML = "Download your favorite music from Youtube by converting them into high quality MP3. Simple to use and very effective.";
        var tool2_but = document.createElement("button");
        tool2_but.type = "button";
        tool2_but.className = "btn btn-outline-light";
        tool2_but.id = "but2"
        tool2_but.innerHTML = "Check Tool";
        tool2.appendChild(tool2_img);
        tool2.appendChild(tool2_h3);
        tool2.appendChild(tool2_p);
        tool2.appendChild(tool2_but);
        tool_cont.appendChild(tool);
        tool_cont.appendChild(tool2);
        iBody.appendChild(tool_cont);

        // TOOL 3 --------------------
        var tool3 = document.createElement('div');
        tool3.className = "tool";
        var tool3_img = document.createElement("img");
        tool3_img.className = "image-coming-soon"
        tool3_img.src = "/static/images/coming-soon.png"
        var tool3_h3 = document.createElement("h3");
        tool3_h3.innerHTML = "Want more tools ?"
        var tool3_p = document.createElement("p");
        tool3_p.className = "tool-explanation";
        tool3_p.innerHTML = "We are currently working on adding more tools. Help support our website by sharing it with your friends !";
        var tool3_but = document.createElement("button");
        tool3_but.type = "button";
        tool3_but.className = "btn btn-outline-light";
        tool3_but.id = "but3"
        tool3_but.innerHTML = "Share site";
        tool3.appendChild(tool3_img);
        tool3.appendChild(tool3_h3);
        tool3.appendChild(tool3_p);
        tool3.appendChild(tool3_but);
        tool_cont.appendChild(tool);
        tool_cont.appendChild(tool2);
        tool_cont.appendChild(tool3);
        iBody.appendChild(tool_cont);
        var tool_cont_div = document.getElementById("tools-container")
        var tool_cont_opacity = 0;
        var tool_cont_fade = setInterval( function() {
            if (tool_cont_div.style.opacity != 1) {
                tool_cont_opacity += 0.1;
                tool_cont_div.style.opacity = "" + tool_cont_opacity
            } else {
                clearInterval(tool_cont_fade);
            }
        }, 50)
    }
    var tool1_but = document.getElementById("but1");
    tool1_but.addEventListener("click", function() {
        window.location.href = "/image_to_pdf";
    })
    var tool2_but = document.getElementById("but2");
    tool2_but.addEventListener("click", function() {
        window.location.href = "/youtube_to_mp3";
    })
}

// Function for home click (nav)
function go_to_home() {
    home.style.color = "#808080";
    tools.style.color = "white";
    contact.style.color = "white";
    var existing_div = document.getElementById("tools-container");
    var existing_div2 = document.getElementById("contact-container");
    if (existing_div != null || existing_div2 != null) {
        try {
            existing_div.remove();
        } catch(err) {
            existing_div2.remove();
        }
        var iBody = document.getElementById("body");
        var iDiv = document.createElement("div");
        var iH1 = document.createElement("h1");
        var iP1 = document.createElement("p");
        var iBut1 = document.createElement("button");
        iBut1.innerHTML = "Check Tools";
        iBut1.className = "btn btn-outline-light"
        iBut1.type = "button";
        iBut1.id = "home-check-tool";
        iP1.className = "preview-paragraph";
        iP1.innerHTML = "We try to deliver simple functional web pages, packed with fast and effective tools that provide our users with utmost comfort and the best experiences."
        iH1.className = "preview-text";
        iH1.innerHTML = "Simple · Fast · Effective"
        iDiv.id = "preview-home"
        iDiv.appendChild(iH1);
        iDiv.appendChild(iP1);
        iDiv.appendChild(iBut1);
        iBody.appendChild(iDiv);
        var preview_home_div = document.getElementById("preview-home")
        var preview_opacity = 0;
        var home_fade = setInterval( function() {
            if (preview_home_div.style.opacity != 1) {
                preview_opacity += 0.1;
                preview_home_div.style.opacity = "" + preview_opacity
            } else {
                clearInterval(home_fade);
            }
        }, 100)
    }
    var home_check_tool = document.getElementById("home-check-tool");
    home_check_tool.addEventListener("click", go_to_tools)
}

// Function for contact click (nav)
function go_to_contact() {
    home.style.color = "white";
    tools.style.color = "white";
    contact.style.color = "#808080";
    var existing_div = document.getElementById("preview-home");
    var existing_div2 = document.getElementById("tools-container");
    if (existing_div != null || existing_div2 != null) {
        try {
            existing_div.remove();
        } catch(err) {
            existing_div2.remove();
        }
        var iBody = document.getElementById("body");
        var contact_cont = document.createElement('div');
        contact_cont.id = "contact-container";
        var contact_hdr = document.createElement('h1');
        contact_hdr.className = "contact-header";
        contact_hdr.innerHTML = "You can always contact us at";
        var contact_email = document.createElement('h2');
        contact_email.className = "contact-email";
        contact_email.innerHTML = "pythontester111@gmail.com";
        var contact_p = document.createElement('p');
        contact_p.className = "contact-paragraph";
        contact_p.innerHTML = "We are more than glad to help you. This email is open for any issues you encounter or any suggestions for making our site better. Thank you."
        contact_cont.appendChild(contact_hdr);
        contact_cont.appendChild(contact_email);
        contact_cont.appendChild(contact_p);
        iBody.appendChild(contact_cont);
        var contact_cont_div = document.getElementById("contact-container")
        var contact_cont_opacity = 0;
        var contact_cont_fade = setInterval( function() {
            if (contact_cont_div.style.opacity != 1) {
                contact_cont_opacity += 0.1;
                contact_cont_div.style.opacity = "" + contact_cont_opacity
            } else {
                clearInterval(contact_cont_fade);
            }
        }, 50)
    }
}

// Landing animation (fade)
var g_home_fade = setInterval( function() {
    if (g_preview_home_div.style.opacity != 1) {
        g_preview_opacity += 0.1;
        g_preview_home_div.style.opacity = "" + g_preview_opacity
    } else {
        clearInterval(g_home_fade);
    }
}, 100)


// Defining nav listeners
home.addEventListener("click", go_to_home)

tools.addEventListener("click", go_to_tools)

contact.addEventListener("click", go_to_contact)

home_check_tool.addEventListener("click", go_to_tools)