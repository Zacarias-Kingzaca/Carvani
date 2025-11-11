function toggleMenu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('Show');
}

const slides = document.querySelectorAll('.slide');
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('active');
            slides[current].classList.add('out');

            current = (current + 1) % slides.length;
            slides[current].classList.remove('out');
            slides[current].classList.add('active');
        }, 5000);  

const header = document.getElementById("header");
const carrossel = document.getElementById("sec1");

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
    header.classList.remove("scrolled");
    } else {
    header.classList.add("scrolled");
    }
}, { threshold: 0.6 });

observer.observe(carrossel);

new Swiper('#sec3', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: 'sec3-pagination', clickable: true,
    }
})