document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------
  // Tab Functionality for Parcel Service
  // -------------------------------
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");
      tabLinks.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      this.classList.add("active");
      document.getElementById(tab).classList.add("active");
    });
  });

  // -------------------------------
  // Modal References
  // -------------------------------
  const parcelModal = document.getElementById("parcelModal");
  const vehicleModal = document.getElementById("vehicleModal");
  const greetingModal = document.getElementById("greetingModal");

  // -------------------------------
  // Open Parcel Modal on "Book Now" click
  // -------------------------------
  const bookNowBtn = document.getElementById("bookNowBtn");
  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", function () {
      parcelModal.style.display = "block";
    });
  }

  // Close Parcel Modal
  document.getElementById("parcelModalClose").addEventListener("click", function () {
    parcelModal.style.display = "none";
  });

  // -------------------------------
  // Show Parcel Form on Option Selection ("Send" or "Receive")
  // -------------------------------
  const optionButtons = document.querySelectorAll(".option-btn");
  const parcelForm = document.getElementById("parcelForm");
  optionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      parcelForm.style.display = "block";
    });
  });

  // Handle Parcel Service Form submission
  document.getElementById("parcelServiceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Close the Parcel Modal and open the Vehicle Modal
    parcelModal.style.display = "none";
    vehicleModal.style.display = "block";
  });

  // -------------------------------
  // Vehicle Modal: Close Button
  // -------------------------------
  document.getElementById("vehicleModalClose").addEventListener("click", function () {
    vehicleModal.style.display = "none";
  });

  // -------------------------------
  // Vehicle Selection Logic
  // -------------------------------
  const vehicleButtons = document.querySelectorAll(".vehicle-btn");
  let selectedVehicle = null;

  vehicleButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      vehicleButtons.forEach((b) => b.classList.remove("selected"));
      this.classList.add("selected");
      selectedVehicle = this.getAttribute("data-vehicle");
    });
  });

  // -------------------------------
  // Confirm Vehicle Selection
  // -------------------------------
  document.getElementById("confirmVehicleBtn").addEventListener("click", function () {
    if (!selectedVehicle) {
      alert("Please select a vehicle before confirming.");
      return;
    }
    vehicleModal.style.display = "none";
    greetingModal.style.display = "block";
  });

  // -------------------------------
  // Close Greeting Modal
  // -------------------------------
  document.getElementById("greetingModalClose").addEventListener("click", function () {
    greetingModal.style.display = "none";
  });
  document.getElementById("greetingCloseBtn").addEventListener("click", function () {
    greetingModal.style.display = "none";
  });

  // -------------------------------
  // Close Modals When Clicking Outside
  // -------------------------------
  window.onclick = function (event) {
    if (event.target === parcelModal) {
      parcelModal.style.display = "none";
    }
    if (event.target === vehicleModal) {
      vehicleModal.style.display = "none";
    }
    if (event.target === greetingModal) {
      greetingModal.style.display = "none";
    }
  };

  // -------------------------------
  // Mobile Menu Toggle Functionality
  // -------------------------------
  window.toggleMenu = function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  };

  // -------------------------------
  // Auth Modal Functions
  // -------------------------------
  window.showAuthModal = function () {
    document.getElementById("auth-modal").style.display = "block";
  };

  window.hideAuthModal = function () {
    document.getElementById("auth-modal").style.display = "none";
  };

  window.switchAuthTab = function (tab) {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const authTabs = document.querySelectorAll(".auth-tab");
    if (tab === "login") {
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      authTabs[0].classList.add("active");
      authTabs[1].classList.remove("active");
    } else {
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
      authTabs[1].classList.add("active");
      authTabs[0].classList.remove("active");
    }
  };

  window.handleLogin = function () {
    console.log("Login attempted");
    hideAuthModal();
  };

  window.handleSignup = function () {
    console.log("Signup attempted");
    hideAuthModal();
  };

  window.switchUserType = function (type) {
    const userTypeButtons = document.querySelectorAll(".user-type-btn");
    userTypeButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button based on type
    userTypeButtons.forEach((btn) => {
      if (btn.textContent.trim().toLowerCase() === type) {
        btn.classList.add("active");
      }
    });
    const partnerFields = document.getElementById("partner-fields");
    if (type === "partner") {
      partnerFields.classList.remove("hidden");
    } else {
      partnerFields.classList.add("hidden");
    }
  };

  // Close Auth Modal when clicking outside
  window.addEventListener("click", function (event) {
    const authModal = document.getElementById("auth-modal");
    if (event.target === authModal) {
      authModal.style.display = "none";
    }
  });
});
