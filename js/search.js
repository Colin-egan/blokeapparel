/* Bloke Apparel & Supply — global product search */
(function () {
  var DEPT_LABELS = {
    'shirts': 'Shirts',
    'tees': 'Tees',
    'shorts': 'Shorts',
    'denim': 'Denim / Pants',
    'knitwear': 'Knitwear',
    'shoes': 'Shoes',
    'accessories': 'Accessories',
    'personal-care': 'Personal Care',
    'travel': 'Travel +',
  };

  var MAX_RESULTS = 8;
  var products = typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];

  function matches(product, term) {
    var haystack = (product.name + ' ' + (DEPT_LABELS[product.dept] || product.dept)).toLowerCase();
    return haystack.indexOf(term) !== -1;
  }

  function search(term) {
    term = term.trim().toLowerCase();
    if (!term) return [];
    return products.filter(function (p) { return matches(p, term); });
  }

  /* ---------- overlay panel, injected once per page ---------- */
  var overlayEl, panelEl, inputEl, resultsEl;

  function buildPanel() {
    if (document.getElementById('searchPanel')) return;

    overlayEl = document.createElement('div');
    overlayEl.className = 'search-overlay';
    overlayEl.id = 'searchOverlay';

    panelEl = document.createElement('div');
    panelEl.className = 'search-panel';
    panelEl.id = 'searchPanel';
    panelEl.innerHTML =
      '<div class="search-panel-head">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
        '<input type="search" id="searchPanelInput" placeholder="Search products&hellip;" autocomplete="off" aria-label="Search products">' +
        '<button type="button" class="search-panel-close" id="searchPanelClose" aria-label="Close search">&times;</button>' +
      '</div>' +
      '<ul class="search-results" id="searchResults"></ul>';

    document.body.appendChild(overlayEl);
    document.body.appendChild(panelEl);

    inputEl = document.getElementById('searchPanelInput');
    resultsEl = document.getElementById('searchResults');

    overlayEl.addEventListener('click', closePanel);
    document.getElementById('searchPanelClose').addEventListener('click', closePanel);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel();
    });

    inputEl.addEventListener('input', function () { renderResults(inputEl.value); });
    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        goToShop(inputEl.value);
      }
    });
  }

  function resultHtml(p) {
    var price = p.priceHigh && p.priceHigh > p.price
      ? '$' + p.price + '–$' + Math.round(p.priceHigh)
      : '$' + p.price;
    return (
      '<li>' +
        '<button type="button" class="search-result" data-result-id="' + p.id + '">' +
          '<img src="' + p.img + '" alt="">' +
          '<span class="search-result-info">' +
            '<span class="search-result-name">' + p.name + '</span>' +
            '<span class="search-result-meta">' + (DEPT_LABELS[p.dept] || p.dept) + '</span>' +
          '</span>' +
          '<span class="search-result-price">' + price + '</span>' +
        '</button>' +
      '</li>'
    );
  }

  function renderResults(term) {
    var trimmed = term.trim();
    if (!trimmed) {
      resultsEl.innerHTML = '<li class="search-hint">Start typing to search shirts, tees, denim, and more.</li>';
      return;
    }
    var found = search(trimmed);
    if (found.length === 0) {
      resultsEl.innerHTML =
        '<li class="search-empty">' +
          '<img src="images/kiwi-ink.png" alt="" class="mascot mascot-sm mascot-flip">' +
          '<span>No products match &ldquo;' + trimmed + '&rdquo;.</span>' +
        '</li>';
      return;
    }
    resultsEl.innerHTML = found.slice(0, MAX_RESULTS).map(resultHtml).join('');
    resultsEl.querySelectorAll('[data-result-id]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        goToProduct(btn.getAttribute('data-result-id'));
      });
    });
  }

  function openPanel() {
    buildPanel();
    overlayEl.classList.add('is-open');
    panelEl.classList.add('is-open');
    inputEl.value = '';
    renderResults('');
    inputEl.focus();
  }

  function closePanel() {
    if (!panelEl) return;
    overlayEl.classList.remove('is-open');
    panelEl.classList.remove('is-open');
  }

  function onShopPage() {
    return !!document.getElementById('shopGrid');
  }

  function goToShop(term) {
    term = term.trim();
    if (!term) return;
    closePanel();
    if (onShopPage() && window.BlokeShop) {
      window.BlokeShop.search(term);
    } else {
      window.location.href = 'shop.html?q=' + encodeURIComponent(term);
    }
  }

  function goToProduct(id) {
    closePanel();
    if (onShopPage() && window.BlokeShop) {
      window.BlokeShop.showProduct(id);
    } else {
      window.location.href = 'shop.html?id=' + encodeURIComponent(id);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-search-open]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openPanel();
      });
    });
  });
})();
