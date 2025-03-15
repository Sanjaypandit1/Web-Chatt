const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
const audio = new Audio('./Assets/ring.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message', position);
    messageContainer.appendChild(messageElement); // FIXED: Used appendChild instead of append
    if (position === 'left') {
        audio.currentTime = 0; // Reset audio to start if played again
        audio.play().catch(error => console.error("Audio play failed:", error)); // FIXED: Catch autoplay errors
    }
};

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, `right`)
    socket.emit('send', message);
    messageInput.value ='';

})

// Ensure prompt runs after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const name = prompt("Enter your name to join:");
    if (name) {
        socket.emit('new-user-joined', name);
    } else {
        alert("You must enter a name to join the chat.");
    }
});

// Listen for new users joining
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'left'); // FIXED: Added missing 'position' argument
});

socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left')
})
socket.on('left', name =>{
    append(`${name} left the chat`, 'left')
})

