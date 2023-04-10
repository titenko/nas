document.addEventListener("DOMContentLoaded", function() {
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/nas/assets/js/posts.json'
  });
});
