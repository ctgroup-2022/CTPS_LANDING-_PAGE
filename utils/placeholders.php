<?php
// Script to generate placeholder images

// Configuration
$placeholder_dir = '../assets/images/placeholders/';
$types = [
    'event-default' => ['text' => 'Event Image', 'bg' => '#E0F2F1', 'text_color' => '#004D40'],
    'notice-default' => ['text' => 'Notice Image', 'bg' => '#E8EAF6', 'text_color' => '#1A237E'],
    'spotlight-default' => ['text' => 'Spotlight Image', 'bg' => '#FFF3E0', 'text_color' => '#E65100'],
];
$width = 800;
$height = 450;

// Create directory if it doesn't exist
if (!file_exists($placeholder_dir)) {
    mkdir($placeholder_dir, 0777, true);
}

// Generate each placeholder
foreach ($types as $name => $config) {
    $image = imagecreatetruecolor($width, $height);
    
    // Parse colors
    list($r, $g, $b) = sscanf($config['bg'], "#%02x%02x%02x");
    $bg_color = imagecolorallocate($image, $r, $g, $b);
    
    list($r, $g, $b) = sscanf($config['text_color'], "#%02x%02x%02x");
    $text_color = imagecolorallocate($image, $r, $g, $b);
    
    // Fill background
    imagefill($image, 0, 0, $bg_color);
    
    // Add text
    $font = 5; // Built-in font
    $text = $config['text'];
    $text_width = imagefontwidth($font) * strlen($text);
    $text_height = imagefontheight($font);
    
    // Center text
    $x = ($width - $text_width) / 2;
    $y = ($height - $text_height) / 2;
    
    // Draw text
    imagestring($image, $font, $x, $y, $text, $text_color);
    
    // Save image
    $filename = $placeholder_dir . $name . '.jpg';
    imagejpeg($image, $filename, 90);
    imagedestroy($image);
    
    echo "Created: $filename\n";
}

echo "All placeholder images created successfully!\n";
?>