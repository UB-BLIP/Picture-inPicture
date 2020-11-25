const videoElement = document.getElementById('videoElement');
const startButton = document.getElementById('btn');

startButton.addEventListener('click', async()=>{
    //Disable Button
    startButton.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    startButton.disabled = false;
});

//Promt to select media stream, pass video element, then play 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
        videoElement.play();
        };
    }catch (error) {
        //Catch Error Here
    }
}


//On Load
selectMediaStream();