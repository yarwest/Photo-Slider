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
    document.getElementById('img').src='../img/' + photos[currentPhoto];
}

function open() {
    Document.getElementById('overlay').style.display="inline-block";
}