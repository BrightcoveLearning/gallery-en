var BCLS_site = (function(window, document) {
  var all_sidenav_links = document.querySelectorAll(".sidenav a"),
    href = window.location.pathname,
    i,
    iMax,
    currentLink,
    parentNodeName,
    p1,
    p2,
    p3,
    pSib,
    pChild,
    pNextSib,
    p1NextSib;

  // side navigation
  iMax = all_sidenav_links.length;
  for (i = 0; i < iMax; i++) {
    currentLink = all_sidenav_links[i];
    if (currentLink.getAttribute("href") === href) {
      // currentLink.setAttribute("class", "bcls-active");
      currentLink.parentElement.setAttribute("class", "bcls-active");
      if (currentLink.getAttribute("href") !== "/") {
        p1 = currentLink.parentElement;
        p1NextSib = p1.nextElementSibling;
        p2 = p1.parentElement;
        p3 = p2.parentElement;
        console.log('p1', p1);
        console.log('p2', p2);
        console.log('p3', p3);
        console.log('p1NextSib', p1NextSib);
        parentNodeName = p1.nodeName;
        pSib = p1.firstChild;
        if (p1.nodeName === 'H5') {
          pNextSib = p1.nextElementSibling;
          pNextSib.removeAttribute('style');
        } else if (p1.nodeName === 'LI' && p1NextSib === null && p3.nodeName == 'UL') {
          p2.removeAttribute('style');
          p3.removeAttribute('style');
        } else if (p1.nodeName === 'LI' && p1NextSib === null) {
          p2.removeAttribute('style');
        } else if (p1.nodeName === 'LI' && p1NextSib.nodeName === 'UL') {
            console.log('p1NextSib nodename', p1NextSib.nodeName);
            p2.removeAttribute('style');
            p1NextSib.removeAttribute('style');
            console.log('p1NextSib', p1NextSib);
        } else if (p2.nodeName === 'UL' && p3.nodeName === 'UL') {
          p2.removeAttribute('style');
          p3.removeAttribute('style');
        } else if (p1.nodeName === 'LI') {
          p2.removeAttribute('style');
        }
      }
    }
  }
})(window, document);
