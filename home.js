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
function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  // Auth Modal Functions
function showAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex';
    switchAuthTab('login');
}

function hideAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function switchAuthTab(tabName) {
    // Switch tabs
    document.querySelectorAll('.auth-tab, .auth-tab-content').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`.auth-tab[onclick*="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-form`).classList.add('active');
    
    // Reset partner fields if switching back to login
    if(tabName === 'login') {
        document.getElementById('partner-fields').classList.add('hidden');
    }
}

function switchUserType(userType) {
    const partnerFields = document.getElementById('partner-fields');
    document.querySelectorAll('.user-type-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === userType) btn.classList.add('active');
    });
    
    partnerFields.classList.toggle('hidden', userType !== 'partner');
}

// Auth Handlers
function handleLogin() {
    const email = document.querySelector('#login-form input[type="text"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;
    
    // Add Firebase login logic here
    console.log('Login attempt:', email, password);
    hideAuthModal();
}

function handleSignup() {
    const isPartner = document.querySelector('.user-type-btn.active').textContent === 'Partner';
    const formData = {
        name: document.querySelector('#signup-fields input:nth-child(1)').value,
        email: document.querySelector('#signup-fields input:nth-child(2)').value,
        phone: document.querySelector('#signup-fields input:nth-child(3)').value,
        password: document.querySelector('#signup-fields input:nth-child(4)').value,
        confirmPassword: document.querySelector('#signup-fields input:nth-child(5)').value
    };

    if(isPartner) {
        formData.businessName = document.querySelector('#partner-fields input:nth-child(1)').value;
        formData.businessAddress = document.querySelector('#partner-fields input:nth-child(2)').value;
        formData.businessCategory = document.querySelector('#partner-fields select').value;
    }

    // Add Firebase signup logic here
    console.log('Signup data:', formData);
    hideAuthModal();
}

// Close modal when clicking outside
document.getElementById('auth-modal').addEventListener('click', (e) => {
    if(e.target === document.getElementById('auth-modal')) hideAuthModal();
});

// Add to existing mobile menu toggle function
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}
