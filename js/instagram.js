/**
 * Bloke doesn't have an Instagram API token wired up (that needs a server
 * to hold the secret), so instead of faking a "live" feed we hand-curate
 * a small mirror of @bloke_nc right here and render it into the grid.
 * Swap the `posts` array whenever the real feed moves on.
 */
var INSTAGRAM = {
  handle: '@bloke_nc',
  profileUrl: 'https://www.instagram.com/bloke_nc/',
  posts: [
    { image: 'images/gallery/g06.webp', caption: 'New drop, low profile. Mama Tried caps are back on the shelf.' },
    { image: 'images/gallery/g03.webp', caption: 'Camp shirt season starts whenever you say it does.' },
    { image: 'images/gallery/g10.webp', caption: 'Packed and ready for a weekend away.' },
    { image: 'images/gallery/g09.webp', caption: 'Hold that stays held. Zeus pomade restocked.', kiwiPeek: true },
    { image: 'images/gallery/g16.webp', caption: 'Sweater weather, but make it Carolina.' },
    { image: 'images/gallery/g07.webp', caption: 'Every bloke needs a good blade in his pocket.' },
    { image: 'images/gallery/g11.webp', caption: 'Pocket square? Bandana? We say both.' },
    { image: 'images/gallery/g14.webp', caption: 'Raw denim, laid flat, ready to go.' }
  ]
};

(function renderInstagramGrid() {
  var grid = document.getElementById('instaGrid');
  if (!grid) return;

  grid.innerHTML = '';

  INSTAGRAM.posts.forEach(function (post) {
    var li = document.createElement('li');
    li.className = 'reveal' + (post.kiwiPeek ? ' insta-peek' : '');

    var link = document.createElement('a');
    link.href = INSTAGRAM.profileUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', post.caption + ' — view on Instagram');

    var img = document.createElement('img');
    img.src = post.image;
    img.loading = 'lazy';
    img.alt = post.caption;
    link.appendChild(img);

    var caption = document.createElement('span');
    caption.className = 'insta-caption';
    caption.textContent = post.caption;
    link.appendChild(caption);

    li.appendChild(link);

    if (post.kiwiPeek) {
      var kiwi = document.createElement('img');
      kiwi.src = 'images/kiwi-ink.png';
      kiwi.alt = '';
      kiwi.setAttribute('aria-hidden', 'true');
      kiwi.className = 'kiwi-peek';
      li.appendChild(kiwi);
    }

    grid.appendChild(li);
  });
})();
