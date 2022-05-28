/**
 * Removes selected elements if the doc is loaded in an iframe
 */
var BCLS_in_app = ( function (window, document) {
  var header = document.querySelector('header'),
    side_nav = document.getElementById('side_nav'),
    footer = document.querySelector('footer'),
    open_new_tab = document.getElementById('open_new_tab'),
    bc_veggie_burger_wrapper = document.getElementById('bc_veggie_burger_wrapper'),
    site_select = document.getElementById('site_select'),
    player_div = document.querySelector('div.training-video-player-ipx'),
    player_data = {
      account_id: '20318290001',
      player_id: 'rkk6AgWUM'
    };

  function hideElement(el) {
    if (el) {
      el.setAttribute('style', 'display:none;');
    } else {
      console.log('The element ' + el + 'does not exist');
    }
  }

  function removeFeedbackify() {
    var t,
    feedbackify = document.getElementById('feedbackify');
    console.log('feedbackify', feedbackify);
    if (feedbackify) {
      var feedbackify_parent = feedbackify.parentNode;
      console.log('feedbackify_parent', feedbackify_parent);
      feedbackify_parent.removeChild(feedbackify);
    } else {
      console.log('retry');
      t = window.setTimeout(removeFeedbackify, 2000);
    }
}

  function removeSearch() {
    var t,
    searchEl = document.getElementById('nav-search-box');
    console.log('searchEl', searchEl);
    if (searchEl) {
      searchEl.setAttribute('style', 'display:none;')
    } else {
      console.log('retry');
      t = window.setTimeout(removeSearch, 2000);
    }
}

function removeIPX() {
  console.log('player_div', player_div);
  if (player_div) {
    player_data.video_id = player_div.getAttribute('data-video-ids');
    var t,
      iframe = document.querySelector('div.training-video-player-ipx > iframe');
    if (iframe) {
      iframe.setAttribute('style', 'display: none;')
    } else {
      console.log('retry remove IPX');
      t = window.setTimeout(removeIPX, 2000);
    }
    addPlayer();
  }
}

  // +++ Build the player and place in HTML DOM +++
function addPlayer() {
  // Dynamically build the player video element
  console.log('player_data', player_data);
  var player_outer_wrapper = document.createElement('div'),
  player_inner_wrapper = document.createElement('div'),
  player_HTML =
    '<video-js id="my_player_id" data-video-id="' +
    player_data.video_id +
    '"  data-account="' +
    player_data.account_id +
    '" data-player="' +
    player_data.player_id +
    '" data-embed="default" class="video-js" controls class="vjs-fluid" width="350" height="197"></video-js>';
    
  // style outer wrapper
  player_outer_wrapper.setAttribute('style', 'position: relative; display: block; max-width: 100%; max-height: 12em;')
  // make inner wrapper responsive
  player_inner_wrapper.setAttribute('style', 'aspect-ratio: 9 / 16 !important;width:100%;');
  // add inner wrapper to outer wrapper
  player_outer_wrapper.appendChild(player_inner_wrapper);
  player_div.appendChild(player_outer_wrapper);
  // Inject the player code into the DOM
  player_inner_wrapper.insertAdjacentHTML('afterbegin', player_HTML);
  // Add and execute the player script tag
  var s = document.createElement("script");
  s.src =
    "https://players.brightcove.net/" +
    player_data.account_id +
    "/" +
    player_data.player_id +
    "_default/index.min.js";
  // Add the script tag to the document
  document.body.appendChild(s);
  // Call a function to play the video once player's JavaScript loaded
  // s.onload = callback;
}

// +++ Initialize the player and start the video +++
// function callback() {
//   myPlayer = bc("my_player_id");
//   // Can also use the following to assign a player instance to the variable if you choose not to use IDs for elements directly
//   // myPlayer = bc(document.getElementById('my_player_id'));
//   myPlayer.on("loadedmetadata", function() {
//     // Mute the audio track, if there is one, so video will autoplay on button click
//     myPlayer.muted(true);
//     myPlayer.play();
//   });
// }

    // if inside iframe, hide appropriate elements
  if (window.location !== window.parent.location) {
    var fby = fby || [];
    fby.push(['showTab', {id: '{{ site.feedbackify_id }}', position: 'right', color: '#D33D00'}]);
    (function () {
        var f = document.createElement('script'); f.type = 'text/javascript'; f.async = true;
        f.src = '//cdn.feedbackify.com/f.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(f, s);
    })();
    hideElement(header);
    hideElement(footer);
    hideElement(side_nav);
    hideElement(site_select);
    hideElement(bc_veggie_burger_wrapper);
    removeSearch();
    removeFeedbackify();
    removeIPX();
    // in_prod_nav.removeAttribute('style');
    open_new_tab.removeAttribute('style');
    open_new_tab.setAttribute('href', window.location.href);
    // removeFeedbackify();
    // forward_button.addEventListener('click', function() {
    //   window.history.forward();
    // });
    // back_button.addEventListener('click', function() {
    //   window.history.back();
    // });
  }

})(window, document);