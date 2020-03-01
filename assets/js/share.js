var BCLS_share = ( function (window, document, BCLS_toc, Prism) {
  console.log('shared_content', shared_content);
  window.onload = function() {
    console.log('window load');
    $(function() {
        $('#bcls_article').load('https://general.support.brightcove.com' + shared_content, after_content_load);
      });
    function after_content_load() {
      BCLS_toc.create_inpage_nav();
      Prism.highlightAll();
    }
  };
})(window, document, BCLS_toc, Prism);