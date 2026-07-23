document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchData = window.searchData || [];

    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query === '') return;

        const matches = searchData.filter(item => 
            item.title.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            searchResults.innerHTML = '<p style="color: #888; text-align: center; margin-top: 2rem;">找不到相關筆記</p>';
            return;
        }

        matches.forEach(item => {
            const a = document.createElement('a');
            a.href = item.permalink;
            a.className = 'search-result-item';
            a.innerHTML = `📖 ${item.title}`;
            searchResults.appendChild(a);
        });
    });
});