function navigateTo(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function signUp() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const phone = document.getElementById('signup-phone').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const branch = document.getElementById('signup-branch').value;
  const batch = document.getElementById('signup-batch').value.trim();

  if (!name || !email || !phone || !password || !branch || !batch) {
    alert("Please fill out all fields.");
    return;
  }

  localStorage.setItem('alumniName', name);
  alert("Registration successful!");
  navigateTo('signin');
}

function signIn() {
  const name = localStorage.getItem('alumniName');
  document.getElementById('user-name').textContent = `Hello ${name || "User"}`;
  navigateTo('home');
}

function submitEventRegistration() {
  const name = document.getElementById('event-name').value.trim();
  const batch = document.getElementById('event-batch').value.trim();

  if (!name || !batch) {
    alert("Please fill out both fields.");
    return;
  }

  // Set the success message
  const registrationMessage = document.getElementById('registration-message');
  registrationMessage.textContent = `Thank you ${name}, your registration for the event is confirmed!`;

  // Navigate to the event registration success screen
  navigateTo('event-registration-success');
}

function navigateTo(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show the selected screen
  document.getElementById(screenId).classList.add('active');
}


function performSearch() {
  const query = document.getElementById('search-query').value.trim();
  const resultsContainer = document.getElementById('search-results');

  if (!query) {
    alert("Please enter a search query.");
    return;
  }

  // For now, we will simulate the search results with dummy data
  const results = [
    { name: 'Anitha', batch: 'CSE 2010' },
    { name: 'Arjun', batch: 'CSE 2010' },
    { name: 'Priya', batch: 'EEE 2011' }
  ];

  const filteredResults = results.filter(result =>
    result.name.toLowerCase().includes(query.toLowerCase()) ||
    result.batch.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredResults.length > 0) {
    resultsContainer.innerHTML = filteredResults.map(result =>
      `<div class="search-result">
        <p>Name: ${result.name}</p>
        <p>Batch: ${result.batch}</p>
      </div>`
    ).join('');
  } else {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  }

  function navigateToPage(page) {
    window.location.href = page;
  }
  
}
      
        function toggleReadMore() {
          const dots = document.getElementById("dots");
          const moreText = document.getElementById("more");
          const readMoreLink = document.getElementById("readMoreLink");
    
          if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            dots.style.display = "none";
            readMoreLink.innerText = "Read less";
          } else {
            moreText.style.display = "none";
            dots.style.display = "inline";
            readMoreLink.innerText = "Read more";
          }
        }
        document.addEventListener('DOMContentLoaded', function() {
          const btn = document.getElementById('newsReadMoreBtn');
          const dots = document.getElementById('newsDots');
          const moreText = document.getElementById('newsMore');
        
          btn.addEventListener('click', function() {
            if (moreText.style.display === 'none') {
              moreText.style.display = 'inline';
              dots.style.display = 'none';
              btn.textContent = 'Read less';
            } else {
              moreText.style.display = 'none';
              dots.style.display = 'inline';
              btn.textContent = 'Read more';
            }
          });
        });