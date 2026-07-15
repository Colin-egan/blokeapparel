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

  var grid = document.getElementById('shopGrid');
  var countEl = document.getElementById('shopCount');
  var pills = document.querySelectorAll('.filter-pill');
  var searchInput = document.getElementById('shopSearch');
  var currentDept = 'all';

  function formatPrice(p) {
    if (p.priceHigh && p.priceHigh > p.price) {
      return '$' + p.price + '&ndash;$' + Math.round(p.priceHigh);
    }
    return '$' + p.price;
  }

  function cardHtml(p) {
    return (
      '<li class="shop-card" data-dept="' + p.dept + '" data-id="' + p.id + '">' +
        '<div class="shop-card-photo"><img src="' + p.img + '" loading="lazy" alt="' + p.name + '"></div>' +
        '<div class="shop-card-body">' +
          '<p class="stock-tag-no">' + DEPT_LABELS[p.dept] + '</p>' +
          '<h3>' + p.name + '</h3>' +
          '<div class="shop-card-row">' +
            '<span class="shop-price">' + formatPrice(p) + '</span>' +
            '<button type="button" class="btn btn-primary btn-small" data-add="' + p.id + '">Add to cart</button>' +
          '</div>' +
        '</div>' +
      '</li>'
    );
  }

  function render() {
    grid.innerHTML = PRODUCTS.map(cardHtml).join('');
  }

  function matchesSearch(product, term) {
    if (!term) return true;
    var haystack = (product.name + ' ' + (DEPT_LABELS[product.dept] || product.dept)).toLowerCase();
    return haystack.indexOf(term) !== -1;
  }

  function applyFilter(dept) {
    currentDept = dept;
    var term = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var cards = grid.querySelectorAll('.shop-card');
    var shown = 0;
    cards.forEach(function (card) {
      var product = PRODUCTS.find(function (p) { return p.id === card.dataset.id; });
      var deptMatch = dept === 'all' || card.dataset.dept === dept;
      var searchMatch = matchesSearch(product, term);
      var match = deptMatch && searchMatch;
      card.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    countEl.textContent = shown + (shown === 1 ? ' item' : ' items') +
      (term ? ' for “' + searchInput.value.trim() + '”' : '');
    pills.forEach(function (pill) {
      pill.classList.toggle('is-active', pill.dataset.filter === dept);
    });
  }

  function filterFromHash() {
    var hash = location.hash.replace('#', '');
    return DEPT_LABELS[hash] ? hash : 'all';
  }

  function clearHighlights() {
    grid.querySelectorAll('.is-highlighted').forEach(function (el) {
      el.classList.remove('is-highlighted');
    });
  }

  function showProduct(id) {
    if (searchInput) searchInput.value = '';
    applyFilter('all');
    clearHighlights();
    var card = grid.querySelector('.shop-card[data-id="' + id + '"]');
    if (card) {
      card.classList.add('is-highlighted');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function search(term) {
    if (searchInput) searchInput.value = term;
    applyFilter(currentDept);
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var dept = pill.dataset.filter;
      history.replaceState(null, '', dept === 'all' ? 'shop.html' : '#' + dept);
      applyFilter(dept);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      applyFilter(currentDept);
    });
  }

  window.addEventListener('hashchange', function () {
    applyFilter(filterFromHash());
  });

  render();

  var params = new URLSearchParams(location.search);
  if (params.get('id')) {
    showProduct(params.get('id'));
  } else if (params.get('q')) {
    if (searchInput) searchInput.value = params.get('q');
    applyFilter(filterFromHash());
  } else {
    applyFilter(filterFromHash());
  }

  window.BlokeShop = {
    search: search,
    showProduct: showProduct,
  };
})();
