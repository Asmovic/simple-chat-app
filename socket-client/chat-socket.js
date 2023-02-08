const socket = io.connect("https://chat-server-i8bt.onrender.com", { transports: ['websocket'] });

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
    socket.emit('message', { data: message.value })
    message.value = "";
};

socket.on('message', ({ data })=>{
    handleNewMessage(data);
});

const handleNewMessage = (message) => {
    messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(message));
    return li;
}
