var BCLS_selectors = ( function (window, document) {
  const site_select = document.getElementById('site_select'),
  language_select = document.getElementById('language_select');
  let languages = language_select.children,
  sites = site_select.children,
  lang_matcher = location.hostname.substring(0,location.hostname.indexOf('.')),
  language_matcher,
  location_matcher = 'https://' + location.hostname,
  i,
  iMax;

  // set the language matcher
  switch (lang_matcher) {
    case 'ja':
      language_matcher = 'en|ja';
      break;
    case 'es':
      language_matcher = 'en|es';
      break;
    case 'fr':
      language_matcher = 'en|fr';
      break;
    case 'de':
      language_matcher = 'en|de';
      break;
    case 'ko':
      language_matcher = 'en|ko';
      break;
    case 'zh-tw':
      language_matcher = 'en|sh-TW';
      break;
    default:
      language_matcher = 'en|en';
  }

  function make_active(select, collection, matcher) {
    iMax = collection.length;
    for (i = 0; i < iMax; i++) {
      console.log('collection[i].value', collection[i].value)
      if (collection[i].value === matcher) {
        collection[i].setAttribute('selected', 'selected');
      }
    }
  }

  make_active(site_select, sites, location_matcher);
  make_active(language_select, languages, language_matcher);
})(window, document);