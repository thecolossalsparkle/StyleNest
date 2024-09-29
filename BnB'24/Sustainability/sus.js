let totalPoints = {
    sell: 0,
    donate: 0,
    exchange: 0,
    lend: 0,
    reinvent: 0
};

// Function to preview images before uploading
function previewImages(event, activity) {
    const files = event.target.files;
    const previewContainer = document.getElementById(`${activity}-preview`);
    previewContainer.innerHTML = ''; // Clear previous images

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Selected Image';
            img.style.maxWidth = '150px';
            img.style.margin = '10px';
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

// Function to handle actions for all activities
function handleAction(activity) {
    const items = document.getElementById(`${activity}-items`).files;
    const description = document.getElementById(`${activity}-description`).value;
    const uploadStatus = document.getElementById(`${activity}-upload-status`);

    if (items.length > 0 && description.trim() !== '') {
        // Simulate image upload and points calculation
        simulateUpload(activity, items, description)
            .then(points => {
                totalPoints[activity] += points;
                document.getElementById(`${activity}-points`).innerText = totalPoints[activity];
                uploadStatus.innerText = "Images uploaded successfully! You've earned " + points + " points!";
                uploadStatus.style.color = 'green';

                // Update total points
                let total = Object.values(totalPoints).reduce((a, b) => a + b, 0);
                document.getElementById('total-points-value').innerText = total;
            })
            .catch(error => {
                uploadStatus.innerText = "Image upload failed! Try again.";
                uploadStatus.style.color = 'red';
            });
    } else {
        uploadStatus.innerText = "Please select images and describe the items!";
        uploadStatus.style.color = 'red';
    }
}

// Simulating image upload and point allocation
function simulateUpload(activity, files, description) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.1; // Simulate 90% success rate
            if (success) {
                const points = files.length * 10; // Assign 10 points per item
                resolve(points);
            } else {
                reject("Upload failed");
            }
        }, 1000); // Simulating a delay in upload
    });
}
