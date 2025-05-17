

// Initialize Flatpickr for the date picker
flatpickr("#date-picker", {
    dateFormat: "d-m-Y",
    minDate: "today", 
  });
  
  // Initialize Flatpickr for the time picker
  flatpickr("#time-picker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K", 
    time_24hr: false,    
    defaultHour: 19,     
    defaultMinute: 0,
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const animatedTextElements = document.querySelectorAll("[data-animate='fade-in-left']");
  
    function animateLetters(element) {
      const text = element.textContent; 
      element.innerHTML = "";
      [...text].forEach((char, i) => {
        // Wrap each character in a span
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = char === " " ? "\u00A0" : char; 
        element.appendChild(span);
  
        // Add animation with a delay
        setTimeout(() => {
          span.classList.add("animate");
        }, i * 10); 
      });
    }
  
    function handleScroll() {
      animatedTextElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0 && !el.classList.contains("animated")) {
          el.classList.add("animated");
          animateLetters(el);
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let animatedElements = document.querySelectorAll("[data-animate]");
  
    function handleScroll() {
      animatedElements.forEach((el) => {
        let rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          el.classList.add("animate");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load
  });
  