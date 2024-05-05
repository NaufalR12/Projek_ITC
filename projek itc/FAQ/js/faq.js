const ItemHeaders = document.querySelectorAll(".header");

ItemHeaders.forEach((ItemHeader) => {
  ItemHeader.addEventListener("click", (event) => {
    ItemHeader.classList.toggle("active");

    const ItemBody = ItemHeader.nextElementSibling;

    if (ItemHeader.classList.contains("active")) {
      ItemBody.style.maxHeight = ItemBody.scrollHeight + "px";
    } else {
      ItemBody.style.maxHeight = 0;
    }
  });
});
