const startBtn = document.getElementById('start-btn');
const outputDiv = document.getElementById('output');

const recognition = new window.webkitSpeechRecognition(); // Using WebkitSpeechRecognition for Chrome

recognition.continuous = true;
recognition.interimResults = true;

startBtn.addEventListener('click', () => {
    recognition.start();
    outputDiv.innerHTML = 'Listening...';
});

recognition.onresult = function(event) {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    outputDiv.innerHTML = transcript;

    // Send transcript to server for processing (you need to implement this part)
    fetch('/process', {
        method: 'POST',
        body: JSON.stringify({ text: transcript }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
