"use strict";

function notify() {
    // if ( document.getElementById("log").click) {
    //     document.getElementById("successfully").innerHTML = "Logged in!";
    //     setTimeout("location.href = 'main.html';",1500);
    // }

    if (document.getElementById("logpassword") == null && document.getElementById("logmail") == null) {
        document.getElementById("successfully").innerHTML = "You're not going in";
    }
}