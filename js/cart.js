/* Bloke Apparel & Supply — client-side cart (demo only, no real payment processing) */
(function () {
  var STORAGE_KEY = 'bloke-cart-v1';

  function readCart() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function writeCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    renderAll();
  }

  function productById(id) {
    return (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).find(function (p) { return p.id === id; });
  }

  function addToCart(id, qty) {
    qty = qty || 1;
    var cart = readCart();
    cart[id] = (cart[id] || 0) + qty;
    writeCart(cart);
    openDrawer();
  }

  function setQty(id, qty) {
    var cart = readCart();
    if (qty <= 0) {
      delete cart[id];
    } else {
      cart[id] = qty;
    }
    writeCart(cart);
  }

  function removeFromCart(id) {
    var cart = readCart();
    delete cart[id];
    writeCart(cart);
  }

  function clearCart() {
    writeCart({});
  }

  function cartEntries() {
    var cart = readCart();
    return Object.keys(cart).map(function (id) {
      var product = productById(id);
      return product ? { product: product, qty: cart[id] } : null;
    }).filter(Boolean);
  }

  function cartCount() {
    var cart = readCart();
    return Object.keys(cart).reduce(function (sum, id) { return sum + cart[id]; }, 0);
  }

  function cartTotal() {
    return cartEntries().reduce(function (sum, e) { return sum + e.product.price * e.qty; }, 0);
  }

  function money(n) {
    return '$' + n.toFixed(2);
  }

  /* ---------- drawer UI, injected once per page ---------- */
  var drawerEl, overlayEl;

  function buildDrawer() {
    if (document.getElementById('cartDrawer')) return;

    overlayEl = document.createElement('div');
    overlayEl.className = 'cart-overlay';
    overlayEl.id = 'cartOverlay';

    drawerEl = document.createElement('aside');
    drawerEl.className = 'cart-drawer';
    drawerEl.id = 'cartDrawer';
    drawerEl.setAttribute('aria-hidden', 'true');
    drawerEl.innerHTML =
      '<div class="cart-drawer-head">' +
        '<p class="cart-drawer-title">Your bag</p>' +
        '<button type="button" class="cart-close" id="cartClose" aria-label="Close cart">&times;</button>' +
      '</div>' +
      '<div class="cart-drawer-body" id="cartDrawerBody"></div>' +
      '<div class="cart-drawer-foot" id="cartDrawerFoot"></div>';

    document.body.appendChild(overlayEl);
    document.body.appendChild(drawerEl);

    overlayEl.addEventListener('click', closeDrawer);
    document.getElementById('cartClose').addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  function openDrawer() {
    buildDrawer();
    renderDrawer();
    overlayEl.classList.add('is-open');
    drawerEl.classList.add('is-open');
    drawerEl.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    if (!drawerEl) return;
    overlayEl.classList.remove('is-open');
    drawerEl.classList.remove('is-open');
    drawerEl.setAttribute('aria-hidden', 'true');
  }

  function renderDrawer() {
    if (!drawerEl) return;
    var entries = cartEntries();
    var body = document.getElementById('cartDrawerBody');
    var foot = document.getElementById('cartDrawerFoot');

    if (entries.length === 0) {
      body.innerHTML =
        '<div class="cart-empty">' +
          '<img src="images/kiwi-ink.png" alt="" class="mascot mascot-md">' +
          '<p>Your bag is empty. Gone to find stock.</p>' +
        '</div>';
      foot.innerHTML = '';
      return;
    }

    body.innerHTML = entries.map(function (e) {
      return (
        '<div class="cart-line" data-id="' + e.product.id + '">' +
          '<img src="' + e.product.img + '" alt="">' +
          '<div class="cart-line-info">' +
            '<p class="cart-line-name">' + e.product.name + '</p>' +
            '<p class="cart-line-price">' + money(e.product.price) + '</p>' +
            '<div class="cart-line-qty">' +
              '<button type="button" class="qty-btn" data-qty-down>&minus;</button>' +
              '<span>' + e.qty + '</span>' +
              '<button type="button" class="qty-btn" data-qty-up>&plus;</button>' +
            '</div>' +
          '</div>' +
          '<button type="button" class="cart-line-remove" data-remove aria-label="Remove ' + e.product.name + '">&times;</button>' +
        '</div>'
      );
    }).join('');

    foot.innerHTML =
      '<div class="cart-subtotal"><span>Subtotal</span><span>' + money(cartTotal()) + '</span></div>' +
      '<p class="cart-note">Shipping and tax calculated at checkout.</p>' +
      '<a href="checkout.html" class="btn btn-primary cart-checkout-btn">Checkout</a>';

    body.querySelectorAll('[data-qty-up]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.closest('.cart-line').dataset.id;
        var current = readCart()[id] || 0;
        setQty(id, current + 1);
      });
    });
    body.querySelectorAll('[data-qty-down]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.closest('.cart-line').dataset.id;
        var current = readCart()[id] || 0;
        setQty(id, current - 1);
      });
    });
    body.querySelectorAll('[data-remove]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.closest('.cart-line').dataset.id;
        removeFromCart(id);
      });
    });
  }

  function renderBadge() {
    var badges = document.querySelectorAll('[data-cart-count]');
    var count = cartCount();
    badges.forEach(function (el) {
      el.textContent = count;
      el.classList.toggle('is-visible', count > 0);
    });
  }

  function renderAll() {
    renderBadge();
    if (drawerEl && drawerEl.classList.contains('is-open')) renderDrawer();
  }

  function wireCartButtons() {
    document.querySelectorAll('[data-cart-open]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openDrawer();
      });
    });
    document.body.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add]');
      if (btn) {
        addToCart(btn.getAttribute('data-add'), 1);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildDrawer();
    wireCartButtons();
    renderBadge();
  });

  window.Cart = {
    add: addToCart,
    setQty: setQty,
    remove: removeFromCart,
    clear: clearCart,
    entries: cartEntries,
    count: cartCount,
    total: cartTotal,
    money: money,
    open: openDrawer,
    close: closeDrawer,
  };
})();
