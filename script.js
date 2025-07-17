let lastScrollY = window.scrollY;
let ticking = false;
const navbar = document.querySelector('.navbar');
function handleNavbarScroll() {
  if (window.innerWidth > 700) {
    navbar.classList.remove('hide-on-scroll');
    return;
  }
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 30) {
    navbar.classList.add('hide-on-scroll');
  } else {
    navbar.classList.remove('hide-on-scroll');
  }
  lastScrollY = currentScrollY;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleNavbarScroll();
      ticking = false;
    });
    ticking = true;
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const ctaBtn = document.querySelector('.cta-button');
    const servicesSection = document.getElementById('services');
    if (ctaBtn && servicesSection) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            servicesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            servicesSection.classList.add('section-animate');
            setTimeout(() => {
                servicesSection.classList.remove('section-animate');
            }, 1100);
        });
    }
});
document.querySelectorAll('.tab-link').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(tc => {
            if (tc.id === tabId) {
                tc.classList.add('active');
            } else {
                tc.classList.remove('active');
            }
        });
    });
});
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
    });
});

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease forwards';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });