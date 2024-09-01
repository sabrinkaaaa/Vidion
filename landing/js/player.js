const videoPlayer = document.querySelector('.video_player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play_button')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.curr')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video_progress')
const progressBar = videoPlayer.querySelector('.video_progress_filled')
const openButton = document.getElementById('play')
const wrapper = document.querySelector('.video_player_wrapper')
const exit = document.getElementById('exit')
const blur = document.querySelector('.blur')

//кнопки play и pause

playButton.addEventListener('click', () => {
    if(video.paused){
        video.play()
        playButton.innerHTML = '<svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m7 1.25a2.752 2.752 0 0 0 -2.75 2.75v16a2.75 2.75 0 0 0 5.5 0v-16a2.752 2.752 0 0 0 -2.75-2.75z" fill="#000000" style="fill: rgb(255, 255, 255);"></path><path d="m17 1.25a2.752 2.752 0 0 0 -2.75 2.75v16a2.75 2.75 0 0 0 5.5 0v-16a2.752 2.752 0 0 0 -2.75-2.75z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></svg>'
    }else{
        video.pause()
        playButton.innerHTML = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g id="Play"><path d="m37.3223 21.2861-23.9307-11.9629a3.0347 3.0347 0 0 0 -4.3916 2.7129v23.9278a3.03 3.03 0 0 0 4.3916 2.7129l23.9307-11.9629a3.0338 3.0338 0 0 0 0-5.4277z" fill="#000000" style="fill: rgb(255, 255, 255);"></path></g></svg>'
    }
})

//колонка звука

volume.addEventListener('mousemove', (e)=> {
    video.volume = e.target.value
})

//отображение времени

const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60)
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video.duration / 60)
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+ currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`
}
video.addEventListener('timeupdate', currentTime)

//отброжение прошедшей части видео
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percentage}%`
})

//перемотка по клику по шкале
progress.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})

//открыть видеоплеер
openButton.addEventListener('click', () => {
    document.getElementById('wrap').style.height = '100%'
    blur.style.display = 'block'
})

exit.addEventListener('click', () => {
    document.getElementById('wrap').style.height = '0'
    blur.style.display = 'none'
    video.pause()
})