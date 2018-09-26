module.exports = {
    initSocket
}

let io;
let users = [];
let rooms = [];

function initSocket(http) {
    io = require('socket.io')(http);
    
    io.on('connection', (socket) => {
        console.log('a user connected');

        io.on('disconnect', () => {
            console.log(`user disconnected`);
        });
        
    });

    
}