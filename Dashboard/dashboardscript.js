document.addEventListener('DOMContentLoaded', () => {
    const wardrobeItems = 15;
    const latestOutfit = "Autumn Look";
    const sustainabilityScore = 85;
    const usageStats = "5 items worn this week";

    // Dynamic updates
    document.getElementById('item-count').innerText = `${wardrobeItems} items`;
    document.getElementById('latest-outfit').innerText = latestOutfit;
    document.getElementById('sustainability-score').innerText = `${sustainabilityScore}%`;
    document.getElementById('usage-stats').innerText = usageStats;
});

function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.account-icon') && !event.target.matches('.account-icon *')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}
