(function () {
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");
  if (!burger || !nav) return;
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll(".menu-item-has-children > a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (window.innerWidth > 980) return;
      var item = link.parentElement;
      if (!item.classList.contains("is-open")) {
        event.preventDefault();
        item.classList.add("is-open");
      }
    });
  });
})();
