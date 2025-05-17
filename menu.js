// for menu-header
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    sections.forEach(section => {
        observer.observe(section);
    });
});

let calcScrollValue=()=>{
  let scrollProgress=document.getElementById("progress");
  let progressValue=document.getElementById("progress-value");
  let pos=document.documentElement.scrollTop;
  let calcHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let scrollValue=Math.round(pos*100)/calcHeight;
  if(pos>100){
    scrollProgress.style.display="grid";
  }
  else{
    scrollProgress.style.display="none";
  }
  scrollProgress.addEventListener("click", () =>{
      document.documentElement.scrollTop=0;
  });
  scrollProgress.style.background=`conic-gradient(#a78f6b ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
  };
  
  window.onscroll=calcScrollValue;
  window.onload=calcScrollValue;

document.addEventListener('DOMContentLoaded', () => {
    // Select all sections
    const sections = document.querySelectorAll('.menu-section');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const menuContent = entry.target.querySelector('.menu-content');
                const imagesContainer = entry.target.querySelector('.images-container');

                // Add animate class when visible
                if (menuContent) menuContent.classList.add('animate');
                if (imagesContainer) imagesContainer.classList.add('animate');
            }
        });
    }, {
        threshold: 0.2,
    });

    // Observe each section
    sections.forEach(section => observer.observe(section));
});

// for chef recommendations
document.addEventListener("DOMContentLoaded", () => {
    const chefSection = document.querySelector("#chefSection");
    const lobster = chefSection.querySelector(".lobster");
    const contentSection = chefSection.querySelector(".content-Section");
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lobster.style.animationPlayState = "running";
            contentSection.style.animationPlayState = "running";
  
            // Stop observing after the animation triggers
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
  
    // Observe the chefSection
    observer.observe(chefSection);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("darker"); 
      } else {
        navbar.classList.remove("darker");
      }
    });
  });
  
  
  
  
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('hidden');
    navbar.classList.remove('visible');
  } else {
    navbar.classList.add('visible');
    navbar.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  