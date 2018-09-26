let Room = require('../models/room.model');

module.exports = {
    initSocket
}

let io;
let users = [];
let rooms = [];
let room = new Room('mangozroom');

function initSocket(http) {
    io = require('socket.io')(http);

    
    io.on('connection', (socket) => {
        console.log('a user connected');

        setUserIntoRoom(socket, room.name);

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
            io.to(roomName).emit('enteredRoomEvent', 'lalala');
            console.log(`room ${roomName} has ${getNumberOfUsersOfRoom(roomName)} players`);
        });
    }
    else {

    }
}