window.addEventListener('load', function () {
	const audioContext = new AudioContext();
	const musicPlayer = document.getElementById('music-player');
	const playButton = document.getElementById('play-button');

	const frequencyMap = {
		'C4': 261.63,
		'D4': 293.66,
		'E4': 329.63,
		'F4': 349.23,
		'G4': 392.00,
		'A4': 440.00,
		'B4': 493.88,
	};

	const notes = ['E4', 'D4', 'C4', 'D4', 'E4', 'E4', 'E4'];
	const duration = 0.5;
	const volume = 0.1;

	const createOscillator = (frequency, startTime, duration, volume) => {
		const oscillator = audioContext.createOscillator();
		const gain = audioContext.createGain();

		oscillator.type = 'sine';
		oscillator.frequency.value = frequency;

		gain.gain.setValueAtTime(volume, startTime);
		gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

		oscillator.connect(gain);
		gain.connect(audioContext.destination);

		oscillator.start(startTime);
		oscillator.stop(startTime + duration);
	};

	playButton.addEventListener('click', () => {
		notes.forEach((note, index) => {
			const startTime = audioContext.currentTime + (index * duration);
			const frequency = frequencyMap[note];

			createOscillator(frequency, startTime, duration, volume);
		});
	});

	const sequence = [
		{ pitch: 60, duration: 0.5, velocity: 1.0 },
		{ pitch: 62, duration: 0.5, velocity: 0.8 },
		{ pitch: 64, duration: 1.0, velocity: 0.6 },
		{ pitch: 60, duration: 0.5, velocity: 1.0 },
		{ pitch: 62, duration: 0.5, velocity: 0.8 },
		{ pitch: 64, duration: 1.0, velocity: 0.6 },
		{ pitch: 67, duration: 1.0, velocity: 0.8 },
		{ pitch: 65, duration: 0.5, velocity: 0.6 },
		{ pitch: 64, duration: 0.5, velocity: 0.4 },
		{ pitch: 62, duration: 1.0, velocity: 0.6 },
		{ pitch: 67, duration: 1.0, velocity: 0.8 },
		{ pitch: 65, duration: 0.5, velocity: 0.6 },
		{ pitch: 64, duration: 0.5, velocity: 0.4 },
		{ pitch: 62, duration: 1.0, velocity: 0.6 },
		{ pitch: 60, duration: 1.0, velocity: 0.8 },
		{ pitch: 64, duration: 1.0, velocity: 0.6 }
	];

	function playSequence() {
		let time = audioCtx.currentTime;

		sequence.forEach((note, index) => {
			const oscillator = audioCtx.createOscillator();
			oscillator.type = 'sine';
			oscillator.frequency.value = midiToFreq(note.pitch);

			const gainNode = audioCtx.createGain();
			gainNode.gain.value = note.velocity;

			oscillator.connect(gainNode);
			gainNode.connect(audioCtx.destination);

			oscillator.start(time);
			oscillator.stop(time + note.duration);

			time += note.duration;
		});
	}
	function playMelody() {
		const oscillator = audioCtx.createOscillator();
		oscillator.type = 'sawtooth';
		oscillator.frequency.value = 440;

		const filter = audioCtx.createBiquadFilter();
		filter.type = 'lowpass';
		filter.frequency.value = 1000;

		oscillator.connect(filter);
		filter.connect(audioCtx.destination);

		oscillator.start();
		oscillator.stop(audioCtx.currentTime + 2);
	}

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	function visualize() {
		const analyser = audioCtx.createAnalyser();
		analyser.fftSize = 2048;

		const bufferLength = analyser.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);

		analyser.connect(audioCtx.destination);

		function draw() {
			requestAnimationFrame(draw);

			analyser.getByteTimeDomainData(dataArray);

			ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.lineWidth = 2;
			ctx.strokeStyle = 'rgb(255, 0, 0)';

			ctx.beginPath();

			const sliceWidth = canvas.width * 1.0 / bufferLength;
			let x = 0;

			for (let i = 0; i < bufferLength; i++) {
				const v = dataArray[i] / 128.0;
				const y = v * canvas.height / 2;

				if (i === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}

				x += sliceWidth;
			}

			ctx.stroke();
		}

		draw();
	}
	const frequencyInput = document.getElementById('frequency');
	frequencyInput.addEventListener('input', () => {
		const frequency = frequencyInput.value;
		oscillator.frequency.value = frequency;
	});
	const cutoffFrequencyInput = document.getElementById('cutoff-frequency');
	cutoffFrequencyInput.addEventListener('input', () => {
		const cutoffFrequency = cutoffFrequencyInput.value;
		filter.frequency.value = cutoffFrequency;
	});
	const effectsPresetSelect = document.getElementById('effects-preset');
	effectsPresetSelect.addEventListener('change', () => {
		const selectedPreset = effectsPresetSelect.value;

		switch (selectedPreset) {
			case 'none':
				filter.disconnect();
				break;
			case 'low-pass':
				filter.type = 'lowpass';
				filter.frequency.value = 1000;
				oscillator.connect(filter);
				filter.connect(audioCtx.destination);
				break;
			case 'high-pass':
				filter.type = 'highpass';
				filter.frequency.value = 500;
				oscillator.connect(filter);
				filter.connect(audioCtx.destination);
				break;
		}
	});

	if (navigator.requestMIDIAccess) {
		navigator.requestMIDIAccess()
			.then(onMIDISuccess, onMIDIFailure);
	} else {
		console.log("Web MIDI API not supported");
	}

	function onMIDISuccess(midiAccess) {
		console.log("MIDI ready");
		const inputs = midiAccess.inputs;
		// Get a reference to the input device you want to use
		const input = inputs.values().next().value;
		// Add an event listener to the MIDI input
		input.onmidimessage = onMIDIMessage;
	}

	function onMIDIFailure() {
		console.log("Could not access your MIDI devices");
	}

	function onMIDIMessage(event) {
		const message = event.data;
		// Convert the MIDI data to Web Audio API data
		const frequency = 440 * Math.pow(2, (message[1] - 69) / 12);
		// Use the Web Audio API to generate audio
		const oscillator = audioCtx.createOscillator();
		oscillator.type = 'sine';
		oscillator.frequency.value = frequency;
		oscillator.connect(audioCtx.destination);
		oscillator.start();
		oscillator.stop(audioCtx.currentTime + 0.5);
	}
	MIDI.loadPlugin({
		soundfontUrl: "https://cdn.jsdelivr.net/npm/midi-soundfonts@latest/FluidR3_GM/",
		onsuccess: function () {
			MIDI.Player.loadFile("path/to/midi/file.mid", function () {
				MIDI.Player.start();
			});
		}
	});
});
