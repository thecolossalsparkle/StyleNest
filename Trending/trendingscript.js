// Array of trending clothes data
const trendingClothes = [
    // {
    //     imgSrc: 'clothingimages/denimjacket.jpg',
    //     description: 'Denim Jacket - $49.99'
    // },
    {
        imgSrc: 'clothingimages/tshirt.jpg',
        description: 'Denim Jacket - $49.99'
    },
    {
        imgSrc: 'clothingimages/denimjacket.jpg',
        description: 'Floral - $49.99'
    },
    {
        imgSrc: 'clothingimages/floral.jpg',
        description: 'Casual Hoodie - $39.99'
    },
    {
        imgSrc: 'clothingimages/nec.jpg',
        description: 'Watch - $59.99'
    },
    {
        imgSrc: 'clothingimages/chain.jpg',
        description: 'Necklace - $39.99'
    },
    {
        imgSrc: 'clothingimages/watch.jpg',
        description: 'Jewel - $39.99'
    },
    // {
    //     imgSrc: 'clothingimages/leatherboots.jpg',
    //     description: 'Leather Boots - $69.99'
    // },
    {
        imgSrc: 'clothingimages/hoodie.jpg',
        description: 'Leather boots - $29.99'
    },
    // {
    //     imgSrc: 'clothingimages/tshirt.jpg',
    //     description: 'Vintage T-Shirt - $19.99'
    // }
];

let currentSlide = 0;

// Function to load clothes into the slider
function loadTrendingClothes() {
    const slidesContainer = document.getElementById('slides');
    
    trendingClothes.forEach(cloth => {
        // Create a div for each clothing item in the slider
        const slide = document.createElement('div');
        slide.classList.add('slide');

        // Add image element
        const img = document.createElement('img');
        img.src = cloth.imgSrc;
        img.alt = cloth.description;

        // Create a caption
        const caption = document.createElement('p');
        caption.textContent = cloth.description;

        slide.appendChild(img);
        slide.appendChild(caption);
        
        // Append the slide to the slides container
        slidesContainer.appendChild(slide);
    });
}

// Slider movement
function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = trendingClothes.length;

    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Call the function on page load
window.addEventListener('DOMContentLoaded', loadTrendingClothes);
