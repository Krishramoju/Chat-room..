const socket = io();
const messages = document.getElementById('messages');
const form = document.getElementById('message-form');
const input = document.getElementById('message-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const item = document.createElement('div');
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
