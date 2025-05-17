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





// Select the section and its child elements
let animatedSection = document.querySelector('.animated-section');
let contactMethods = document.querySelectorAll('.contactMethod .method');

// Create Intersection Observer
let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animatedSection.classList.add('active');
                contactMethods.forEach((method, index) => {
                    method.style.animationDelay = `${0.5 + index * 0.2}s`;
                });
            }
        });
    },
    { threshold: 0.2 }
);

// Observe the section
observer.observe(animatedSection);
// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Function to toggle maps
  function changeMap(location) {
    const newYorkMap = document.querySelector("#newyork-map");
    const parisMap = document.querySelector("#paris-map");
  
    if (!newYorkMap || !parisMap) {
      console.error("Map elements are missing or not found.");
      return;
    }
  
    // Hide both maps initially
    newYorkMap.style.display = "none";
    parisMap.style.display = "none";
  
    if (location === "paris") {
      parisMap.style.display = "block";
    } else {
      newYorkMap.style.display = "block";
    }
  }
  
  // Function to initialize the map on page load
  function initializeMap() {
    const location = getQueryParam("location") || "newyork"; // Default to New York
    changeMap(location); // Set the initial map based on the query parameter
  
    // Add event listeners to the buttons for toggling
    document.querySelector("#newyork-button").addEventListener("click", () => changeMap("newyork"));
    document.querySelector("#paris-button").addEventListener("click", () => changeMap("paris"));
  }
  
  document.addEventListener("DOMContentLoaded", initializeMap);
  