const io = require('socket.io')(8000, {
    cors: {
        origin: "*",
    }
});

const users = {}; // FIXED: Corrected object reference

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New user:", name);
        users[socket.id] = name; // FIXED: Changed `user` to `users`
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });

    
});
