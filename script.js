// Scroll Animation
const sections = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('show');
    }
  });
});

// Chart
const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Peer Influence', 'Technology', 'Screen Time'],
    datasets: [{
      label: 'Impact Level',
      data: [80, 75, 90],
    }]
  }
});

// Presentation Mode
function startPresentation() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}
