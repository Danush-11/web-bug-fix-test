    // Enhanced JavaScript
    document.addEventListener('DOMContentLoaded', () => {
        // City initialization
        const cities = ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo", "Anuradhapura"];
        const selects = document.querySelectorAll('#fromCity, #toCity');
        selects.forEach(select => {
          cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            select.appendChild(option);
          });
        });
  
        // Price calculation logic
        document.getElementById('calculateBtn').addEventListener('click', () => {
          const fromCity = document.getElementById('fromCity').value;
          const toCity = document.getElementById('toCity').value;
          const weight = parseFloat(document.getElementById('weight').value);
          
          if (!validateCalculatorInputs(fromCity, toCity, weight)) {
            return;
          }
  
          const price = calculatePrice(fromCity, toCity, weight);
          document.getElementById('priceOutput').textContent = `Estimated Price: $${price}`;
        });
  
        // Form submission
        document.getElementById('subscribeForm').addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Thank you for subscribing!');
          e.target.reset();
        });
      });
  
      function validateCalculatorInputs(fromCity, toCity, weight) {
        if (!fromCity || !toCity || isNaN(weight)) {
          showError('Please fill in all required fields');
          return false;
        }
        if (weight <= 0) {
          showError('Weight must be greater than 0');
          return false;
        }
        return true;
      }
  
      function calculatePrice(from, to, weight) {
        const baseRate = 5;
        const distanceRate = getDistanceRate(from, to);
        const weightRate = weight * 2;
        return (baseRate + distanceRate + weightRate).toFixed(2);
      }
  
      function getDistanceRate(from, to) {
        const routes = {
          'Colombo-Kandy': 15,
          'Colombo-Galle': 10,
          'Colombo-Jaffna': 25,
          // Add more routes as needed
        };
        const routeKey = `${from}-${to}`;
        return routes[routeKey] || 20; // Default rate
      }
  
      function showError(message) {
        const output = document.getElementById('priceOutput');
        output.textContent = message;
        output.style.color = 'red';
        setTimeout(() => {
          output.style.color = '';
        }, 2000);
      }