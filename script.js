const muteVideos = () => {
  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    video.muted = true;
  });
}

const addVideo = () => {
  muteVideos();

  const button = document.querySelector('button');
  const video = document.createElement('video');

  video.src = 'videos/2.mp4';
  video.controls = false;
  video.autoplay = true;
  video.loop = true;

  button.after(video);
}
