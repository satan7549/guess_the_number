const socket = require("socket.io");


socket.on("joinedRoom",()=>{
    console.log('Client 1 event triggred');
})
