document.addEventListener('DOMContentLoaded', () => {
    const preferencesForm = document.getElementById('preferences-form');

    preferencesForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const preferences = {
            colors: preferencesForm.colors.value,
            brands: preferencesForm.brands.value,
            materials: preferencesForm.materials.value,
            occasion: preferencesForm.occasion.value,
            season: preferencesForm.season.value,
            accessories: preferencesForm.accessories.value,
            lifestyle: preferencesForm.lifestyle.value,
            uniqueItems: preferencesForm['unique-items'].value,
            style: preferencesForm.style.value,
        };

        console.log('User Preferences:', preferences);

        alert('Signup successful 🎉');
        window.location.href = 'index.html';
    });
});
