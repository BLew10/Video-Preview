console.log("page loaded...");
const video = document.querySelector("#video");


 video.addEventListener("click", function(){
    if(video.muted === true){
        video.muted = false; 
    } else {
    video.muted = true;
    }
 });

//  video.addEventListener("mouseover", this.play());
//  video.addEventListener("mouseout", this.pause());
