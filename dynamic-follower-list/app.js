const facebookFollowers = document.getElementById("fb-followers");
const youtubeFollowers = document.getElementById("yt-followers");

function animateCounter(followers, start, end, duration) {
  let startTime = null;

  function update(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    facebookFollowers.textContent = value.toLocaleString();
    youtubeFollowers.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

animateCounter(14548, 0, 14548, 3000);
