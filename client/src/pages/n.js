const handleLogin = async (e) => {
  if (e) e.preventDefault(); // Refresh rokne ke liye

  // Debugging ke liye: Dekho ki data kya ja raha hai
  console.log("Sending data:", { email, password });

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      // Check karo: Backend 'email' aur 'password' hi mang raha hai na?
      body: JSON.stringify({ email, password }), 
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } else {
      // 400 error yahan catch hoga
      console.log("Backend Error Message:", data.message);
      alert(data.message || "400: Data format galat hai");
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
};