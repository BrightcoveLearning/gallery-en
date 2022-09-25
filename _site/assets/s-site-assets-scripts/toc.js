
var BCLS_toc = (function (window, document) {
  var side_nav_created = false,
    in_page_nav_right = true,
    side_nav = document.getElementById('side_nav'),
    bc_veggie_burger_wrapper = document.getElementById(
      'bc_veggie_burger_wrapper'
    ),
    bc_veggie_burger = document.getElementById('bc_veggie_burger'),
    nav_menu_collapsed = false,
    pathname = window.location.pathname,
    url = window.location.href,
    in_page_nav = document.getElementById('in_page_nav'),
    centered_in_page_toc = document.getElementById('centered_in_page_toc'),
    right_side_nav = document.getElementById('right_side_nav'),
    centered_inpage_nav = document.getElementById('centered_inpage_nav'),
    product_logo = document.querySelector('.product-logo'),
    product_logo_full_path = product_logo.getAttribute('src'),
    product_logo_small_path =
      'https://support.brightcove.com/site-assets/images/site/product-logos/b-white-on-black.svg';

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
    var h2s = document.getElementsByTagName('h2'),
      in_page_nav = document.getElementById('in_page_nav'),
      centered_in_page_toc = document.getElementById('centered_in_page_toc'),
      right_side_nav = document.getElementById('right_side_nav'),
      centered_inpage_nav = document.getElementById('centered_inpage_nav'),
      navEl = in_page_nav,
      navWrapper = right_side_nav,
      h2,
      li,
      link,
      i,
      iMax,
      frag = document.createDocumentFragment(),
      parent,
			toc_items;

    // check window width to set the elements to use
    if (window.innerWidth < 1650) {
      if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
        navEl = centered_in_page_toc
        navWrapper = centered_inpage_nav
        in_page_nav_right = false
      } else {
        navWrapper = null
        navEl = null
        centered_inpage_nav.setAttribute('style', 'display: none;')
        centered_in_page_toc.innerHTML = ''
        in_page_nav_right = false
      }
    } else {
      in_page_nav_right = true
    }

    if (
      window.innerWidth < 1000 &&
      url !== 'https://support.brightcove.com/' &&
      url !== 'https://support.brightcove.com/index.html'
    ) {
      if (window.location === window.parent.location) {
        toggle_nav_menu()
      }
    }

    // if on index page, no inpage nav

    if (pathname === '/' || pathname.indexOf('/index.html') > 0) {
      navEl = null
      navWrapper = null
      centered_inpage_nav.setAttribute('style', 'display: none;')
      centered_in_page_toc.innerHTML = ''
      in_page_nav_right = false
    }

    // display the nav block we're using
    if (navWrapper && pathname !== '/' && pathname.indexOf('/index.html') < 0) {
      if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
        navWrapper.setAttribute('style', 'display:block')
      }
    }
    // in case this gets run multiple times by mistake, clear existing items
    if (navEl) {
      removeAllChildNodes(navEl)
    }
    if (pathname !== '/' || pathname.indexOf('/index.html') < 0) {
      // add new items
      iMax = h2s.length
      for (i = 0; i < iMax; i++) {
        h2 = h2s[i]
        if (h2.id) {
          li = document.createElement('li')
          li.setAttribute('class', 'toc-item')
          link = document.createElement('a')
          link.setAttribute('href', '#' + h2.id)
          link.textContent = h2.textContent
          li.appendChild(link)
          frag.appendChild(li)
        }
      }

      if (frag.firstChild && navEl) {
        navEl.appendChild(frag)
        implementHighlighting()
        // side nav is being generated; set the flag
        side_nav_created = true
      } else {
        if (navEl) {
          parent = navEl.parentNode
          parent.setAttribute('style', 'display:none;')
        }
      }

			// make whole LI clickable
			toc_items = document.querySelectorAll('li.toc-item');
			iMax = toc_items.length;
			for (i = 0; i < iMax; i++) {
				toc_items[i].setAttribute('style', 'cursor:pointer;')
				toc_items[i].addEventListener('click', function(evt) {
					location.hash = this.firstElementChild.getAttribute('href');
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
          jMax = navItems.length
          for (j = 0; j < jMax; j++) {
            navItems[j].removeAttribute('style')
          }
          this.setAttribute(
            'style',
            'font-weight:bold;'
          )
        })
      }
    }
  }

  /**
   * toggle the main navigation menu
   */
  function toggle_nav_menu () {
    if (nav_menu_collapsed) {
      side_nav.setAttribute('style', 'display:block;');
      document.querySelector('#main_content').removeAttribute('style');
      nav_menu_collapsed = false
  } else {
    side_nav.setAttribute('style', 'display:none;')
    nav_menu_collapsed = true;
    if (window.innerWidth > 800) {
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
    if (window.innerWidth < 1000) {
      product_logo.setAttribute('src', product_logo_small_path)
      product_logo.setAttribute('style', 'height:2em;max-height:2em;')
    } else {
      product_logo.setAttribute('src', product_logo_full_path)
    }

    // for main nav
    if (window.innerWidth < 1000 && !nav_menu_collapsed) {
console.log('window.innerWidth', window.innerWidth);
console.log('nav_menu_collapsed', nav_menu_collapsed);
      toggle_nav_menu()
    } else if (window.innerWidth > 1000 && nav_menu_collapsed) {
      toggle_nav_menu()
    }
  })

  // listener for burger click
  if (bc_veggie_burger_wrapper) {
    bc_veggie_burger.addEventListener('click', function () {
      if (nav_menu_collapsed) {
        side_nav.setAttribute('style', 'display:block;');
        document.querySelector('#main_content').removeAttribute('style');
        nav_menu_collapsed = false
      } else {
        side_nav.setAttribute('style', 'display:none;')
        nav_menu_collapsed = true;
        if (window.innerWidth > 800) {
          document.querySelector('#main_content').setAttribute('style', 'margin-left: 10em;');
        }
      }
    });
  }

  // if inside iframe, hide appropriate elements
  if (window.location !== window.parent.location) {
    bc_veggie_burger_wrapper.setAttribute('style', 'display:none');
  }
  // hide nav by default on landing pages
  if (location.pathname.substring(location.pathname.lastIndexOf('/')) === '/index.html' || location.pathname.substring(location.pathname.lastIndexOf('/')) === '/') {
    console.log('turning off nav menu');
    toggle_nav_menu();
  }

  // this creates a public method, allow it to be run again (imported content for example)
  return {
    create_inpage_nav: create_inpage_nav,
    side_nav_created: side_nav_created
  }
})(window, document)
