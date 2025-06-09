const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleLink = document.getElementById("toggleLink");
    const toggleText = document.getElementById("toggleText");
    const formTitle = document.getElementById("formTitle");

    toggleLink.addEventListener("click", () => {
      loginForm.classList.toggle("hidden");
      registerForm.classList.toggle("hidden");

      const isLogin = loginForm.classList.contains("hidden");
      formTitle.textContent = isLogin ? "Register on TeeTrend" : "Login to TeeTrend";
      toggleText.textContent = isLogin ? "Already have an account?" : "Don't have an account?";
      toggleLink.textContent = isLogin ? "Login" : "Register";
    });

    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      alert(`Logged in with: ${email}`);
    });

    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
      alert(`Registered: ${name}, ${email}`);
    });