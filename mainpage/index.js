var items = document.querySelectorAll(".item");
var points = document.querySelectorAll(".point");
var areas = document.querySelectorAll("area");
var live = document.querySelector(".live");
var head = document.querySelector("head");
var headbox = document.querySelector(".headbox");
var img = document.querySelector("img");
var Index = 0;
var goIndex = function () {
  clearactive();
  items[Index].className = "item active";
  points[Index].className = "point active";
};
var clearactive = function () {
  for (let i = 0; i < items.length; i++) {
    items[i].className = "item";
    points[i].className = "point";
  }
};
for (let i = 0; i < points.length; i++) {
  points[i].addEventListener("click", function () {
    Index = this.getAttribute("data-index");
    console.log(Index);
    goIndex(Index);
  });
}
var test = setInterval(() => {
  if (Index >= 3) {
    goIndex();
    Index = 0;
  } else {
    goIndex();
    Index++;
  }
}, 4000);
img.addEventListener("mouseover", function () {
  headbox.style.display = "flex";
});
img.addEventListener("mouseout", function (params) {
  var x = event.clientX;
  var y = event.clientY;
  var divx1 = headbox.offsetLeft;
  var divy1 = headbox.offsetTop;
  var divx2 = headbox.offsetLeft + headbox.offsetWidth;
  var divy2 = headbox.offsetTop + headbox.offsetHeight;
  if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
    console.log(55);
    setTimeout(() => {
      headbox.style.display = "none";
    }, 500);
  }
});
headbox.addEventListener("mouseover", function (params) {
  headbox.style.display = "flex";
});
headbox.addEventListener("mouseout", function (params) {
  headbox.style.display = "none";
});
