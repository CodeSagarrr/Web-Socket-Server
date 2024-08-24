import express from 'express';
import http from 'http';
import path from 'path';
import {Server} from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = new Server(server)


// socket connections

io.on('connection',(socket)=>{
   socket.on('send', (userMsg) =>{
      io.emit('userMsg',userMsg)
   })
})


app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
   return res.sendFile("/public/index.html")
})




const port = 9090;
server.listen(port,()=>console.log(`Listening port at ${port}`))