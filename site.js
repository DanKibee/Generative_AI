let isChatbotInViewport = () => {
    const chatbot_block = document.getElementById('chatbot_block');
    const rect = chatbot_block.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right<=(window.innerWidth|| document.documentElement.clientwidth)
    )
}
let toggleChatbotVisibility = () => {
    const chatbot_block = document.getElementById('chatbot_block');
    if (isChatbotInViewport()) {
        chatbot_block.style.display = 'block';
    } else { 
        chatbot_block.style.display='none';
    }
}
window.addEventListener('resize', toggleChatbotVisibility);
window.addEventListener('scroll', toggleChatbotVisibility);
toggleChatbotVisibility();
