function brown_hair_vis(){
    var x = document.getElementById("cc_brown_hair");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}
function bun_hair_vis(){
    var x = document.getElementById("cc_bun_hair");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}
function eye_vis(){
    var x = document.getElementById("cc_left_eye");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
    var y = document.getElementById("cc_right_eye");
    if(y.style.visibility === "visible"){
        y.style.visibility = "hidden";
    } else {
        y.style.visibility = "visible";
    }
}
function sarah_vis(){
    var x = document.getElementById("cc_left_sarah_eye");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
    var y = document.getElementById("cc_right_sarah_eye");
    if(y.style.visibility === "visible"){
        y.style.visibility = "hidden";
    } else {
        y.style.visibility = "visible";
    }
}
function popup(url, windowname){
    window.open(url, windowname, 'height=800, width=900')
    return false;
}
function poptop(){
    window.open("customizer_clothes_tops.html", 'cuztomizer_clothes_tops', "height=400, width=600");
}