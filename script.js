const playSong = document.getElementsByClassName('play');
const stopSong = document.getElementsByClassName('stop');
const volume = document.querySelector('.volume');
const load = document.querySelector('.load');

let audio;

for(element of playSong){
    element.addEventListener('click', function(){
        let song = this.getAttribute('id');
        audio = new Audio(`/${song}.mp3`);
        audio.play();
        load.classList.add('loader');
    })
}
for(element of stopSong){
    element.addEventListener('click', function(){
        audio.pause();
        load.classList.remove('loader');
    })
}
volume.addEventListener('click', function(){
    let songVolume = this.value;
    audio.volume = songVolume;
})