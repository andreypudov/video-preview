const addVideo = async () => {
  const video = document.createElement('video');

  video.src = 'videos/2.mp4';
  video.controls = false;
  video.autoplay = true;
  video.loop = true;

  document.body.appendChild(video);
}
