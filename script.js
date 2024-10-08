// DOM elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Key phrases with corresponding bot responses
const keyPhrases = {
    "sad": "I'm really sorry to hear that. Can you tell me more about what's making you feel this way?",
    "anxious": "Anxiety can be hard to deal with. Let's take a few deep breaths together.",
    "tired": "It sounds like you’ve been going through a lot. Rest is important. How have you been sleeping?",
    "happy": "That's great to hear! It's wonderful to have moments of joy.",
    "stressed": "Stress can be overwhelming. Do you want to talk about what’s been causing you stress?",
    "lonely": "Loneliness can be tough. I’m here for you. How are you feeling today?",
    "angry": "It's okay to feel angry sometimes. What do you think is causing your frustration?",
    "frustrated": "Frustration can build up when things don't go as planned. Want to talk about it?",
    "hopeless": "I'm sorry you're feeling hopeless right now. Talking about it might help lighten the load.",
    "confused": "It's okay to feel confused. Let’s break things down together. What’s been on your mind?",
    "excited": "That’s wonderful! I’m glad to hear something exciting is happening for you.",
    "afraid": "Fear can be hard to navigate. What’s making you feel scared?",
    "lost": "Feeling lost is difficult, but remember, it’s okay to not have all the answers. Let’s figure things out.",
    "nervous": "Nerves are natural, especially in challenging situations. Want to talk it through?",
    "burnout": "Burnout can sneak up on us. When was the last time you took a break?",
    "grateful": "Gratitude can bring so much peace. What are you feeling thankful for today?",
    "insecure": "It’s tough feeling insecure, but remember that you are enough just the way you are.",
    "embarrassed": "It’s okay to feel embarrassed sometimes. We all go through it. Want to share what happened?",
    "overwhelmed": "Being overwhelmed can feel like too much. Let’s break things down. What’s been on your plate?",
    "content": "That’s lovely. Contentment is a peaceful place to be.",
    "bored": "Boredom can be an opportunity to try something new. What’s something you’ve been meaning to do?",
    "motivated": "I’m so glad to hear that! What’s driving your motivation right now?",
    "distracted": "It’s easy to get distracted. What’s pulling your attention away today?",
    "relaxed": "I’m happy you’re feeling relaxed. What’s helping you stay in that calm state?",
    "worried": "Worry can weigh heavily on the mind. Would you like to talk about what’s concerning you?",
    "disappointed": "I’m sorry things didn’t go as expected. Do you want to share what happened?",
    "hopeful": "It’s great to feel hopeful! What’s making you feel that way?",
    "guilty": "Guilt can be tough to carry. Let’s explore what’s making you feel this way.",
    "hurt": "I’m really sorry to hear that. Would talking about it help?",
    "joyful": "I’m so glad to hear you’re feeling joyful! What’s making you smile today?",
    "peaceful": "It’s wonderful to hear that you’re feeling at peace. How are you keeping that peace in your life?",
    "disconnected": "Feeling disconnected is tough. Is there something you think might help you feel more grounded?",
    "optimistic": "It’s refreshing to hear optimism! What’s helping you stay positive?",
    "shy": "It’s okay to feel shy sometimes. What’s been making you feel this way?",
    "regret": "Regret can weigh heavily, but it’s important to be kind to yourself. Want to talk about it?",
    "apathetic": "Apathy can come from feeling overwhelmed or tired. How have things been for you lately?",
    "isolated": "Isolation can feel difficult. I’m here for you. Want to talk through how you’re feeling?",
    "worried": "Worries can pile up quickly. What’s been on your mind lately?",
    "depressed": "Depression is hard. I’m really sorry you’re feeling this way. Let’s talk about what’s been happening.",
    "doubtful": "Doubt is a natural feeling. Let’s talk through what’s making you feel uncertain.",
    "gloomy": "It sounds like you’re having a gloomy day. Want to share what’s been bothering you?",
    "resentful": "Resentment can be a heavy emotion. It’s okay to express how you feel.",
    "betrayed": "Feeling betrayed can cut deep. I’m here for you if you’d like to talk through it.",
    "optimistic": "Optimism is such a wonderful feeling! What’s making you feel so positive?",
    "resentful": "It’s tough to carry resentment. Talking through it might help release some of that burden.",
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What’s on your mind?",
    "good morning": "Good morning! How are you feeling today?",
    "good afternoon": "Good afternoon! How can I help you?",
    "good evening": "Good evening! What would you like to talk about?",
    "thank you": "You're welcome! I'm here to help you.",
    "goodbye": "Goodbye! Take care, and I'm here if you need me again.",
    "thanks": "You're welcome! Let me know if you have more questions.",
    "feel lonely": "I'm here for you. Would you like to talk about it?",
    "calm": "I’m happy to hear you’re feeling calm. What’s helping you stay relaxed?"
};

const chatbox = document.querySelector('.chatbox');
const inputField = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button');

// Function to handle sending messages
function sendMessage() {
    const userMessage = inputField.value.trim();
    if (userMessage) {
        // Display user message
        const userDiv = document.createElement('div');
        userDiv.textContent = `You: ${userMessage}`;
        chatbox.appendChild(userDiv);

        // Check for key phrases
        const responseMessage = getResponse(userMessage);
        const botDiv = document.createElement('div');
        botDiv.textContent = `Bot: ${responseMessage}`;
        chatbox.appendChild(botDiv);

        // Clear input field
        inputField.value = '';

        // Scroll to the bottom of chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

// Function to get a response based on user input
function getResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    for (const key in keyPhrases) {
        if (lowerCaseMessage.includes(key)) {
            return keyPhrases[key];
        }
    }
    return "I'm here to listen. Can you tell me more?";
}

// Send message on button click
sendButton.addEventListener('click', sendMessage);

// Send message on pressing Enter key
inputField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});