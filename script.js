var button = document.getElementById("submit-button")
var first_cover = document.getElementById("first")
var res_cover = document.getElementById("result-screen");
var msg = document.getElementById("msg")
var clicked = false;

var username = document.getElementById("name-text");
var age = document.getElementById("age-number");
var email = document.getElementById("email-address");
var user_message = document.getElementById("user-message");

var message = `<h2 id="res">Hello, {name} 😊</h2>
<textarea id="msg" type="text" readonly>We have concluded that you are {remark}!</textarea>
<p>{cur_msg}We will send you the message via email: </p>
<h6>{message}</h6>`

button.addEventListener("click", function(event) {
    event.preventDefault()
    if (!clicked) {
        first_cover.classList = "first deact";
        res_cover.classList = "active"
        clicked = true
    }
    let remark;
    let cur_msg = "We will message you once you are a adult. "
    if (username.value == "" || age.value == "" || email.value == "" || user_message.value == "") {
        alert("Missing fields!");
        return
    }
    else {
        if (Number(age.value) >= 18) {
            remark = "an adult";
            cur_msg = ""
        }

        else {
            remark = "a minor";
        }
        res_cover.innerHTML = message.replace("{name}", username.value).replace("{age}", age.value).replace("{message}", user_message.value).replace("{cur_msg}", cur_msg).replace("{remark}", remark)
    }
})