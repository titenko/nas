document.addEventListener("DOMContentLoaded", function() {
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/assets/js/posts.json'
  });
});
