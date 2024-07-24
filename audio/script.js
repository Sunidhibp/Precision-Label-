document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.annotation-types .btn');
    const descriptionContainer = document.getElementById('annotation-description');

    function updateDescription(type) {
        let description = '';

        switch (type) {
            case 'sentiment':
                description = 'Transcription involves converting spoken language in audio files into written text. This type of annotation captures the exact words spoken, often including punctuation and sometimes speaker identifiers. Transcription is widely used in speech-to-text applications, virtual assistants, and automated transcription services for creating written records of audio content such as meetings, lectures, interviews, and podcasts.';
                break;
            case 'intent':
                description = 'Speaker diarization is the process of identifying and labeling different speakers within an audio file. It segments the audio into parts spoken by distinct individuals, often referred to as "who spoke when".  Essential in transcribing interviews, meetings, and multi-speaker conversations, speaker diarization helps in distinguishing between speakers, improving the clarity and usability of transcriptions and enabling detailed analysis of dialogues.';
                break;
            case 'entity':
                description = 'Event or sound labeling involves tagging specific sounds or events within an audio file. This includes identifying and marking occurrences such as a doorbell ringing, dog barking, glass breaking, or other non-speech audio events. Used in sound recognition systems, smart home devices, and surveillance applications, event labeling helps in automating responses to certain sounds (e.g., alerting a user to a smoke alarm) and in analyzing environmental sounds for research or monitoring purposes.';
                break;
            case 'classification':
                description = 'Phonetic annotation involves marking phonetic details within an audio file. This includes identifying and labeling phonemes (the smallest units of sound in speech), intonation, stress, rhythm, and other speech characteristics. Phonetic annotation captures the fine-grained aspects of spoken language that are crucial for linguistic analysis and speech processing.';
                break;
            case 'linguistic':
                description = 'Emotion annotation involves labeling the emotional tone conveyed in the audio, such as happiness, sadness, anger, or neutrality. This type of annotation focuses on capturing the sentiment and emotional nuances in spoken language. Critical for developing emotion recognition systems, call center analytics, and interactive entertainment, emotion annotation helps in understanding and responding to the emotional state of speakers, enhancing user experience and providing insights into customer interactions.';
                break;
            default:
                description = 'Click on any button to see the description.';
                break;
        }

        descriptionContainer.innerHTML = `<p>${description}</p>`;

        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        const clickedButton = document.querySelector(`.btn[data-type="${type}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
    }

    // Prevent default action and update description on button click
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const type = this.getAttribute('data-type');
            updateDescription(type);
        });
    });

    // Set the default button as the first button
    if (buttons.length > 0) {
        const firstButton = buttons[0];
        firstButton.classList.add('active');
        updateDescription(firstButton.getAttribute('data-type'));
    }
});
