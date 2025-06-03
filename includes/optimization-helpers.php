<?php
/**
 * Image optimization helper functions
 */

// Function to get WebP version of image if available
function get_optimized_image_url($original_url, $size = 'full') {
    // Default to original if no size specified
    if ($size === 'full') {
        return $original_url;
    }
    
    // Parse URL components
    $path_parts = pathinfo($original_url);
    $dir = $path_parts['dirname'];
    $filename = $path_parts['filename'];
    $ext = $path_parts['extension'];
    
    // Check for WebP support (can use this with PHP headers)
    $webp_support = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'image/webp') !== false;
    
    // If browser supports WebP and the WebP version exists, use it
    if ($webp_support && file_exists($_SERVER['DOCUMENT_ROOT'] . "/{$dir}/{$filename}-{$size}.webp")) {
        return "{$dir}/{$filename}-{$size}.webp";
    }
    
    // Otherwise, try to use the regular optimized version
    if (file_exists($_SERVER['DOCUMENT_ROOT'] . "/{$dir}/{$filename}-{$size}.{$ext}")) {
        return "{$dir}/{$filename}-{$size}.{$ext}";
    }
    
    // Fallback to original
    return $original_url;
}

// Create lightweight placeholder SVG
function get_placeholder_svg($width = 100, $height = 100, $color = 'f0f0f0') {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='{$width}' height='{$height}' viewBox='0 0 {$width} {$height}'%3E%3Crect width='100%25' height='100%25' fill='%23{$color}'/%3E%3C/svg%3E";
}

// Get image dimensions from file
function get_image_dimensions($image_path) {
    $fullpath = $_SERVER['DOCUMENT_ROOT'] . '/' . ltrim($image_path, '/');
    if (file_exists($fullpath)) {
        $size = getimagesize($fullpath);
        if ($size) {
            return ['width' => $size[0], 'height' => $size[1]];
        }
    }
    return ['width' => 300, 'height' => 200]; // Default fallback dimensions
}
?>
