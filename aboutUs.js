    const buttonForward = document.getElementById('button_forward');
    const buttonBackward = document.getElementById('button_backward');
    const teamContainer = document.querySelector('.teamContaner');

    let menuIcon = document.querySelector('.barAws');
    let burgerMenu = document.querySelector('.burgerMenu');
    let closeMenu = document.querySelector('.fa-xmark');

    menuIcon.addEventListener('click',function (){
        burgerMenu.style.display='block';
    })
    
    closeMenu.addEventListener('click',function (){
        burgerMenu.style.display='none';
    })

    let currentSlide = 0;

    const updateSlideVisibility = () => {
        const slides = document.querySelectorAll('.teamContaner > div');
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    };

    const handleNavigationClick = (increment) => {
            const totalSlides = document.querySelectorAll('.teamContaner > div').length;
            currentSlide = (currentSlide + increment + totalSlides) % totalSlides;
            updateSlideVisibility();
    };

    buttonForward.addEventListener('click', () => handleNavigationClick(1));
    buttonBackward.addEventListener('click', () => handleNavigationClick(-1));

    adjustButtonVisibility();