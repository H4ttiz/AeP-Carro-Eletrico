// Mobile Navbar
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();
  
  // Slider
  let counter = 1;
  const radioButtons = document.querySelectorAll('input[name="btn-radio"]');
  const totalSlides = radioButtons.length;
  
  function nextSlide() {
    counter++;
    if (counter > totalSlides) {
      counter = 1;
    }
    document.getElementById(`radio${counter}`).checked = true;
  }
  
  // Auto slide every 5 seconds
  let slideInterval = setInterval(nextSlide, 5000);
  
  // Pause on hover
  const slider = document.querySelector('.slider');
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
  
  // Manual navigation
  document.querySelectorAll('.manual-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      counter = index + 1;
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  // Videos imagens
  document.querySelectorAll('.media-box').forEach(box => {
  const img = box.querySelector('img');
  const video = box.querySelector('video');

  box.addEventListener('mouseenter', () => {
    img.style.display = 'none';
    video.style.display = 'block';
    video.currentTime = 0;
    video.play();
  });

  box.addEventListener('mouseleave', () => {
    video.pause();
    video.style.display = 'none';
    img.style.display = 'block';
  });

  // Garante que vídeo inicie oculto
  video.style.display = 'none';
  
});

// Efeito quando descer a pagina
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
  }
  );
  const elements = document.querySelectorAll('.hidden');
  elements.forEach((element) => myObserver.observe(element)); {
  };