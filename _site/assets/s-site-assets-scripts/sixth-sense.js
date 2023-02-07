  // --- Push Data into Google Tag Manager (GTM) ---
  // 12/07/12 - Removed the "fromLocal" field from the function
  var process6senseData = function(textResponseData) {
    // -- Decode Response --
    if (textResponseData == '') {
      // If the response is blank, stop processing
      console.log('Blank Response');
      return;
    };
    // 12/07/2022 - Setting TTL in Local Storage and as global variable _ttl
    window.localStorage.setItem('_6senseCompanyDetails_ttl', window._ttl);
    // Parse 6sense data response as a JSON.
    var jData = JSON.parse(textResponseData);
    // -- End Decode Response --

    // -- Push Company Details to GTM (via the dataLayer) --
    window.dataLayer.push({
      'company_name': jData.company.name,
      'industry' : jData.company.industry,
      'domain': jData.company.domain,
      'sic_description': jData.company.sic_description,
      'country': jData.company.country,
      'state': jData.company.state,
      'city': jData.company.city,
      'revenue_range': jData.company.revenue_range,
      'employee_range': jData.company.employee_range,
      'segments': jData.segments
    });
    // -- End Company Details to GTM --
    
    // -- Push Scores --
    if(jData.scores.length != 0 && jData.scores[0]) {
      var score = jData.scores[0];
      window.dataLayer.push({
        'buying_stage': score.buying_stage,
        'profile_fit': score.profile_fit,
      })
    }
    // -- End Scores --
  // --- End Data into Google Tag Manager (GTM) ---
  };

  // -- Pushing data into 6sense window profile
  window._6si = window._6si || [];
  window._6si.push(['enableEventTracking', true]);
  window._6si.push(['setToken', 'ef5b5d4a978dfe78150fe72cbf49d6cc']);
  window._6si.push(['setEpsilonKey', '9435cec5256265461446804466f291c83dd6efd6']);  // 02/12/2022 - Added API Call Key for Web/GA tag
  window._6si.push(['setEndpoint', 'b.6sc.co']);

  // Setting variables
  // 12/07/2022 - Setting the TTL to 86400000, equivalent of 24 hrs in MS
  var epsilonName = "enableCompanyDetails"
    , enabled = true
    , callback = process6senseData
    , version = 3
    , ttl = Date.now() + 86400000;
  
  // Validate TTL and current status of the local storage
  if (window.localStorage.getItem("_6senseCompanyDetails_ttl") !== null
    && window.localStorage.getItem("_6senseCompanyDetails_ttl") !== ""
    && Date.now() < window.localStorage.getItem("_6senseCompanyDetails_ttl")
    && window.localStorage.getItem("_6senseCompanyDetails") !== null
    && window.localStorage.getItem("_6senseCompanyDetails") !== "") {
    // Case the TTL is still valid, this will only update the ttl global variable
    // Storage Populated serves as a global flag to manage the local storage content (i.e. 6sense data)
    window._storagePopulated = true;
    window._ttl = window.localStorage.getItem("_6senseCompanyDetails_ttl");
    setTimeout(function() {
      callback(window.localStorage.getItem("_6senseCompanyDetails"))
    }, 1);
  }
  else {
    // Case that the TTL was not setup or expired, or that there's no 6sense data at all, perform the API call (via callback)
    window._ttl = ttl
    window._6si.push(['setEpsilonKey', '9435cec5256265461446804466f291c83dd6efd6']);  // 02/12/2022 - Added API Call Key for Web/GA tag
    window._6si.push([epsilonName, enabled, callback, version]);
  }

  (function() {
    var gd = document.createElement('script');
    gd.type = 'text/javascript';
    gd.async = true;
    gd.src = '//j.6sc.co/6si.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gd, s);
  })();
