var BCLS_details = ( function (window, document) {
  var item_details = document.querySelectorAll('details.details-item'),
    section_details = document.querySelectorAll('details.details-section'),
		nested_details = document.querySelectorAll('details.details-nested'),
    i,
    iMax = item_details.length,
    s,
    sMax = section_details.length,
		n,
		nMax = nested_details.length;
  function itemDetailHandler(evt) {
    var j;
    
    if (!this.hasAttribute('open')) {
    evt.preventDefault();
    for (j = 0; j < iMax; j++) {
      item_details[j].removeAttribute('open');
    }
    this.setAttribute('open', 'true');
    } else {
			this.removeAttribute('open');
		}
  }
  
  function nestedDetailHandler(evt) {
    var j;
    
    if (!this.hasAttribute('open')) {
    evt.preventDefault();
    for (j = 0; j < nMax; j++) {
      nested_details[j].removeAttribute('open');
    }
    this.setAttribute('open', 'true');
    } else {
			this.removeAttribute('open');
		}
  }
  
  function sectionDetailHandler(evt) {
    var j;
    
    if (!this.hasAttribute('open')) {
    evt.preventDefault();
    for (j = 0; j < sMax; j++) {
      section_details[j].removeAttribute('open');
    }
    this.setAttribute('open', 'true');
    }
  }
  
  for (i = 0; i < iMax; i++) {
    item_details[i].addEventListener('click', itemDetailHandler);
  }

  if (sMax > 0) {
    for (s = 0; s < sMax; s++) {
      section_details[s].addEventListener('click', sectionDetailHandler);
    }
  }
  if (nMax > 0) {
    for (n = 0; n < nMax; n++) {
      nested_details[n].addEventListener('click', nestedDetailHandler);
    }
  }
})(window, document);