const API_BASE_URL = "http://localhost:8080";


// Helper function for API responses
const handleResponse = async (response) => {
  try {
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return response.text(); // Handle non-JSON responses
    }
  } catch (error) {
    console.error("Error processing response:", error);
    throw error;
  }
};

/**
 * Logs in a user.
 * @param {string} id - The user's ID.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - The response from the server.
 */
export const loginUser = async (id, password) => {
  try {
    console.log('Attempting login with:', { id, password });
    
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ 
        id: id.trim(),
        password: password
      }),
    });

    console.log('Login response status:', response.status);

    const data = await response.json();
    console.log('Parsed response data:', data);

    if (!response.ok) {
      throw new Error(data.error || 'Invalid credentials');
    }

    // Store user data
    const userData = {
      userId: data.id || '',
      role: data.role || '',
      username: data.email ? data.email.split('@')[0] : id,
    
    };

    // Save to localStorage
    localStorage.setItem("userId", userData.userId);
    localStorage.setItem("role", userData.role);
    localStorage.setItem("username", userData.username);
    
    

    console.log('Login successful. Stored data:', userData);
    return userData;

  } catch (error) {
    console.error("Login Error:", error);
    // Clear auth data on failure
    ['userId', 'role', 'username'].forEach(
      key => localStorage.removeItem(key)
    );
    throw new Error(error.message || 'Login failed. Please check your credentials.');
  }
};

