
let BCLS_toc = (function (window, document) {
  let side_nav_created = false,
    in_page_nav_right = true,
    side_nav = document.getElementById('side_nav'),
    pathname = window.location.pathname,
    url = window.location.href,
    in_page_nav = document.getElementById('in_page_nav'),
    centered_in_page_toc = document.getElementById('centered_in_page_toc'),
    right_side_nav = document.getElementById('right_side_nav'),
    centered_inpage_nav = document.getElementById('centered_inpage_nav'),
    article = document.querySelector('article.bcls-article'),
    // product_logo = document.querySelector('.product-logo'),
    // product_logo_full_path = product_logo.getAttribute('src'),
    // product_logo_small_path =
    //   'https://support.brightcove.com/site-assets/images/site/product-logos/b-white-on-black.svg',
    h2s = document.querySelectorAll('h2[id]'),
    toc_items,
    toc_links,
    breakpoint = 1600;

// if on an index page just remove page contents menus and leave
// if (pathname === '/' || pathname.indexOf('/index.html') > 0) {
//   centered_inpage_nav.setAttribute('style', 'display: none;');
//   right_side_nav.setAttribute('style', 'display: none;');
//   in_page_nav_right = false;
//   return;
// }

/**
   * Add a class to an element
   * @param {node} el the element
   * @param {string} cls the class to add
   */
  function addClass (el, cls) {
    el.classList.add(cls);
  }
  
  /**
   * Remove a class from an element
   * @param {node} el the element
   * @param {string} cls the class to add
   */
  function removeClass (el, cls) {
    el.classList.remove(cls);
  }

  /**
   * Check to see if an element is in the viewport
   * @param {node} el the element to check
   */
  function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Only completely visible elements return true:
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }


  /**
   * Removes all child elements (eg the items in a list)
   * @param {node} parent the element to remove children from
   */
  function removeAllChildNodes (parent) {
    if (parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
      }
    } else {
      console.log(
        parent,
        'Either the parent node was not passed in or does not exist'
      )
    }
  }

  /**
   * Create the in-page navigation
   */
  function create_inpage_nav () {
    let navEl = in_page_nav,
      navWrapper = right_side_nav,
      h2,
      li,
      link,
      option,
      value,
      i,
      iMax,
      frag = document.createDocumentFragment(),
      parent;


    // check window width to set the elements to use
    if (window.innerWidth < breakpoint) {
      navWrapper = centered_in_page_toc;
      navEl = centered_in_page_toc;
      right_side_nav.setAttribute('style', 'display: none;');
      article.removeAttribute('style');
      removeAllChildNodes(in_page_nav);
      in_page_nav_right = false;
    } else {
      in_page_nav_right = true;
      centered_inpage_nav.setAttribute('style', 'display: none;');
      article.setAttribute('style', 'max-width:72%;');
      navWrapper = right_side_nav;
      navEl = in_page_nav;
    }

    // in case this gets run multiple times by mistake, clear existing items
    if (navEl) {
      removeAllChildNodes(navEl)
    }

    // for centered inpage nav add first option
    if (navEl === centered_in_page_toc) {
      option = document.createElement('option');
      option.setAttribute('class', 'toc-item');
      option.textContent = 'Page Contents';
      option.setAttribute('value', '#');
      frag.appendChild(option)
    }

      // add additional section items
      iMax = h2s.length
      console.log('navEl', navEl);
      
      for (i = 0; i < iMax; i++) {
        h2 = h2s[i]
        if (in_page_nav_right) {
          if (h2.id) {
            li = document.createElement('li')
            li.setAttribute('class', 'toc-item')
            link = document.createElement('a')
            link.setAttribute('href', '#' + h2.id)
            link.textContent = h2.textContent
            li.appendChild(link)
            frag.appendChild(li)
          }
        } else {
          if (h2.id) {
            option = document.createElement('option')
            option.setAttribute('class', 'toc-item')
            option.setAttribute('value', '#' + h2.id)
            option.textContent = h2.textContent
            frag.appendChild(option)
          }
        }
      }

      if (frag.firstChild && navEl) {
        navEl.appendChild(frag)
        if (in_page_nav_right) {
          implementHighlighting()
          }
        // side nav is being generated; set the flag
        side_nav_created = true
      } else { // no sections, remove inpage nav
        if (navEl) {
          parent = navEl.parentNode;
          parent.setAttribute('style', 'display:none;')
        }
      }

      // event listeners
      if (in_page_nav_right) {
          toc_items = document.querySelectorAll('li.toc-item');
          console.log('toc_items', toc_items);
          toc_links = document.querySelectorAll('li.toc-item a');
          console.log('toc_links', toc_links);
          iMax = toc_items.length;
          for (i = 0; i < iMax; i++) {
            toc_items[i].setAttribute('style', 'cursor:pointer;')
            toc_items[i].addEventListener('click', function(evt) {
              location.hash = this.firstElementChild.getAttribute('href');
            });
          }
      } else {
        centered_in_page_toc.addEventListener('change', function() {
          let newHash = centered_in_page_toc.options[centered_in_page_toc.selectedIndex].value;
          location.hash = newHash;
        });
      }
    }

    /**
     * implement highlighting
     *  smooth scrolling for Safari
     */
    function implementHighlighting () {
      var navItems = document.getElementsByClassName('toc-item'),
        linkEl,
        j,
        jMax,
        linkTarget

      iMax = navItems.length
      for (i = 0; i < iMax; i++) {
        linkEl = navItems[i]
        linkTarget = linkEl.firstElementChild.getAttribute('href')
        linkEl.addEventListener('click', function (e) {
          document.querySelector(linkTarget).scrollIntoView({
            behavior: 'smooth'
          })
        })
      }
    }



  // set listener for window resize
  window.addEventListener('resize', function () {

    if (window.innerWidth > breakpoint) {
      if (!in_page_nav_right && centered_inpage_nav) {
        side_nav_created = false;
        in_page_nav_right = true;
        centered_inpage_nav.setAttribute('style', 'display: none;');
        right_side_nav.removeAttribute('style');
        removeAllChildNodes(centered_in_page_toc);
        console.log('recreate right nav');
        create_inpage_nav();
      }
    } else {
      if (right_side_nav) {
        if (in_page_nav_right) {
          side_nav_created = false
          right_side_nav.setAttribute('style', 'display:none;');
          centered_inpage_nav.removeAttribute('style');
          removeAllChildNodes(in_page_nav);
          create_inpage_nav();
        }
      }
    }
  });


  // listener for scroll events
  window.addEventListener('scroll',(event) => {
    let i = 0,
      iMax = h2s.length;
    for (i; i<iMax; i++) {
      let thisID = h2s[i].getAttribute('id');
      if (isScrolledIntoView(h2s[i])) {
        if (toc_links) {
          let i = 0,
          iMax = toc_links.length;
          for (i; i < iMax; i++) {
            if (toc_links[i].getAttribute('href') === '#' + thisID) {
              addClass(toc_items[i], 'in-view');
            }
          }
        }
      } else {
        if (toc_links) {
          let i = 0,
          iMax = toc_links.length;
          for (i; i < iMax; i++) {
            if (toc_links[i].getAttribute('href') === '#' + thisID) {
              removeClass(toc_items[i], 'in-view');
            }
          }
        }
      }
    }
  });

  // if inside iframe, hide appropriate elements
  // if (window.location !== window.parent.location) {
  //   bc_veggie_burger_wrapper.setAttribute('style', 'display:none');
  // }
  // hide nav by default on landing pages
  // if (location.pathname.substring(location.pathname.lastIndexOf('/')) === '/index.html' || location.pathname.substring(location.pathname.lastIndexOf('/')) === '/') {
  //   console.log('turning off nav menu');
  //   toggle_nav_menu();
  // }

  // initial create
  console.log('h2s length', h2s.length);
  if (h2s.length > 0) {
    create_inpage_nav();
  } else {
    right_side_nav.setAttribute('style', 'display:none;');
    centered_in_page_toc.setAttribute('style', 'display:none;');
  }

  // this creates a public method, allow it to be run again (imported content for example)
  return {
    create_inpage_nav: create_inpage_nav,
    side_nav_created: side_nav_created
  }
})(window, document)
