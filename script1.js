document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box");
  const totalDisplay = document.querySelector('.cart-summary .right');
  const addToCartBtn = document.querySelector('.action-btn');

  
  const basePrices = [5.00, 9.00, 7.00]; 

  boxes.forEach((box, index) => {
    const radio = box.querySelector('input[type="radio"]');
    const sizeSelect = box.querySelector('select:nth-of-type(1)'); 
    const optionSelect = box.querySelector('select:nth-of-type(2)');

    
    const calculateTotal = () => {
      let total = basePrices[index];

      const size = sizeSelect.value;
      if (size === "Medium") total += 2;
      if (size === "Large") total += 4;

      const option = optionSelect.value;
      if (option === "Non-Veg" || option === "Extra Cheese") total += 3;

      totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    };

    
    box.addEventListener("click", function(e) {
      const interactive = e.target.closest("select, button");
      if (interactive) return;

      radio.checked = true;
      boxes.forEach(b => b.classList.remove("active"));
      box.classList.add("active");

      calculateTotal();
    });

    
    radio.addEventListener('change', () => {
      boxes.forEach(b => b.classList.remove('active'));
      if (radio.checked) {
        box.classList.add('active');
        calculateTotal();
      }
    });

    
    sizeSelect.addEventListener('change', () => {
      if (radio.checked) calculateTotal();
    });
    optionSelect.addEventListener('change', () => {
      if (radio.checked) calculateTotal();
    });
  });

  
  addToCartBtn.addEventListener("click", () => {
    alert("Added to cart ✅ (demo)");
  });

});
