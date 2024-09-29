document.getElementById('generate-btn').addEventListener('click', () => {
    const outfits = [
        'Casual Summer Look: T-shirt, Shorts, Sandals',
        'Business Casual: Blazer, Chinos, Loafers',
        'Sporty Look: Hoodie, Joggers, Sneakers',
        'Chic Night Out: Dress, Heels, Clutch'
    ];
    
    const randomOutfit = outfits[Math.floor(Math.random() * outfits.length)];
    document.getElementById('outfit-display').textContent = randomOutfit;
});
