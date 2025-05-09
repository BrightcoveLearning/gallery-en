var codeBlocks;
var BCLS = (function(window, document, profiles_array_cached_2) {
  var mainSection = document.querySelector('.bcls-article'),
  data = {},
    navLabel = [];

  /**
   * determines whether specified item is in an array
   *
   * @param {array} array to check
   * @param {string} item to check for
   * @return {boolean} true if item is in the array, else false
   */
  function isItemInArray(arr, item) {
    var i,
      iMax = arr.length;
    for (i = 0; i < iMax; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  }
  /**
   * remove spaces from passed string
   * @param  {string} str - the string to remove spaces from
   * @return {str}   - string with spaces removed
   */
  function removeSpaces(str) {
    if (isDefined(str)) {
      return str.replace(/\s/g, "");
    }
    return "";
  }
  /**
   * tests for all the ways a variable might be undefined or not have a value
   * @param {*} x the variable to test
   * @return {Boolean} true if variable is defined and has a value
   */
  function isDefined(x) {
    if (x === '' || x === null || x === undefined) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * dedupe a simple array of strings or numbers
   * @param {array} arr the array to be deduped
   * @return {array} out the deduped array
   */
  function dedupe(arr) {
    var i,
      len = arr.length,
      out = [],
      obj = {};

    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
  /**
   * Logging function - safe for IE
   * @param  {string} context description of the data
   * @param  {*} message the data to be logged by the console
   * @return {}
   */
  function bclslog(context, message) {
    if (window.console && console.log) {
      console.log(context, message);
    }
    return;
  }
  /**
   * create an element
   * @param  {string} type - the element type
   * @param  {object} attributes - attributes to add to the element
   * @return {object} the HTML element
   */
  function createEl(type, attributes) {
    var el;
    if (isDefined(type)) {
      el = document.createElement(type);
      if (isDefined(attributes)) {
        var attr;
        for (attr in attributes) {
          el.setAttribute(attr, attributes[attr]);
        }
      }
      return el;
    }
  }

  // create navigation for page sections
  function createInPageNavMenu() {
    var sideNavList = document.querySelector('.bc-ipnav-block ul'),
      lastLI = sideNavList.lastChild,
      i,
      max = navLabel.length,
      aEl,
      liEl,
      txt;
    for (i = 0; i < max; i++) {
      liEl = document.createElement('li');
      aEl = document.createElement('a');
      aEl.setAttribute('href', '#' + navLabel[i].link);
      txt = document.createTextNode(navLabel[i].text);
      aEl.appendChild(txt);
      liEl.appendChild(aEl);
      sideNavList.insertBefore(liEl, lastLI);
    }
  }

  // create array of new nav objects
  function createInPageNav() {
    var navObj = {},
      h2s = document.querySelectorAll('section.bcls-section h2'),
      i, index,
      iMax = h2s.length;
    // set initial visibilities
    for (i = 0; i < iMax; i++) {
      index = i;
      // bclslog("index", index);
      if (index > 0) {
        $this = h2s[i];
        navObj = {};
        navObj.link = $this.getAttribute("id");
        navObj.text = $this.innerHTML;
        navLabel.push(navObj);
      }
    }
    // bclslog('navLabel', navLabel);
    // only create the nav widget if there is more than one item
    if (navLabel.length > 1) {
      // create in-page nav menu
      createInPageNavMenu();
    }
  }

  function buildSummaryTable() {
    var newSectionNode = document.createElement("section"),
      sectionHeadingNode = document.createElement("h2"),
      sectionIntroNode = document.createElement("p"),
      profileTableNode = document.createElement("table"),
      profiletheadNode = document.createElement("thead"),
      profiletbodyNode = document.createElement("tbody"),
      sectionHeadingElem,
      sectionIntroElem,
      profileTableElem,
      profiletheadElem,
      profiletbodyElem,
      fragment = document.createDocumentFragment(),
      i,
      iMax,
      j,
      jMax,
      k,
      kMax,
      item,
      str = "",
      tr,
      th,
      td,
      a,
      content;
    iMax = data.profiles_array.length;
    // massage data
    for (i = 0; i < iMax; i++) {
      item = data.profiles_array[i];
      item.videoRenditions = 0;

      jMax = item.renditions.length;
      item.numRenditions = jMax;

      for (j = 0; j < jMax; j++) {
        // count up renditions of each kind
        if (item.renditions[j].media_type === "video") {
          item.videoRenditions++;
        }
      }

    }
    newSectionNode.setAttribute("id", "Summary_Table");
    newSectionNode.setAttribute("class", "bcls-section");
    sectionHeadingNode.setAttribute("id", "summaryTableHeading");
    sectionIntroNode.setAttribute("id", "summarySectionIntro");
    profileTableNode.setAttribute("id", "profileSummaryTable");
    profileTableNode.setAttribute("class", "bcls-table");
    profiletheadNode.setAttribute("id", "profileSummaryTableThead");
    profiletheadNode.setAttribute("class", "bcls-table__head");
    profiletbodyNode.setAttribute("id", "profileSummaryTableTbody");
    profiletbodyNode.setAttribute("class", "bcls-table__body");
    newSectionNode.appendChild(sectionHeadingNode);
    newSectionNode.appendChild(sectionIntroNode);
    newSectionNode.appendChild(profileTableNode);
    profileTableNode.appendChild(profiletheadNode);
    profileTableNode.appendChild(profiletbodyNode);
    fragment.appendChild(newSectionNode);
    // bclslog('data.profiles_array', data.profiles_array);
    iMax = data.profiles_array.length;
    for (i = 0; i < iMax; i++) {
      item = data.profiles_array[i];
      tr = document.createElement('tr');
      profiletbodyNode.appendChild(tr);
      td = document.createElement('td');
      a = document.createElement('a');
      a.setAttribute('href', '#' + removeSpaces(item.name));
      content = document.createTextNode(item.name);
      a.appendChild(content);
      td.appendChild(a);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.videoRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      content = document.createTextNode(item.description);
      td.appendChild(content);
      tr.appendChild(td);
    }
    mainSection.appendChild(fragment);
    sectionHeadingElem = document.getElementById("summaryTableHeading");
    sectionIntroElem = document.getElementById("summarySectionIntro");
    profiletheadElem = document.getElementById("profileSummaryTableThead");
    profiletbodyElem = document.getElementById("profileSummaryTableTbody");
    sectionHeadingElem.innerHTML = "Standard Profiles List";
    content = document.createTextNode('Click on a profile name to see details of the renditions it includes. Note that the actual renditions created will depend on the quality of the source video.');
    sectionIntroElem.appendChild(content);
    tr = document.createElement('tr');
    profiletheadElem.appendChild(tr);
    th = document.createElement('th');
    content = document.createTextNode('Profile Name');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Video Renditions');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Description');
    th.appendChild(content);
    tr.appendChild(th);
  }

  function buildDetailTables() {
    // bclslog("building data tables");
    var section,
      fragment = document.createDocumentFragment(),
      sectionHeading,
      sectionSubHeading,
      sectionJsonHeading,
      sectionJsonP,
      sectionTableHeading,
      renditionTable,
      renditionthead,
      renditiontbody,
      tr,
      th,
      td,
      ul,
      li,
      link,
      profilePre,
      profileCode,
      i, j, jMax,
      iMax = data.profiles_array.length,
      headings,
      profile,
      rendition,
      renditionProperty,
      text,
      str,
      re = /_/g;
    for (i = 0; i < iMax; i++) {
      var headersArray = [],
        l,
        lMax;
      profile = data.profiles_array[i];
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      if (isDefined(profile.keep_renditions)) {
        delete profile.keep_renditions;
      }
      if (!isDefined(profile.description)) {
        profile.description = 'legacy profile - not recommended for use';
      }
      // profile.name = profile.name + ' Copy';
      profile.account_id = null;
      if (isDefined(profile.renditions)) {
        jMax = profile.renditions.length;
        for (j = 0; j < jMax; j++) {
          delete profile.renditions[j].id;
        }
      }
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = createEl("p");
      sectionJsonHeading = createEl("h6", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h6");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);

      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      // Convert allowed_frame_rates objects to array of floats
      profile.renditions.forEach(rendition => {
      if (Array.isArray(rendition.allowed_frame_rates)) {
          rendition.allowed_frame_rates = rendition.allowed_frame_rates.map(rate => rate.as_float);
        }
      });
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of rendition properties");
      sectionTableHeading.appendChild(text);
      // now do the reditions
      jMax = profile.renditions.length;

      const excludedProps = new Set([
        "decoder_bitrate_cap",
        "decoder_buffer_size",
        "video_bframes",
        "sample_aspect_ratio",
        "video_codec_level",
        "video_reference_frames"
      ]);

      // get all properties and build the table headers
      // for (j = 0; j < jMax; j++) {
      //   var prop;
      //   rendition = profile.renditions[j];
      //   for (prop in rendition) {
      //     headersArray.push(prop);
      //   }
      // }

      // get all properties and build the table headers
      for (j = 0; j < jMax; j++) {
      rendition = profile.renditions[j];
      for (var prop in rendition) {
        if (!excludedProps.has(prop)) {
          headersArray.push(prop);
          }
        }
      }
      // dedupe the headers
      headersArray = dedupe(headersArray);
      // bclslog("deduped headers array", headersArray);
      // write the th elements to the string
      // create the table headers
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      // now add the body row for each rendition
      jMax = profile.renditions.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.renditions[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
    }
    mainSection.appendChild(fragment);
    // bclslog("content built");
    // get reference to codeBlocks
    setCodeBlocks();
    createInPageNav();
  }

  function setCodeBlocks() {
    var i,
      iMax;
    codeBlocks = document.getElementsByClassName('bcls-code');

    function selectCode() {
      this.select();
    }

    iMax = codeBlocks.length;
    for (i = 0; i < iMax; i++) {
      codeBlocks[i].addEventListener('click', selectCode);
    }
  }

  function getProfileData() {
    var httpRequest = new XMLHttpRequest(),
      options = {},
      proxyURL = "https://solutions.brightcove.com/bcls/bcls-proxy/bcls-proxy-v2.php",
      i,
      iMax,
      tmpArr = [];

    options.url = 'https://ingestion.api.brightcove.com/v1/accounts/3921507403001/profiles';
    function getResponse() {
      // bclslog("getting data");
      // try {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status >= 200 && httpRequest.status < 300) {
            // try {
            //   bclslog('response', httpRequest.responseText);
            // console.log('response', httpRequest.responseText);
            tmpArr = JSON.parse(httpRequest.responseText);
            // console.log('tmpArr', tmpArr);
            if (tmpArr.hasOwnProperty('error_code')) {
              data.profiles_array = profiles_array_cached_2;
              console.log('data', data.profiles_array);
            } else {
              iMax = tmpArr.length;
              data.profiles_array = [];
              for (i = 0; i < iMax; i++) {
                console.log('i', tmpArr[i]);
                if (tmpArr[i].renditions && tmpArr[i].renditions.length && 0 && tmpArr[i].renditions[0].live_stream && tmpArr[i].renditions[0].live_stream === true && tmpArr[i].model_version && tmpArr[i].model_version === 1) {
                  data.profiles_array.push(tmpArr[i]);
                }
              }
            }
            console.log('profiles_array',data.profiles_array );
            buildSummaryTable();
            buildDetailTables();

          } else {
            bclslog("There was a problem with the request. Request returned: ", httpRequest.status);
            // just use cached data and build the tables
            data.profiles_array = profiles_array_cached_2;
            buildSummaryTable();
            buildDetailTables();

          }
        }
      }
    console.log('options', options);
    // set response handler
    httpRequest.onreadystatechange = getResponse;
    // open the request
    httpRequest.open("POST", proxyURL);
    // open and send request
    httpRequest.send(JSON.stringify(options));
  }
  // getProfileData();
  data.profiles_array = profiles_array_cached_2;
  buildSummaryTable();
  buildDetailTables();

  // BCLSmain.createInPageNav();
})(window, document, profiles_array_cached_2);
