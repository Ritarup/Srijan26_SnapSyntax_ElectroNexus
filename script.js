function toggleNav() {
  const s = document.getElementById("sidebar");
  const h = document.getElementById("hbg");
  s.classList.contains("open")
    ? closeNav()
    : (s.classList.add("open"), h.classList.add("open"));
}
function closeNav() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("hbg").classList.remove("open");
}

const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
