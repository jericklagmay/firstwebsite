// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.teacher-button');
    const messageDiv = document.getElementById('message');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const teacher = button.getAttribute('data-teacher');
            const message = `Thank you, ${teacher}, for always inspiring us!`;
            displayMessage(message);
            playSound();
            showConfetti();
        });
    });

    // Custom message feature
    document.getElementById('sendCustom').addEventListener('click', () => {
        const customMessage = document.getElementById('customMessage').value.trim();
        if (customMessage) {
            const randomIndex = Math.floor(Math.random() * buttons.length);
            const randomTeacher = buttons[randomIndex].getAttribute('data-teacher');
            const message = `${customMessage} - Sent to ${randomTeacher}`;
            displayMessage(message);
            playSound();
            showConfetti();
        }
    });

    function displayMessage(message) {
        messageDiv.innerText = message;
    }

    function playSound() {
        const audio = new Audio('1.mp3'); // Ensure this file is available
        audio.play();
    }

    function showConfetti() {
        messageDiv.classList.add('confetti');
        setTimeout(() => {
            messageDiv.classList.remove('confetti');
        }, 1000); // Reset animation after 1 second
    }
});
