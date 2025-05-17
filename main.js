// navbar change color
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("darker"); // Apply darker background
    } else {
      navbar.classList.remove("darker"); // Revert to lighter background
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


// animation scroll and letter by letter animation
document.addEventListener('DOMContentLoaded', () => {
const header = document.querySelector('.HEADER');
const headerTexts = header.querySelectorAll('p, h1');
const cards = document.querySelectorAll('.CARD'); 
const section = document.querySelector('.offer');
let animationTriggered = false; 

// Faster letter-by-letter animation for HEADER text
const animateWords = (element) => {
    const words = element.textContent.split(' ');
    element.textContent = ''; // Clear the original text

    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.marginRight = '10px';
        element.appendChild(wordSpan);

        word.split('').forEach((letter, letterIndex) => {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = letter;
            letterSpan.style.opacity = '0';
            letterSpan.style.transition = `opacity 0.05s ease ${wordIndex * 0.1 + letterIndex * 0.03}s, transform 0.05s ease ${wordIndex * 0.1 + letterIndex * 0.03}s`;
            letterSpan.style.display = 'inline-block';
            letterSpan.style.transform = 'translateX(-10px)';
            wordSpan.appendChild(letterSpan);

            requestAnimationFrame(() => {
                letterSpan.style.opacity = '1';
                letterSpan.style.transform = 'translateX(0)';
            });
        });
    });
};

// Smooth section animation for HEADER and Cards on scroll
const handleScroll = () => {
    // Only trigger animation once
    if (animationTriggered) return;

    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger header animation when section comes into view
    if (sectionPosition < windowHeight) {
        section.classList.add('visible');
        headerTexts.forEach(animateWords); 
        animationTriggered = true; 
    }
    
};

document.addEventListener('scroll', handleScroll);
});
// JavaScript for smooth animation on scroll
document.addEventListener("DOMContentLoaded", () => {
const cards = document.querySelectorAll(".CARD");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.1,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
});

document.addEventListener("DOMContentLoaded", function () {
const headerElement = document.querySelector(".animated-header");
const reservationForm = document.querySelector(".reservation-form");
const hotDealSection = document.querySelector(".hot-deal-section");

const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.1, // Trigger when 10% of the element is visible
};

// Intersection observer callback to add the "active" class when in view
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Stop observing once it's in view
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each element
observer.observe(headerElement);
observer.observe(reservationForm);
observer.observe(hotDealSection);
});





// for srrvices and numbers: 
document.addEventListener("DOMContentLoaded", () => {
// Helper function to animate counter
function animateCounter(id, start, end, duration) {
  const element = document.getElementById(id);
  let current = start;
  const increment = (end - start) / (duration / 50);

  const counter = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(counter);
    }
    element.textContent = Math.round(current);
  }, 50);
}

// service section
let serviceItems = document.querySelectorAll('.service-item');
function handleScroll() {
serviceItems.forEach((item) => {
  const rect = item.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    item.classList.add('show');
  }
});
}
window.addEventListener('scroll', handleScroll);

// Trigger number on the about us section
const counters = document.querySelectorAll("#years-counter, #chefs-counter");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter("years-counter", 0, 15, 1500);
        animateCounter("chefs-counter", 0, 50, 1500);
        observer.disconnect(); 
      }
    });
  },
  { threshold: 0.5 } 
);
counters.forEach((counter) => observer.observe(counter));
});


// Function to detect visibility
const scrollAnimations = () => {
const elements = document.querySelectorAll('.scroll-animate');

elements.forEach((el) => {
  const rect = el.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

  if (isVisible) {
    el.classList.add('visible');
  }
});
};
window.addEventListener('scroll', scrollAnimations);
window.addEventListener('load', scrollAnimations);


document.addEventListener("DOMContentLoaded", () => {
// 1. Scroll Animation for Default 8 Meals
const defaultItems = document.querySelectorAll(".menu-item[data-category='breakfast'], .menu-item[data-category='dinner']");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add animation class when in view
      }
    });
  },
  { threshold: 0.1 } // Trigger animation when 10% of the element is visible
);

defaultItems.forEach((item) => observer.observe(item)); // Observe the 8 default items

// 2. Filter Animation for Dinner/Breakfast
const filterBtns = document.querySelectorAll(".filter-btn");
const menuContainer = document.querySelector(".menu-items");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active class from all buttons
    filterBtns.forEach((button) => button.classList.remove("active"));

    // Add active class to the clicked button
    btn.classList.add("active");

    // Filter items based on category
    const filter = btn.getAttribute("data-filter");
    const items = document.querySelectorAll(".menu-item");

    // Apply filter animation
    menuContainer.classList.remove("active");
    setTimeout(() => {
      items.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";

          // Add animation when filtered items appear
          setTimeout(() => item.classList.add("show"), 50); // Delay for smooth animation
        } else {
          item.style.display = "none";
          item.classList.remove("show"); // Remove animation when filtered out
        }
      });
      menuContainer.classList.add("active");
    }, 300); // Delay to allow animation
  });
});
});

// enlarge pcitures of the food menu: 
document.addEventListener('DOMContentLoaded', function() {
  const menuImages = document.querySelectorAll('.menu-items img');
  const overlay = document.getElementById('image-overlay');
  const overlayImage = overlay.querySelector('img');

  menuImages.forEach(image => {
    image.addEventListener('click', () => {
      overlayImage.src = image.src;
      overlay.classList.add('active');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});


// Scroll Animation for Texts and Team Section
document.addEventListener("DOMContentLoaded", () => {
const animatableElements = document.querySelectorAll(".text-animate, .team-item");

const scrollAnimation = () => {
  animatableElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

// Trigger animation on scroll
window.addEventListener("scroll", scrollAnimation);
scrollAnimation(); // Run once on load to check for visible elements
});

jQuery.noConflict();
flatpickr("#date-picker", {
dateFormat: "d-m-Y",
minDate: "today",
theme: "material_blue", // Built-in theme
});

// Time Picker
flatpickr("#time-picker", {
enableTime: true,
noCalendar: true,
dateFormat: "h:i K",
time_24hr: false,
theme: "material_blue",
});


