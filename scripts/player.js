const video = document.getElementById('video');
const playBtn = document.getElementsByClassName('startBtn');
const player = document.getElementById('player');
const durationControl = document.querySelector('.player__control');
const soundControl = document.querySelector('.player__sound-control');

window.addEventListener('load', function () {
	video.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			player.classList.add('paused');
			intervalId = setInterval(updateDuration, 1000 / 60);
		} else {
			video.pause();
			player.classList.remove('paused');
		}
	});

	for (let i = 0; i < playBtn.length; i++) {
		const currentBtn = playBtn[i];

		currentBtn.addEventListener('click', function () {
			if (video.paused) {
				video.play();
				player.classList.add('paused');
			} else {
				video.pause();
				clearInterval(intervalId);
				player.classList.remove('paused');
			}
		});
	}

	function setVideoDuration() {
		video.currentTime = durationControl.value;
		updateDuration();
	}

	function updateDuration() {
		durationControl.value = video.currentTime;
		let step = video.duration / 100;
		let percent = video.currentTime / step;
		durationControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${percent}%, #626262 ${percent}%)`;
	}

	durationControl.min = 0;
	durationControl.value = 0;
	durationControl.max = video.duration;
	durationControl.addEventListener('input', setVideoDuration);

	soundControl.min = 0;
	soundControl.max = 10;
	soundControl.value = 7;
	soundControl.addEventListener('input', changeSoundVolume);

	function changeSoundVolume() {
		video.volume = soundControl.value / 10;
	}

	video.addEventListener('ended', () => {
		player.classList.remove('paused');
		video.currentTime = 0;
	});
});
