window.addEventListener("scroll", function () {
  const chatBlock = document.getElementById("chatbot_block");
  const rect = chatBlock.getBoundingClientRect();
  //  check if the chatBlock is within the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    chatBlock.style.display = "block";
  } else {
    chatBlock.style.display = "none";
  }
});
const image= document.getElementById("img1");
const hoverimage = document.getElementById("squareblock");
image.addEventListener("mouseover", function () {
  hoverimage.style.display = "block";
});
image.addEventListener("mouseout", function () {
  hoverimage.style.display = "none";
});
const image2 = document.getElementById("img2");
const hoverimage2 = document.getElementById("squareblock2");
image2.addEventListener("mouseover", function () {
  hoverimage2.style.display = "block";
});
image2.addEventListener("mouseout", function () {
  hoverimage2.style.display = "none";
});
