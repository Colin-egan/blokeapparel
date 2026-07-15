(function () {
  var SHIPPING = 8;
  var TAX_RATE = 0.08;

  var formEl = document.getElementById('checkoutForm');
  var emptyEl = document.getElementById('checkoutEmpty');
  var confirmationEl = document.getElementById('checkoutConfirmation');
  var linesEl = document.getElementById('checkoutLines');
  var totalsEl = document.getElementById('checkoutTotals');

  function renderSummary() {
    var entries = Cart.entries();
    if (entries.length === 0) {
      formEl.hidden = true;
      emptyEl.hidden = false;
      return;
    }
    formEl.hidden = false;
    emptyEl.hidden = true;

    linesEl.innerHTML = entries.map(function (e) {
      return (
        '<div class="checkout-line">' +
          '<img src="' + e.product.img + '" alt="">' +
          '<div class="checkout-line-info">' +
            '<p class="checkout-line-name">' + e.product.name + '</p>' +
            (e.size ? '<p class="checkout-line-size">Size ' + e.size + '</p>' : '') +
            '<p class="checkout-line-qty">Qty ' + e.qty + '</p>' +
          '</div>' +
          '<span class="checkout-line-price">' + Cart.money(e.product.price * e.qty) + '</span>' +
        '</div>'
      );
    }).join('');

    var subtotal = Cart.total();
    var tax = subtotal * TAX_RATE;
    var total = subtotal + SHIPPING + tax;

    totalsEl.innerHTML =
      '<div class="checkout-total-row"><span>Subtotal</span><span>' + Cart.money(subtotal) + '</span></div>' +
      '<div class="checkout-total-row"><span>Shipping</span><span>' + Cart.money(SHIPPING) + '</span></div>' +
      '<div class="checkout-total-row"><span>Tax</span><span>' + Cart.money(tax) + '</span></div>' +
      '<div class="checkout-total-row checkout-total-grand"><span>Total</span><span>' + Cart.money(total) + '</span></div>';
  }

  /* light input formatting for realism — demo only, nothing is transmitted */
  var cardInput = document.getElementById('cardNumberInput');
  if (cardInput) {
    cardInput.addEventListener('input', function () {
      var digits = cardInput.value.replace(/\D/g, '').slice(0, 16);
      cardInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
    });
  }
  var expiryInput = document.getElementById('expiryInput');
  if (expiryInput) {
    expiryInput.addEventListener('input', function () {
      var digits = expiryInput.value.replace(/\D/g, '').slice(0, 4);
      expiryInput.value = digits.length > 2 ? digits.slice(0, 2) + ' / ' + digits.slice(2) : digits;
    });
  }

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    var orderNo = 'No. ' + String(Math.floor(1000 + Math.random() * 9000));
    document.getElementById('confirmationOrderNo').textContent = orderNo;
    Cart.clear();
    formEl.hidden = true;
    emptyEl.hidden = true;
    confirmationEl.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  renderSummary();
})();
