<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo isset($pageTitle) ? $pageTitle . ' - CT Public School' : 'CT Public School'; ?></title>

<!-- DNS Prefetch for faster loading -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">

<!-- Preconnect to important domains -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>

<!-- Preload critical assets -->
<link rel="preload" href="assets/Logo/ctpslogo.png" as="image">
<link rel="preload" href="assets/hero/hero1.JPG" as="image">

<!-- Responsive viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">

<!-- Optimized font loading -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">

<!-- WebP detection -->
<script>
(function() {
    var WebP = new Image();
    WebP.onload = WebP.onerror = function() {
        document.documentElement.classList.add(WebP.height == 1 ? 'webp' : 'no-webp');
    };
    WebP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
})();
</script>

<!-- Critical CSS for first render -->
<style>
/* Critical CSS for above-the-fold content */
body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

.header, .hero-section {
    visibility: visible !important;
    opacity: 1 !important;
}
</style>
