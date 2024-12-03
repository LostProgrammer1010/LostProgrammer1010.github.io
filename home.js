window.addEventListener('load', function() {
    let width = window.innerWidth;
    // Hide the loading overlay and show the main content

    if (width > 720){
        document.getElementById('name').style.opacity = '100';
        document.getElementById('tech-stack').style.bottom = '0px';
    }

  });