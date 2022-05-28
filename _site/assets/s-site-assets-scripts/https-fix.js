var BCLS = ( function (window, document) {
  var h = window.location.href,
    prot = window.location.protocol,
    p = window.location.port,
    language,
    aTags = document.getElementsByTagName('a'),
    i,
    iMax,
    href;
  console.log('p', p);
  console.log('prot', prot);
  
  
  if (prot === 'http:' && p === '') {
    h = h.replace('http:', 'https:');
    console.log('h', h);
    
    window.location.href = h;
  }

  if (h.indexOf('/ja/') > 0) {
    language = 'ja/';
  } else if (h.indexOf('/ko/') > 0) {
    language = 'ko/';
  } else if (h.indexOf('/es/') > 0) {
    language = 'es/';
  } else if (h.indexOf('/fr/') > 0) {
    language = 'fr/';
  } else if (h.indexOf('/de/') > 0) {
    language = 'de/';
  }

  if (isDefined(language)) {
    iMax = aTags.length;
    for (i = 0; i < iMax; i++) {
      href = aTags[i].getAttribute('href');
      if (isDefined(href) && href.indexOf('/' + language) === -1) {
        href = href.replace('support.brightcove.com/', 'support.brightcove.com/' + language);
        aTags[i].setAttribute('href', href);
      }
    }
  }

  /**
   * tests for all the ways a variable might be undefined or not have a value
   * @param {*} x the variable to test
   * @return {Boolean} true if variable is defined and has a value
   */
  function isDefined(x) {
      if ( x === '' || x === null || x === undefined) {
          return false;
      }
      return true;
  }
})(window, document);
