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
function setCookie(cookie_name, cookie_hair, cookie_eye, expiration){
    const d = new Date();
    d.setTime(d.getTime() + (expiration*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookie_name + ": Hair= " + cookie_hair + "; Eyes= " + cookie_eye + ";" + expires + ";path/";

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
