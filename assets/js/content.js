$(document).ready(function() {
  var $content = $('#content');
  var $navbarLinks = $('.navbar a');

  // Load initial content based on hash
  var hash = window.location.hash.substr(1);
  if (hash) {
    var toLoad = hash + '.html #content';
    $content.load(toLoad);
  }

  // Handle click events on navbar links
  $navbarLinks.click(function(event) {
    event.preventDefault();
    var pageUrl = $(this).attr('href');
    var toLoad = pageUrl + ' #content';

    // Update hash in URL
    history.pushState(null, null, pageUrl);

    // Load new content
    $content.hide('fast', function() {
      $content.load(toLoad, function() {
        $content.show('normal');
      });
    });
  });

  // Handle click events on "Read More" links
  $(document).on('click', '.read-more', function(event) {
    event.preventDefault();
    var pageUrl = $(this).attr('href');
    var toLoad = pageUrl + ' #content';

    // Load new content
    $content.hide('fast', function() {
      $content.load(toLoad, function() {
        $content.show('normal');
        // Scroll to the top of the page
        $('html,body').animate({scrollTop:0},'slow');
      });
    });

    // Update URL hash
    history.pushState(null, null, pageUrl);
  });
});

