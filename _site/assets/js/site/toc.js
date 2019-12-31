var BCLS_toc = ( function (window, document) {
  var h2s = document.getElementsByTagName('h2'),
    in_page_nav = document.getElementById('in_page_nav'),
    h2,
    li,
    link,
    i,
    iMax,
    frag = document.createDocumentFragment(),
    parent,
    grandparent;

      iMax = h2s.length;
      for (i = 0; i < iMax; i++) {
        h2 = h2s[i];
        if (h2.id) {
          li = document.createElement('li');
          link = document.createElement('a');
          link.setAttribute('href', '#' + h2.id);
          link.textContent = h2.textContent;
          li.appendChild(link);
          frag.appendChild(li);
        }
      }
      
      if (frag.firstChild) {
        in_page_nav.appendChild(frag);''
      } else {
        parent = in_page_nav.parentNode;
        grandparent = parent.parentNode;
        grandparent.removeChild(parent);
      }
})(window, document);