var current = "Home"
var previous = "Home"

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

    var current = "Experience"

    document.getElementById('pic-column').style.transform = 'translateY(-100vh)';
    document.getElementById('about').style.transform = 'translateX(-100vw)';
    document.getElementById('full-stack').style.transform = 'translateX(-100vw)';
    document.getElementById('social').style.transform = 'translateY(100vh)';



    setTimeout(() => {
        document.getElementById('experiences').style.display = 'flex';
        document.getElementById('about').style.display = 'None';
        document.getElementById('experiences').style.transform = 'translateX(100vw))';
        document.getElementById('pic-column').style.display = 'None';
        document.getElementById('social').style.display = 'None';
        setTimeout(() => {
          document.getElementById('experiences').style.transform = 'translateX(0)';
        }, 100);
      }, 400);





}

function loadHome() {

  document.getElementById('experiences').style.transform = 'translateX(-100vw)';



  setTimeout(() => {
    document.getElementById('experiences').style.display = 'None';
    document.getElementById('about').style.display = 'flex';
    document.getElementById('pic-column').style.display = 'flex';
    document.getElementById('full-stack').style.display = 'flex';
    document.getElementById('social').style.display = 'flex';

    setTimeout(() => {

      document.getElementById('about').style.transform = 'translateX(0)';
      document.getElementById('pic-column').style.transform = 'translateY(0)';
      document.getElementById('social').style.transform = 'translateY(0)';
      document.getElementById('full-stack').style.transform = 'translateY(0)';
    }, 200);


  }, 400);






  if (current === "Experience"){

  }
}
