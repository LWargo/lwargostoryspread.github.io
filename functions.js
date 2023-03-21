function brown_hair_vis(){
                
    var x = document.getElementById('cc_brown_hair');
    if(x.style.visibility === "visible"){
        alert("currently visible");
        x.style.visibility = "hidden";
    } else {
        alert("currently invisible");
        x.style.visibility = "visible";
    }
}