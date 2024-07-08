document.addEventListener('DOMContentLoaded', function() {
  const sortBy = document.getElementById('sort-by');
  if (sortBy) {
    sortBy.addEventListener('change', function() {
      const selectedValue = this.value;
      const url = new URL(window.location.href);
      url.searchParams.set('sort_by', selectedValue);
      window.location.href = url.toString();
    });
    const urlParams = new URLSearchParams(window.location.search);
    const sortByParam = urlParams.get('sort_by');
    if (sortByParam) {
      sortBy.value = sortByParam;
    }
  }
});
