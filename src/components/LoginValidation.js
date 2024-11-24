// LoginValidation.js

export async function handleLogin(email, password) {
  if (email === "" || password === "") {
    alert("Please fill in both email and password!");  
    return;  
  }

  const url = "https://jsonplaceholder.typicode.com/posts"; // Mock API URL for now

  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();  // Parse the JSON response
      console.log("POST request successful:", result);  // Log the result for debugging
      alert("Login Successful!");  // Show success message
    } else {
      console.log("Error:", response.status);
      alert("Failed to login. Please try again.");
    }
  } catch (error) {
    console.log("Request failed:", error);
    alert("Error with the request.");
  }
}
