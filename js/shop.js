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

  function cardHtml(p) {
    return (
      '<li class="shop-card" data-dept="' + p.dept + '">' +
        '<div class="shop-card-photo"><img src="' + p.img + '" loading="lazy" alt="' + p.name + '"></div>' +
        '<div class="shop-card-body">' +
          '<p class="stock-tag-no">' + DEPT_LABELS[p.dept] + '</p>' +
          '<h3>' + p.name + '</h3>' +
          '<div class="shop-card-row">' +
            '<span class="shop-price">$' + p.price + '</span>' +
            '<button type="button" class="btn btn-primary btn-small" data-add="' + p.id + '">Add to cart</button>' +
          '</div>' +
        '</div>' +
      '</li>'
    );
  }

  function render() {
    grid.innerHTML = PRODUCTS.map(cardHtml).join('');
  }

  function applyFilter(dept) {
    var cards = grid.querySelectorAll('.shop-card');
    var shown = 0;
    cards.forEach(function (card) {
      var match = dept === 'all' || card.dataset.dept === dept;
      card.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    countEl.textContent = shown + (shown === 1 ? ' item' : ' items');
    pills.forEach(function (pill) {
      pill.classList.toggle('is-active', pill.dataset.filter === dept);
    });
  }

  function filterFromHash() {
    var hash = location.hash.replace('#', '');
    return DEPT_LABELS[hash] ? hash : 'all';
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var dept = pill.dataset.filter;
      history.replaceState(null, '', dept === 'all' ? 'shop.html' : '#' + dept);
      applyFilter(dept);
    });
  });

  window.addEventListener('hashchange', function () {
    applyFilter(filterFromHash());
  });

  render();
  applyFilter(filterFromHash());
})();
