let arrayImage = [
  { imageId: "img1", hoverId: "squareblock" },
  { imageId: "img2", hoverId: "squareblock2" },
  { imageId: "img3", hoverId: "pixlr" },
  { imageId: "img4", hoverId: "dalle" },
  { imageId: "ibm", hoverId: "ibmchat" },
  {imageId:"amazoon", hoverId:"amazonchat"}
];
arrayImage.forEach(function (pair) {
  const image = document.getElementById(pair.imageId);
  const hoverImage = document.getElementById(pair.hoverId);

  image.addEventListener("mouseover", function () {
    hoverImage.style.display = "block";
  });

  image.addEventListener("mouseout", function () {
    hoverImage.style.display = "none";
  });
});

// let ArrayImage = Array.from(arrayImg);
// for (let i = 0; i < ArrayImage.length; i++) {
//   console.log(i);
//   const image = document.getElementById(ArrayImage[i].imageId);
//   const hoverImage = document.getElementById(ArrayImage[i].hoverId)

//   image.addEventListener("mouseover",  function () {
//     hoverImage.style.display="block"
//     image.addEventListener("mouseout", function () {
//       hoverImage.style.display="none"
//     })
//   })
//  }

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
    left + width <= window.pageXOffset + window.innerWidth
  );
}
window.addEventListener("scroll", (el) => {
  console.log(el);
  for (let i = 0; i < p.length; i++) {
    if (elementInViewport(p[i])) {
      p[i].style.display = "block";
    } else {
      p[i].style.display = "none";
    }
  }
});
