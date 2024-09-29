// Mock fetch function to simulate fetching data from the backend
function fetchUserData() {
    // Simulated data
    return {
        username: "JohnDoe",
        email: "johndoe@example.com",
        colors: "Red, Blue, Black",
        brands: "Nike, Zara",
        materials: "Cotton, Wool",
        occasion: "Casual, Formal",
        season: "Summer, Winter",
        accessories: "Scarves, Hats",
        lifestyle: "Active",
        uniqueItems: "Vintage, Custom-made",
        style: "Bohemian, Classic"
    };
}

// Function to display user data
function displayUserData() {
    const userData = fetchUserData();
    
    document.getElementById('username').textContent = userData.username;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('colors').textContent = userData.colors;
    document.getElementById('brands').textContent = userData.brands;
    document.getElementById('materials').textContent = userData.materials;
    document.getElementById('occasion').textContent = userData.occasion;
    document.getElementById('season').textContent = userData.season;
    document.getElementById('accessories').textContent = userData.accessories;
    document.getElementById('lifestyle').textContent = userData.lifestyle;
    document.getElementById('unique-items').textContent = userData.uniqueItems;
    document.getElementById('style').textContent = userData.style;
}

// Call the function to display data when the page loads
window.onload = displayUserData;

// Function to simulate saving preferences (for demonstration purposes)
function savePreferences() {
    alert('Preferences saved successfully!');
}
