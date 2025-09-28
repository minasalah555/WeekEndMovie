document.querySelector('.login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (!username || !password) {
        alert('Please fill in all fields');
        return;
      }
      
       localStorage.setItem('login_username', username);
      localStorage.setItem('login_password', password);

       window.location.href = "index.html";
    });

    