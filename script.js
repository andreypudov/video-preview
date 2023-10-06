const addVideo = async () => {
  const video = document.createElement('video');

  video.src = 'videos/1.mp4';
  video.controls = true;
  video.autoplay = true;

  document.body.appendChild(video);
}
