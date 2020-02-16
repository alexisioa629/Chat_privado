
module .exports=function(io){
    io.on('connection',socket=>{
        console.log('Nuevo Usuario conectado')

        //resivir sms del usuario
        socket.on('mensaje desde cliente',function(data){
            console.log('cliente dice: ',data);
        //enviar mensajes a todos los usuarios      
        io.sockets.emit('mensaje desde servidor',data);
            console.log('servidor dice: ',data);
        });
    });

}