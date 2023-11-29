function skillsmember() {
    var skills = document.getElementById("skills").value;
    var skillserror = document.getElementById("skillserror");
    var skillsvalid = true;
    if (skills == "") {
        skillserror.innerHTML = "Please enter your skills";
        skillsvalid = false;
    }
    else {
        skillserror.innerHTML = "";
    }
    return skillsvalid;
}