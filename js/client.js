const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message', position);
    messageContainer.appendChild(messageElement); // FIXED: Used appendChild instead of append
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

