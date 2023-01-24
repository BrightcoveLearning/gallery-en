function buildComparisonTable() {
  var tr,
    th,
    td,
    a,
    i,
    iMax,
    j,
    jMax,
    bodyFrag = document.createDocumentFragment();

  // segmented audio renditions
  iMax =

  // progressive video Renditions
  iMax = progressiveRenditions.length;
  for (i = 0; i < iMax; i++) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.setAttribute('translate', 'No');
    td.textContent = progressiveRenditions[i].id;
    tr.appendChild(td);
    jMax = profiles.length;
    for (j = 0; j < jMax; j++) {
      td = document.createElement('td');
      td.setAttribute('style', 'text-align:center');
      img = document.createElement('img');
      if (isItemInArray(profiles[j].dynamic_origin.renditions, progressiveRenditions[i].id)) {
        img.setAttribute('src', yesImg);
        img.setAttribute('alt', 'yes');
        td.appendChild(img);
        tr.appendChild(td);
      } else {
        img.setAttribute('src', noImg);
        img.setAttribute('alt', 'no');
        td.appendChild(img);
        tr.appendChild(td);
      }
    }
    bodyFrag.appendChild(tr);
  }

  // add to doc
  comparisonTableHead.appendChild(headFrag);
  comparisonTableBody.appendChild(bodyFrag);
}