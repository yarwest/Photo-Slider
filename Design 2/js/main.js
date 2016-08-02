var photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    nPhotos = photos.length,
    currentPhoto = 0;

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

function select(img) {
    currentPhoto = img;
    assign('img');
}

function openOverlay() {
    document.getElementById('overlay').style.display="block";
    assign('overlay-img');
}

function closeOverlay() {
    document.getElementById('overlay').style.display="none";
}

function assign(ID) {
    document.getElementById(ID).src='../img/' + photos[currentPhoto];
}