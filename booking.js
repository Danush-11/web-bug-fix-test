            // Enhanced mobile menu functionality
            function toggleMenu() {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('active');
                
                // Close menu when clicking outside
                if (navLinks.classList.contains('active')) {
                    document.addEventListener('click', closeMenuOnClickOutside);
                } else {
                    document.removeEventListener('click', closeMenuOnClickOutside);
                }
            }
    
            function closeMenuOnClickOutside(event) {
                const navContainer = document.querySelector('.nav-container');
                if (!navContainer.contains(event.target)) {
                    document.querySelector('.nav-links').classList.remove('active');
                    document.removeEventListener('click', closeMenuOnClickOutside);
                }
            }
    
            // Enhanced Swiper initialization
            const swiper = new Swiper('.swiper', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                a11y: {
                    prevSlideMessage: 'Previous testimonial',
                    nextSlideMessage: 'Next testimonial',
                }
            });

            // Initialize Swiper for Special Promotions
    const promotionSwiper = new Swiper('.promotion-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        a11y: {
            prevSlideMessage: 'Previous promotion',
            nextSlideMessage: 'Next promotion',
        }
    });

    // Function to set date for search
    function setDate(type) {
        const dateInput = document.getElementById('date');
        const today = new Date();
        if (type === 'today') {
            dateInput.valueAsDate = today;
        } else if (type === 'tomorrow') {
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            dateInput.valueAsDate = tomorrow;
        }
    }

    // Function to handle search
    function searchTickets() {
        const fromStation = document.querySelector('.from-station').value;
        const toStation = document.querySelector('.to-station').value;
        const date = document.getElementById('date').value;
        alert(`Searching for tickets from ${fromStation} to ${toStation} on ${date}`);
    }

            function searchTickets() {
    // Get values from the form
    const fromStation = document.querySelector('.from-station').value.trim();
    const toStation = document.querySelector('.to-station').value.trim();
    const date = document.getElementById('date').value;

    // Validate inputs
    if (!fromStation || !toStation || !date) {
        alert("Please fill in all fields: From Station, To Station, and Date.");
        return;
    }

    if (fromStation === toStation) {
        alert("From Station and To Station cannot be the same.");
        return;
    }

    // Create query parameters
    const queryParams = new URLSearchParams({
        from: fromStation,
        to: toStation,
        date: date,
    });

    // Redirect to results page
    window.location.href = `booking.html?${queryParams.toString()}`;
}