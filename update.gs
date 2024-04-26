async function updateTitle() {
  const videoID = '0_xR4xyxwRk';
  const part = 'snippet,statistics';
  const params = { id: videoID };

  try {
    const response = await YouTube.Videos.list(part, params);
    const video = response.items[0];
    video.snippet.title = video.statistics.viewCount;

    await YouTube.Videos.update(video, part);
  } catch (error) {
    console.error('Error updating video title:', error);
  }
}
