<?php
// upload.php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if the file was uploaded without errors
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $filename = $_FILES['image']['name'];
        $filetype = $_FILES['image']['type'];
        $filesize = $_FILES['image']['size'];

        // Check for valid file type (optional)
        $allowed_types = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($filetype, $allowed_types)) {
            die("Error: Please upload a valid image file.");
        }

        // Move the uploaded file to the desired directory (optional)
        $destination = 'uploads/' . $filename;
        if (!move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
            die("Error: Failed to upload file.");
        }

        // Redirect to the description page
        header('Location: description.html');
        exit();
    } else {
        die("Error: " . $_FILES['image']['error']);
    }
}
?>