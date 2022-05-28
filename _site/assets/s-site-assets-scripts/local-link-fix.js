// keep on same language site

var BCLS_keep_language = ( function (window, document) {
  var href = location.href,
    domain = location.hostname,
    lang = domain.split('.')[0],
    all_links = document.getElementsByTagName('a'),
    i,
    iMax,
    site_select = document.getElementById('site_select'),
    site_options = site_select.querySelectorAll('option');

  if (lang === 'ja' || lang === 'ko' || lang === 'es' || lang === 'fr' || lang === 'de' || lang === 'zh-tw') {
    var hrefValue, 
      currentHref = window.location.href,
      currentLink,
      currentLinkValue,
      newHref;

    iMax = all_links.length;
    
    for (i = 0; i < iMax; i++) {
      currentLink = all_links[i];
      currentLinkValue = currentLink.getAttribute('href');
      hrefValue = currentLinkValue.split('//');
            
      if (currentLinkValue.indexOf('support.brightcove.com') > 0) {
          newHref = hrefValue[0] + '//' + lang + '.' + hrefValue[1];
          // console.log('newHref remote', newHref);
          currentLink.setAttribute('href', newHref);
      }
    }
      // fix site navigator
      iMax = site_options.length;
      // note: starting iteration at 1 because first option isn't a link
      for (i = 1; i < iMax; i++) {
        var site = site_options[i],
          val = site.getAttribute('value');
          site.setAttribute('value', val.replace('https://', 'https://' + lang + '.'));
          
      }
  }
})(window, document);
