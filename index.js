import express from 'express';
import http from 'http';
import path from 'path';
import {Server} from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = new Server(server)



// socket connection 
io.on('connection',(socket)=>{
   socket.on('send', (userMsg) =>{
      io.emit('userMsg',userMsg)
   })
})

// frontend connection 
app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
   return res.sendFile("/public/index.html")
})



// port listen
const port = 9090;
// server listen
server.listen(port,()=>console.log(`Listening port at ${port}`))
