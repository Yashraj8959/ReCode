const app = require('./src/app');
const connect = require('./src/db/db');
const PORT = process.env.PORT || 3030;
connect();


const Server = require('http').createServer(app);
const io = require('socket.io')(Server,{
    cors: {
        origin: '*',
    }
});
io.on('connection', (socket) => {
    const projectId = socket.handshake.query.projectId;
    console.log(`User connected to project ${projectId}`);
    socket.join(projectId);    // join the user to the project room 
    // console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('message', (msg) => {
        socket.to(projectId).emit('message', msg);   // send message to only the project user
        // io.emit('chat message', msg);          // broadcast message to all users in the project
    });
});
Server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
