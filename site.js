
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
const image3 = document.getElementById("img3");
const chat = document.getElementById("pixlr");

window.addEventListener('scroll', e => {
for (i = 0; i < p.length; i++) {
  b = p;
  console.log(b);
  }
})
const p = document.getElementsByClassName("disappear");

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
 
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left+ width <=window.pageXOffset + window.innerWidth
  )
}
window.addEventListener("scroll", (el) => { 
  console.log(el)
  for (let i = 0; i < p.length; i++) { 
    if (elementInViewport(p[i])) {
      p[i].style.display = 'block';
    } else { 
      p[i].style.display = 'none';
    }
  }
})