function login(inputId) {
    var username = document.getElementById(inputId).value;
    if(username != "") {
        console.log("Logged in as " + username);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("userType", 0);
        sessionStorage.setItem("events", 0);
        window.location.href = "../docs/accountE.html";
    }
}

function loginOrg(inputId) {
    var username = document.getElementById(inputId).value;
    if(username != "") {
        console.log("Logged in as " + username);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("userType", 1);
        window.location.href = "../docs/organization.html";
    }
}

function toAccount() {
    if(sessionStorage.getItem("userType") == "1") {
        window.location.href = "../docs/organization.html";
    } else if(parseInt(sessionStorage.getItem("events")) > 0) {
        window.location.href = "../docs/accountF.html"
    } else {
        window.location.href = "../docs/accountE.html";
    }
}

function autoLogin() {
    if(sessionStorage.getItem("username")) window.location.href = "../docs/home.html";
}

function logout() {
    sessionStorage.setItem("username", "");
    sessionStorage.setItem("userType", "");
    sessionStorage.setItem("events", "");

}

function getUser(elementId, insertIn) {
    var username = sessionStorage.getItem("username");
    if(username.length > 0) {
        if(insertIn.length > 0) document.getElementById(elementId).innerHTML = insertIn.replace("<*>", username);
        else document.getElementById(elementId).innerHTML = username;
    }
}

function registerEvent() {
    sessionStorage.setItem("events", parseInt(sessionStorage.getItem("events"))+1);
    toAccount();
}