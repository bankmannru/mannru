function passwordCheck() {
    var password = document.getElementById("passwordType");
    var passwordTyped = password.value;
    if(passwordTyped == "a555") {
        return true;
    }
    alert("no");
    return false;
}