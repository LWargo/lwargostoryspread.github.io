//import {hairJSON,eyeJSON} from './cookie';
//import { hairJSON, eyeJSON } from "./cookie" assert {type: 'json'};
var brv = document.querySelector('.cc_brown_hair');
var buv = document.querySelector('.cc_bun_hair');
var elv = document.querySelector('.cc_left_eye');
var erv = document.querySelector('.cc_right_eye');
var slv = document.querySelector('.cc_left_sarah_eye');
var srv = document.querySelector('.cc_right_sarah_eye');
var brv = document.querySelector('.cc_brown_hair');
var hairLocal = 1;
var eyeLocal = 2;

function brown_hair_vis(){
    var x = document.getElementById("cc_brown_hair");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
        hairLocal = 2;
    } else {
        x.style.visibility = "visible";
        hairLocal = 1;
    }
    console.log("toggled brown hair visibility");
}
function bun_hair_vis(){
    var x = document.getElementById("cc_bun_hair");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
        hairLocal =1;

    } else {
        x.style.visibility = "visible";
        hairLocal = 2;
    }
    console.log("toggled bun hair visibility");
}
function eye_vis(){
    var x = document.getElementById("cc_left_eye");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
        eyeLocal = 2;
    } else {
        x.style.visibility = "visible";
        eyeLocal = 1;
    }
    var y = document.getElementById("cc_right_eye");
    if(y.style.visibility === "visible"){
        y.style.visibility = "hidden";
        eyeLocal = 2;
    } else {
        y.style.visibility = "visible";
        eyeLocal = 1;
    }
}
function sarah_vis(){
    var x = document.getElementById("cc_left_sarah_eye");
    if(x.style.visibility === "visible"){
        x.style.visibility = "hidden";
        eyeLocal = 1;
    } else {
        x.style.visibility = "visible";
        eyeLocal = 2;
    }
    var y = document.getElementById("cc_right_sarah_eye");
    if(y.style.visibility === "visible"){
        y.style.visibility = "hidden";
        eyeLocal = 1;
    } else {
        y.style.visibility = "visible";
        eyeLocal = 2;

    }
}
function popup(url, windowname){
    window.open(url, windowname, 'height=800, width=900')
    return false;
}
function poptop(){
    console.log("poptop tried happening");
    window.open("customizer_clothes_tops.html", 'cuztomizer_clothes_tops', "height=400, width=600");
}/*
function setCookie(name, value, expiration){
    const d = new Date();
    d.setTime(d.getTime() + (expiration*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + " ; " + value  + ";" + expires + ";path/";

}
*/
function setCookie(name,value, days) {
    
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    
    document.cookie = name + "=" + (value || "") +expires;
    console.log(document.cookie)
}

function getCookie(getName){
    console.log("starting to grab cookies");
    console.log(hairLocal);
    console.log(eyeLocal);
    let name = getName + "=";
    console.log("made the name");
    console.log(hairLocal);
    console.log(eyeLocal);
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
    if(user != ""){return Boolean(true);}
    else{ return Boolean(false);}
}
function setup(){
    console.log("setup function finally ran");
    console.log(hairLocal);
    console.log(eyeLocal);
    console.log("set up function started");
    /*if(checkCookie() == true){
        getCookie(document.cookie);
        //If the "hair" cookie exists, change hairLocal to equal the value of the hair cookie
        console.log(document.cookie);
        console.log("there should not be a cookie");
    }
    
   if(checkCookie()== false){
        setCookie("hair", hairLocal, 15);
        setCookie("eye", eyeLocal, 15);
   }
   hairLocal = getCookie("hair");
   eyeLocal = getCookie("eye");
*/
   new_setup();
    console.log(hairLocal);
    console.log(eyeLocal);
        //console.log("check cookie is false");
    if(hairLocal == 1) {
        brown_hair_vis();
        //brv.style.setProperty('--visibility', 'visible');
    } else if(hairLocal == 2) {
        bun_hair_vis();
        
        //buv.style.setProperty('--visibility', 'hidden');
    }
    if(eyeLocal == 1){  
        eye_vis();
        //elv.style.setProperty('--visibility', 'hidden');
        //erv.style.setProperty('--visibility', 'hidden');
    }
    if(eyeLocal == 2){   
        sarah_vis(); 
      //  slv.style.setProperty('--visibility', 'visible');
      //  srv.style.setProperty('--visibility', 'visible');
    }
}

function save(){
    setCookie("hair", hairLocal, 15);
    setCookie("eye", eyeLocal, 15);
}

function new_setup(){
    console.log("new setup function was launched");
    if(localStorage.getItem("hair") === null && localStorage.getItem("eye")===null){
        localStorage.setItem("hair", hairLocal);
        localStorage.setItem("eye", eyeLocal);
        console.log("local storage was totally null");
    }
    else{
        console.log("smthg existed in local storage");
        hairLocal = localStorage.getItem("hair");
        eyeLocal = localStorage.getItem("eye");
    }
}
function new_save(){
    localStorage.setItem("hair", hairLocal);
    console.log(localStorage.getItem("hair"));
    localStorage.setItem("eye", eyeLocal);
    console.log(localStorage.getItem("eye"));
}