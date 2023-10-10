let videoFileIndex = 0;

const muteVideos = () => {
  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    video.muted = true;
  });
}

const getNextVideoFile = () => {
  videoFileIndex = (videoFileIndex + 1) % 4;
  console.log(videoFileIndex);
  return `../videos/${videoFileIndex}.mp4`
}

const createVideo = () => {
  const video = document.createElement('video');

  video.src = getNextVideoFile();
  video.controls = false;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;

  return video;
}

const addVideo = () => {
  muteVideos();

  const video = createVideo();
  document.body.appendChild(video);
}

const addVideos = () => {
  for (let index = 0; index < 10; ++index) {
    addVideo();
  }
}
