
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
    // product_logo = document.querySelector('.product-logo'),
    // product_logo_full_path = product_logo.getAttribute('src'),
    // product_logo_small_path =
    //   'https://support.brightcove.com/site-assets/images/site/product-logos/b-white-on-black.svg',
    h2s = document.querySelectorAll('h2[id]'),
    toc_items,
    toc_links;

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
    let h2s = document.getElementsByTagName('h2'),
      in_page_nav = document.getElementById('in_page_nav'),
      centered_in_page_toc = document.getElementById('centered_in_page_toc'),
      right_side_nav = document.getElementById('right_side_nav'),
      centered_inpage_nav = document.getElementById('centered_in_page'),
      navEl = in_page_nav,
      navWrapper = right_side_nav,
      h2,
      li,
      a,
      option,
      value,
      i,
      iMax,
      frag = document.createDocumentFragment(),
      parent;

    // check window width to set the elements to use
    if (window.innerWidth < 1650) {
      if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
        navEl = centered_in_page_toc;
        navWrapper = centered_inpage_nav;
        in_page_nav_right = false;
      } else {
        navWrapper = null;
        navEl = null;
        centered_inpage_nav.setAttribute('style', 'display: none;');
        removeAllChildNodes(centered_in_page_toc);
        in_page_nav_right = false;
      }
    } else {
      in_page_nav_right = true;
      console.log('in_page_nav_right', in_page_nav_right);
    }


    // if on index page, no inpage nav

    if (pathname === '/' || pathname.indexOf('/index.html') > 0) {
      navEl = null
      navWrapper = null
      centered_inpage_nav.setAttribute('style', 'display: none;')
      removeAllChildNodes(centered_in_page_toc);
      in_page_nav_right = false
    }

    // in case this gets run multiple times by mistake, clear existing items
    if (navEl) {
      removeAllChildNodes(navEl)
    }
    if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
      // add first item
      if (navEl === centered_in_page_toc) {
        option = document.createElement('option');
        option.setAttribute('class', 'toc-item');
        option.textContent = 'Page Contents';
        option.setAttribute('value', '#');
        frag.appendChild(option)
      }

      // add additional section items
      iMax = h2s.length
      for (i = 0; i < iMax; i++) {
        h2 = h2s[i]
        if (h2.id) {
          option = document.createElement('option')
          option.setAttribute('class', 'toc-item')
          option.setAttribute('value', '#' + h2.id)
          option.textContent = h2.textContent
          frag.appendChild(option)
        }
      }

      if (frag.firstChild && navEl) {
        navEl.appendChild(frag)
        if (in_page_nav_right) {
          implementHighlighting()
        }
        // side nav is being generated; set the flag
        side_nav_created = true
      } else {
        if (navEl) {
          parent = navEl.parentNode
          parent.setAttribute('style', 'display:none;')
        }
      }

      // make whole LI clickable
      navEl.addEventListener('change', function() {
        let newHash = navEl.options[navEl.selectedIndex].value;
        location.hash = newHash;
       });

      // get collection of in-page links
      let in_page_links = document.querySelectorAll('#in_page_nav>li');
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
  }

  /**
   * toggle the main navigation menu
   */
  function toggle_nav_menu () {
    if (nav_menu_collapsed) {
      side_nav.setAttribute('style', 'margin-left: 1em;display: inline-block;border-right: 1px solid #e5e5e6;padding-right: 1em;');
      document.querySelector('#main_content').removeAttribute('style');
      nav_menu_collapsed = false;
      bc_veggie_burger.setAttribute('src', '/assets/images/s-feather-img/x.svg');
    } else {
      side_nav.setAttribute('style', 'margin-left: -500px; margin-right: 6em;display: inline-block;border-right: 1px solid #e5e5e6; padding-right: 1em;')
      nav_menu_collapsed = true;
      bc_veggie_burger.setAttribute('src', '/assets/images/s-feather-img/menu.svg');
      if (window.innerWidth > 800) {
        document.querySelector('#main_content').setAttribute('style', 'margin-left: 20em;');
      } else {
        document.querySelector('#main_content').setAttribute('style', 'margin-left: 10em;');
      }
    }
}

  // run the function
  if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
    create_inpage_nav()
  } else {
    if (window.innerWidth < 1000) {
      toggle_nav_menu()
    }
  }

  // set listener for window resize
  window.addEventListener('resize', function () {
    // for in-page nav; don't do if an index page
    if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
      if (window.innerWidth > 1360) {
        if (!in_page_nav_right && centered_inpage_nav) {
          side_nav_created = false
          centered_inpage_nav.setAttribute('style', 'display: none;')
          centered_in_page_toc.innerHTML = ''
          create_inpage_nav()
        }
      } else {
        if (
          right_side_nav &&
          pathname !== '/' &&
          pathname.indexOf('/index.html') < 0
        ) {
          if (in_page_nav_right) {
            side_nav_created = false
            right_side_nav.setAttribute('style', 'display:none;')
            in_page_nav.innerHTML = ''
            create_inpage_nav()
          }
        }
      }
    } else {
      centered_inpage_nav.setAttribute('style', 'display: none;')
      centered_in_page_toc.innerHTML = ''
    }
    // product logo

  })


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

  // this creates a public method, allow it to be run again (imported content for example)
  return {
    create_inpage_nav: create_inpage_nav,
    side_nav_created: side_nav_created
  }
})(window, document)
