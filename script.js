//your JS code here. If required.
    document.addEventListener('DOMContentLoaded', () => {
      const loginForm = document.getElementById('loginForm');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const rememberCheckbox = document.getElementById('checkbox');
      const existingUserButton = document.getElementById('existing');

      // Check if details are saved in local storage
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        existingUserButton.style.display = 'block';
      }

      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberCheckbox.checked) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
        existingUserButton.style.display = 'block';
      });

      existingUserButton.addEventListener('click', () => {
        if (savedUsername) {
          alert(`Logged in as ${savedUsername}`);
        }
      });
    });