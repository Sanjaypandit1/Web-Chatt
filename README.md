Realtime Chat App

A simple real-time chat application using Node.js, Socket.io, HTML, CSS, and JavaScript.

Features

Realtime messaging with WebSockets

Join notifications when a new user joins

Leave notifications when a user leaves

Audio notification for new messages

Simple UI with chat bubbles

Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js, Socket.io

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Sanjaypandit1/Web-Chatt.git
cd nodeServer

2️⃣ Install Dependencies

npm install

3️⃣ Run the Server

node server.js

The server will start on http://localhost:8000.

4️⃣ Open the Chat App

Open index.html in a web browser.

How It Works

User joins the chat → A prompt asks for a username.

Messages are sent in real-time → Using Socket.io events.

Other users get notified → When someone joins or leaves.

Audio notification → Plays when a new message arrives.

Issues & Troubleshooting

Audio not playing? Ensure Assets/ring.mp3 exists and check browser autoplay policies.

Server not running? Check that Node.js and dependencies are installed.

Messages not appearing? Open the browser console (F12) to check for errors.

License

This project is licensed under the MIT License.

Author

Developed by Sanjay Pandit 🚀