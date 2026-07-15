/* Bloke Apparel & Supply — client-side cart (demo only, no real payment processing) */
(function () {
  var STORAGE_KEY = 'bloke-cart-v1';

  function cartKey(id, size) {
    return size ? id + '::' + size : id;
  }

  function readCart() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var cart = raw ? JSON.parse(raw) : {};
      var migrated = {};
      Object.keys(cart).forEach(function (key) {
        var val = cart[key];
        migrated[key] = typeof val === 'number' ? { id: key, size: null, qty: val } : val;
      });
      return migrated;
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

  function addToCart(id, size, qty) {
    qty = qty || 1;
    var cart = readCart();
    var key = cartKey(id, size);
    var existingQty = cart[key] ? cart[key].qty : 0;
    cart[key] = { id: id, size: size || null, qty: existingQty + qty };
    writeCart(cart);
    openDrawer();
  }

  function setQty(key, qty) {
    var cart = readCart();
    if (qty <= 0) {
      delete cart[key];
    } else if (cart[key]) {
      cart[key].qty = qty;
    }
    writeCart(cart);
  }

  function removeFromCart(key) {
    var cart = readCart();
    delete cart[key];
    writeCart(cart);
  }

  function clearCart() {
    writeCart({});
  }

  function cartEntries() {
    var cart = readCart();
    return Object.keys(cart).map(function (key) {
      var line = cart[key];
      var product = productById(line.id);
      return product ? { key: key, product: product, size: line.size, qty: line.qty } : null;
    }).filter(Boolean);
  }

  function cartCount() {
    return cartEntries().reduce(function (sum, e) { return sum + e.qty; }, 0);
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
        '<div class="cart-line" data-key="' + e.key + '">' +
          '<img src="' + e.product.img + '" alt="">' +
          '<div class="cart-line-info">' +
            '<p class="cart-line-name">' + e.product.name + '</p>' +
            (e.size ? '<p class="cart-line-size">Size ' + e.size + '</p>' : '') +
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
        var key = btn.closest('.cart-line').dataset.key;
        var current = (readCart()[key] || {}).qty || 0;
        setQty(key, current + 1);
      });
    });
    body.querySelectorAll('[data-qty-down]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.closest('.cart-line').dataset.key;
        var current = (readCart()[key] || {}).qty || 0;
        setQty(key, current - 1);
      });
    });
    body.querySelectorAll('[data-remove]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.closest('.cart-line').dataset.key;
        removeFromCart(key);
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
        addToCart(btn.getAttribute('data-add'), btn.getAttribute('data-size') || null, 1);
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
