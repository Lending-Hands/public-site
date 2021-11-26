function login(inputId) {
    var username = document.getElementById(inputId).value;
    if(username != "") {
        console.log("Logged in as " + username);
        sessionStorage.setItem("username", username);
        window.location.href = "../docs/account.html";
    }
}

function autoLogin() {
    if(sessionStorage.getItem("username")) window.location.href = "../docs/home.html";
}

function logout() {
    sessionStorage.setItem("username", "");
}

function getUser(elementId, insertIn) {
    var username = sessionStorage.getItem("username");
    if(username.length > 0) {
        if(insertIn.length > 0) document.getElementById(elementId).innerHTML = insertIn.replace("<*>", username);
        else document.getElementById(elementId).innerHTML = username;
    }
}