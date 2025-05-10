const aboutSection = document.querySelector('.about-content');

function handleScroll() {
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    aboutSection.classList.add('visible');
  } else {
    aboutSection.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  