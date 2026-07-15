const btn = document.querySelectorAll(".Btn");

btn.forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    const close = content.style.maxHeight === "50px"

    btn.forEach((o) => {
      const c = o.nextElementSibling
      c.style.maxHeight = "0px"
      o.textContent = "Развернуть";
    })

    if (!close) {
      content.style.maxHeight = "50px";
      this.textContent = "Свернуть";
    }
  });
});
