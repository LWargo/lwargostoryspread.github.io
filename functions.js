function brown_hair_vis(){
    console.log("function began");
    var x = document.getElementById("cc_brown_hair");
    if(x.style.visibility === "visible"){
        console.log("currently visible");
        x.style.visibility = "hidden";
    } else {
        console.log("currently invisible");
        x.style.visibility = "visible";
    }
}
function bun_hair_vis(){
    console.log("function began");
    var x = document.getElementById("cc_bun_hair");
    if(x.style.visibility === "visible"){
        console.log("currently visible");
        x.style.visibility = "hidden";
    } else {
        console.log("currently invisible");
        x.style.visibility = "visible";
    }
}