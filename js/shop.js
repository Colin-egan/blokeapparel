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
      return '$' + p.price + '–$' + Math.round(p.priceHigh);
    }
    return '$' + p.price;
  }

  function cardHtml(p) {
    var hasSizes = p.sizes && p.sizes.length;
    var actionBtn = hasSizes
      ? '<button type="button" class="btn btn-primary btn-small" data-pick-size="' + p.id + '">Select size</button>'
      : '<button type="button" class="btn btn-primary btn-small" data-add="' + p.id + '">Add to cart</button>';
    return (
      '<li class="shop-card" data-dept="' + p.dept + '" data-id="' + p.id + '">' +
        '<div class="shop-card-photo"><img src="' + p.img + '" loading="lazy" alt="' + p.name + '"></div>' +
        '<div class="shop-card-body">' +
          '<p class="stock-tag-no">' + DEPT_LABELS[p.dept] + '</p>' +
          '<h3>' + p.name + '</h3>' +
          '<div class="shop-card-row">' +
            '<span class="shop-price">' + formatPrice(p) + '</span>' +
            actionBtn +
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

  // Product modal (image gallery)
  var overlay = document.getElementById('productOverlay');
  var modal = document.getElementById('productModal');
  var modalImage = document.getElementById('productModalImage');
  var modalThumbs = document.getElementById('productModalThumbs');
  var modalPrev = document.getElementById('productModalPrev');
  var modalNext = document.getElementById('productModalNext');
  var modalDept = document.getElementById('productModalDept');
  var modalTitle = document.getElementById('productModalTitle');
  var modalPrice = document.getElementById('productModalPrice');
  var modalAdd = document.getElementById('productModalAdd');
  var modalClose = document.getElementById('productModalClose');
  var modalSizeLabel = document.getElementById('productModalSizeLabel');
  var modalSizes = document.getElementById('productModalSizes');
  var modalImages = [];
  var modalIndex = 0;
  var selectedSize = null;

  function updateAddButtonState() {
    var needsSize = modalSizes.children.length > 0;
    modalAdd.disabled = needsSize && !selectedSize;
    if (selectedSize) {
      modalAdd.setAttribute('data-size', selectedSize);
    } else {
      modalAdd.removeAttribute('data-size');
    }
  }

  function setModalImage(i) {
    modalIndex = (i + modalImages.length) % modalImages.length;
    modalImage.src = modalImages[modalIndex];
    var thumbs = modalThumbs.querySelectorAll('button');
    thumbs.forEach(function (t, idx) {
      t.classList.toggle('is-active', idx === modalIndex);
    });
  }

  function openProductModal(product) {
    modalImages = [product.img].concat(product.gallery || []);
    modalDept.textContent = DEPT_LABELS[product.dept] || product.dept;
    modalTitle.textContent = product.name;
    modalPrice.textContent = formatPrice(product);
    modalAdd.setAttribute('data-add', product.id);

    var hasMultiple = modalImages.length > 1;
    modalPrev.hidden = !hasMultiple;
    modalNext.hidden = !hasMultiple;

    modalThumbs.innerHTML = hasMultiple
      ? modalImages.map(function (src, idx) {
          return '<button type="button" data-idx="' + idx + '"><img src="' + src + '" alt=""></button>';
        }).join('')
      : '';
    modalThumbs.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setModalImage(parseInt(btn.getAttribute('data-idx'), 10));
      });
    });

    selectedSize = null;
    var hasSizes = product.sizes && product.sizes.length;
    modalSizeLabel.hidden = !hasSizes;
    modalSizes.innerHTML = hasSizes
      ? product.sizes.map(function (s) {
          var cls = 'size-chip' + (s.soldOut ? ' is-sold-out' : '');
          return '<button type="button" class="' + cls + '" data-size="' + s.name + '"' +
            (s.soldOut ? ' disabled' : '') + '>' + s.name + '</button>';
        }).join('')
      : '';
    modalSizes.querySelectorAll('button:not([disabled])').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedSize = btn.getAttribute('data-size');
        modalSizes.querySelectorAll('button').forEach(function (b) {
          b.classList.toggle('is-selected', b === btn);
        });
        updateAddButtonState();
      });
    });
    updateAddButtonState();

    setModalImage(0);
    overlay.classList.add('is-open');
    modal.classList.add('is-open');
  }

  function closeProductModal() {
    overlay.classList.remove('is-open');
    modal.classList.remove('is-open');
  }

  modalPrev.addEventListener('click', function () { setModalImage(modalIndex - 1); });
  modalNext.addEventListener('click', function () { setModalImage(modalIndex + 1); });
  modalClose.addEventListener('click', closeProductModal);
  overlay.addEventListener('click', closeProductModal);
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeProductModal();
    if (e.key === 'ArrowLeft') setModalImage(modalIndex - 1);
    if (e.key === 'ArrowRight') setModalImage(modalIndex + 1);
  });

  grid.addEventListener('click', function (e) {
    var trigger = e.target.closest('.shop-card-photo, [data-pick-size]');
    if (!trigger) return;
    var card = trigger.closest('.shop-card');
    var product = PRODUCTS.find(function (p) { return p.id === card.dataset.id; });
    if (product) openProductModal(product);
  });

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
