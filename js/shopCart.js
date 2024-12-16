document.querySelectorAll(".cart-item").forEach((item) => {
  const quantityInput = item.querySelector("input");
  const price = parseFloat(item.children[1].textContent.replace("$", ""));
  const subtotalElement = item.children[3];

  item.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value);
      if (btn.textContent === "+") quantity++;
      if (btn.textContent === "-" && quantity > 1) quantity--;
      quantityInput.value = quantity;
      subtotalElement.textContent = `$${(price * quantity).toFixed(2)}`;
    });
  });
});
