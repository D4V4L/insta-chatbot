const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;

client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('hi')){ 
        return message.chat.sendMessage('HI I'M A WHATSAPP BOT BY KOPZ : Instagram.com/_kopz__');
    } else
    chatbot(`https://brv-chat.vercel.app/api?message=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage(json.reply);
    }).catch(err => {});
});

client.login('<sk4da>', '<yahyastar1>');
