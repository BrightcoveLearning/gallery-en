  var getUrlParam = function(e){var t = new RegExp("[?&]" + e.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)"),a = t.exec(window.location.href);return a && a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : ""};
  var domain = location.hostname,
  site_domain,
  filter,
  lang_filter,
  tab_filters,
  lang = domain.split('.')[0],
    lang_prefix = '',
    this_site_filter = '',
    all_bc_docs_filter = '';

  if (lang === 'ja' || lang === 'ko' || lang === 'es' || lang === 'fr' || lang === 'de' || lang === 'zh-tw') {
    lang_prefix = lang + '.';
  } else {
    lang = 'en-us';
  }
  site_domain = 'gallery.support.brightcove.com';
  console.log('site domain', site_domain);
  filter = "domain='" + site_domain +  "'";
lang_filter = "lang='" + lang + "'";
  
  //Build filters based on if foreign language site or English
  if (lang === 'ja' || lang === 'ko' || lang === 'es' || lang === 'fr' || lang === 'de' || lang === 'zh-tw') {
    all_bc_docs_filter = "domain  ~ '" + lang + ".'";
    this_site_filter = "domain  ^ '" + site_domain + "'";
  } else {
    all_bc_docs_filter = "domain  ^ 'studio.support.' OR domain  ^ 'mstudio.support.' OR domain  ^ 'player.support.' OR domain  ^ 'apis.support.' OR domain  ^ 'sdks.support.' OR domain  ^ 'integrations.support.' OR domain  ^ 'general.support.' OR domain  ^ 'audience-insights.support.' OR domain  ^ 'beacon-help.support.' OR domain  ^ 'beacon.support.' OR domain  ^ 'corptv.support.' OR domain  ^ 'live.support.'  OR domain  ^ 'zencoder.support.'  OR domain  ^ 'gallery.support.' OR domain  ^ 'interactivity.support.' OR domain  ^ 'ssai.support.' OR domain  ^ 'campaign.support.'";
    this_site_filter = "domain  ^ '" + site_domain + "'"
  }
  
  console.log('filter', filter);
  console.log('lang_filter', lang_filter);
  console.log('this_site_filter: ', this_site_filter);
  console.log('all_bc_docs_filter: ', all_bc_docs_filter);
  
  // Apply the filters if it is Support home or one of the product domains
  if (site_domain === 'support.brightcove.com') {
    tab_filters = {defaultTab:"All Brightcove Documentation",tabs:[{title:"All Brightcove Documentation",filter:all_bc_docs_filter}]};
  } else {
    tab_filters = {defaultTab:"This Site",tabs:[{title:"This Site",filter:this_site_filter}, {title:"All Brightcove Documentation",filter:all_bc_docs_filter}]};
  }
  

  var searchInterface = sajari.init({
      mode: "inline",
      project: "1588255093746585379", // Set this to your project.
      collection: "brightcove-documenation", // Set this to your collection.
      pipeline: "website",     // Set the search pipeline.
      instantPipeline: "autocomplete", // Set the instant pipeline.
      attachSearchBox: document.getElementById("nav-search-box"), // DOM element to render search box.
      attachSearchResponse: document.getElementById("results-search-response"), // DOM element to render search results.
      inputPlaceholder: "Search", // Placeholder text for the search box.
      inputAutoFocus: false, // Focus the input element on render.
      maxSuggestions: 5, // Maximum number of suggestions to show.
      results: {"showImages": false }, // Configure the results.
      values: {"q.override": true, "resultsPerPage": "10","q": getUrlParam("q")}, // Set default values
      tabFilters: tab_filters, // User selectable filters
      styling: { theme: { colors: { brand: { primary: "#333" }}}}
  });
