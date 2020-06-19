function solve() {
      let button = document.getElementById('send');
      button.addEventListener('click', sendMessage);
   
      function sendMessage() {
         let text = document.getElementById('chat_input');
         let div = document.createElement('div');
         div.className = 'message my-message';
         div.textContent = text.value;
         document.getElementById('chat_messages').appendChild(div);
         text.value = '';  
      }
   }   


