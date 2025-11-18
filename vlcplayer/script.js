const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");


const speedUp = document.querySelector("#speedUp");

const speedDown = document.querySelector("#speedDown");

const volumeUp = document.querySelector("#volumeUp");

const volumeDown = document.querySelector("#volumeDown");

const toast = document.querySelector(".toast");

let video = "";


// to take input while clicking on open
const handleInput = () => {
    videoInput.click();
}


// to play the video

const acceptInputHandler = (obj) =>{
    let selectedvideo;

    
    selectedvideo = obj.target.files[0];


    const link = URL.createObjectURL(selectedvideo);
    
    
    const videoElement = document.createElement("video");

    videoElement.src = link;

    videoElement.setAttribute("class","video");
    
    if(videoPlayer.children.length >0){
        videoPlayer.removeChild(videoPlayer.children[0]);
    }
    
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.volume = 0.3;
}

// ** calling input function of click on input button.

videoBtn.addEventListener("click",handleInput);


// when input video is selected calling accepterHandler function to do respective funcionality.
videoInput.addEventListener("change",acceptInputHandler);








//  *** to select the perticular element with given id







// to increase the speed of video

const speedUpHandler = () => {
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if(videoElement.playbackRate >3){
        return;
    }
    
    const increasedSpeed = videoElement.playbackRate+0.5;
    videoElement.playbackRate = increasedSpeed;
    showToast(increasedSpeed + "X");
}

    




// to decrease the speed of video
const speedDownHandler = () => {
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if(videoElement.playbackRate >=0.5){
        const decresedSpeed = videoElement.playbackRate - 0.5;
        videoElement.playbackRate = decresedSpeed;

        showToast(decresedSpeed+"X");

    }
}

// // to increase the volume of video
const volumeUpHandler = () => {

    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if(videoElement.volume >= 0.99){
        return;
    }
    
    const increasedVolume = Math.round((videoElement.volume + 0.1) * 100) /100;
    videoElement.volume = increasedVolume;
    showToast(increasedVolume*100+"%");
}

// // to decrease the volume of video
const volumeDownHandler = () =>{
    const videoElement = document.querySelector("video");
    if(videoElement==null){
        return;
    }
    if(videoElement.volume <= 0.1){
        videoElement.volume = 0;
        return;
    }
    
    const decreasedVolume = Math.round((videoElement.volume - 0.1) * 100) /100;
    videoElement.volume = decreasedVolume;
    showToast(decreasedVolume*100+"%");
}




// toast function to display message on the screen
function showToast(message){
    if(toast== null) return;
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 1000);
}



// ** adding clicking functionality on the element and calling the respective function.


speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);




