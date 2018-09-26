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

        setUserIntoRoom(socket, 'mangozRoom');

        socket.on('disconnect', () => {
            console.log(`user disconnected`);
        });

    });
}

function getNumberOfUsersOfRoom(roomName) {
    if (io.sockets.adapter.rooms[roomName] != undefined)
        return io.sockets.adapter.rooms[roomName].length;
    else return 0;
}

function getUsersFromRoom(roomName) {
    return io.sockets.adapter.rooms[roomName];
}

function setUserIntoRoom(socket, roomName) {
    if(getNumberOfUsersOfRoom(roomName) < 4) {
        socket.join(roomName, () => {
            io.to(roomName).emit('new user got into room1');
            console.log(`room ${roomName} has ${getNumberOfUsersOfRoom(roomName)} players`)
        });
    }
    else {

    }
}