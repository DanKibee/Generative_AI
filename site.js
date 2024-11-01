window.addEventListener('scroll', function () {
    const chatBlock = document.getElementById('chatbot_block');
    const rect = chatBlock.getBoundingClientRect();
    //  check if the chatBlock is within the viewport
    if (rect.top>=0 && rect.bottom <= window.innerHeight) {
        chatBlock.style.display = 'block';
    } else { chatBlock.style.display = 'none';}   
});
