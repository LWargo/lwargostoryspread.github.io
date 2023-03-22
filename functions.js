

var buv = document.querySelector('.cc_bun_hair');
var elv = document.querySelector('.cc_left_eye');
var erv = document.querySelector('.cc_right_eye');
var slv = document.querySelector('.cc_left_sarah_eye');
var srv = document.querySelector('.cc_right_sarah_eye');
var brv = document.querySelector('.cc_brown_hair');

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
    console.log("poptop tried happening");
    window.open("customizer_clothes_tops.html", 'cuztomizer_clothes_tops', "height=400, width=600");
}
function setCookie(name, value, expiration){
    const d = new Date();
    d.setTime(d.getTime() + (expiration*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + " ; " + value  + ";" + expires + ";path/";

}
function getCookie(getName){
    let name = getName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(' ; ');
    for( let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie(){
    console.log("check cookie function started");
    let user = getCookie(document.cookie);
    if(user != ""){return Boolean(false);}
    else{ return Boolean(true);}
}
function setup(){
    console.log("set up function started");
    if(checkCookie() == true){
        getCookie(document.cookie);
        console.log("there should not be a cookie");
    }
    else{
        console.log("check cookie is false");
        brv.style.setProperty('--visibility', 'visible');
        buv.style.setProperty('--visibility', 'hidden');
        elv.style.setProperty('--visibility', 'hidden');
        erv.style.setProperty('--visibility', 'hidden');
        slv.style.setProperty('--visibility', 'visible');
        srv.style.setProperty('--visibility', 'visible');

}
}