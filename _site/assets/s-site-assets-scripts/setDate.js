var BCLS_set_date = ( function (window, document) {
  var  bc_copyright = document.getElementById('bc_copyright'),
    y = new Date().getFullYear();
  if (bc_copyright) {
    var c = bc_copyright.textContent;
    bc_copyright.innerHTML = '&copy;' + y + '&nbsp;' + c;
  }
})(window, document);