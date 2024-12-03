window.addEventListener('load', function() {
    let width = window.innerWidth;
    // Hide the loading overlay and show the main content

    document.getElementById('controls-column').style.transform = 'translateX(0)';
    document.getElementById('pic-column').style.transform = 'translateY(0)';
    document.getElementById('name').style.transform = 'translateY(0)';
    document.getElementById('full-stack').style.transform = 'translateY(0)';
    document.getElementById('social').style.transform = 'translateY(0)';

  });


  function loadExperience() {
    document.getElementById('pic-column').style.opacity = '0';
    document.getElementById('about').style.opacity = '0';
    document.getElementById('full-stack').style.opacity = '0';
    document.getElementById('social').style.opacity = '0';



    setTimeout(() => {
        document.getElementById('test').style.display = 'flex';
        document.getElementById('about').style.display = 'None';
        document.getElementById('test').style.transform = 'translateX(100vw))';
        document.getElementById('pic-column').style.display = 'None';
        document.getElementById('social').style.display = 'None';
      }, 1000);



      setTimeout(() => {
        document.getElementById('test').style.transform = 'translateX(0)';
      }, 1300);



    




  }