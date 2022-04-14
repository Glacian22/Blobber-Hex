import {io} from '../server';

io.on('connection', (socket) => {
  console.log(`connected ${socket}`)
  socket.on('echo', msg => {
    io.emit('echo', msg);
  });
});