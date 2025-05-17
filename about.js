
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animated-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    section.classList.add("visible");

                    // Trigger staggered animations for child elements
                    if (section.querySelectorAll(".video-content, .testi .head, .testi .body")) {
                        const children = section.querySelectorAll(".video-content, .testi .head, .testi .body");
                        children.forEach((child, index) => {
                            child.style.animationDelay = `${index * 0.3}s`;
                            child.classList.add("visible");
                        });
                    }

                    observer.unobserve(section); // Stop observing after animation
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
});


const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Make pagination dots clickable
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  