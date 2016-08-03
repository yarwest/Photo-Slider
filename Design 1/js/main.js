var /* Stores available pictures and the current photo */
    photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    nPhotos = photos.length,
    currentPhoto = 0;

/* Changes the currentPhoto based on the direction (passed as param)
   When the currentPhoto is on either side of the array, the value gets set to the opposite end of the array
   At the end the assign fucntion for the img gets called*/
function change(direction) {
    if(direction === 'left') {
        if(currentPhoto === 0) {
            currentPhoto = nPhotos-1;
        } else {
            currentPhoto--;
        }
    } else if(direction === 'right') {
        if(currentPhoto === nPhotos-1) {
            currentPhoto = 0;
        } else {
            currentPhoto++;
        }
    }
    assign('img');
}

/* Opens overlay by setting display to 'block', also calls assign function for overlay-img*/
function openOverlay() {
    document.getElementById('overlay').style.display="block";
    assign('overlay-img');
}

/* Closes overlay by setting display to 'none' */
function closeOverlay() {
    document.getElementById('overlay').style.display="none";
}

/* Function that sets the source of the element (passed as param) to the current photo */
function assign(ID) {
    document.getElementById(ID).src='../img/' + photos[currentPhoto];
}