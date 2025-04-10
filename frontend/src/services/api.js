// const API_BASE_URL = "http://localhost:8080";


// // Helper function for API responses
// const handleResponse = async (response) => {
//   try {
//     const contentType = response.headers.get("content-type");

//     if (!response.ok) {
//       if (contentType && contentType.includes("application/json")) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
//       } else {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//     }

//     if (contentType && contentType.includes("application/json")) {
//       return await response.json();
//     } else {
//       return response.text(); // Handle non-JSON responses
//     }
//   } catch (error) {
//     console.error("Error processing response:", error);
//     throw error;
//   }
// };

// export const getAllUsers = async () => {
//   const response = await fetch(`${API_BASE_URL}/api/admin/users`);
//   return await handleResponse(response);
// };

// export const createUser = async (userData) => {
//   const response = await fetch(`${API_BASE_URL}/users`, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.error || 'Failed to create user');
//   }

//   return await response.json();
// };

// // Update user
// export const updateUser = async (id, userData) => {
//   const response = await fetch(`${API_BASE_URL}/users/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.error || 'Failed to update user');
//   }

//   return await response.json();
// };

// // Delete user
// export const deleteUser = async (id) => {
//   const response = await fetch(`${API_BASE_URL}/users/${id}`, {
  
//     method: 'DELETE',
//   });

//   if (!response.ok) throw new Error('Failed to delete user');
//   return await response.json();
// };



// /**
//  * Logs in a user.
//  * @param {string} id - The user's ID.
//  * @param {string} password - The user's password.
//  * @returns {Promise<Object>} - The response from the server.
//  */
// export const loginUser = async (id, password) => {
//   try {
//     console.log('Attempting login with:', { id, password });
    
//     const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
//       method: "POST",
//       credentials: 'include',
//       headers: { 
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({ 
//         id: id.trim(),
//         password: password
//       }),
//     });

//     console.log('Login response status:', response.status);

//     const data = await response.json();
//     console.log('Parsed response data:', data);

//     if (!response.ok) {
//       throw new Error(data.error || 'Invalid credentials');
//     }

//     // Store user data
//     const userData = {
//       userId: data.id || '',
//       role: data.role || '',
//       username: data.email ? data.email.split('@')[0] : id,
    
//     };

//     // Save to localStorage
//     localStorage.setItem("userId", userData.userId);
//     localStorage.setItem("role", userData.role);
//     localStorage.setItem("username", userData.username);
    
    

//     console.log('Login successful. Stored data:', userData);
//     return userData;

//   } catch (error) {
//     console.error("Login Error:", error);
//     // Clear auth data on failure
//     ['userId', 'role', 'username'].forEach(
//       key => localStorage.removeItem(key)
//     );
//     throw new Error(error.message || 'Login failed. Please check your credentials.');
//   }
// };

// src/services/api.js

const API_BASE_URL = "http://localhost:8080/api";

// Helper function to handle responses


const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const loginUser = async (id, password) => {
  try {
    console.log('Attempting login with:', { id, password });

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ id, password })
    });

    const contentType = response.headers.get("content-type");

    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("Expected JSON, got:", text);
      throw new Error("Unexpected response format from server.");
    }

    if (!response.ok) {
      throw new Error(data.error || 'Invalid credentials');
    }

    const userData = {
      userId: data.id || '',
      role: data.role || '',
      username: data.email ? data.email.split('@')[0] : id,
    };

    localStorage.setItem("userId", userData.userId);
    localStorage.setItem("role", userData.role);
    localStorage.setItem("username", userData.username);

    console.log('Login successful. Stored data:', userData);
    return userData;

  } catch (error) {
    console.error("Login Error:", error);
    ['userId', 'role', 'username'].forEach(key => localStorage.removeItem(key));
    throw new Error(error.message || 'Login failed. Please check your credentials.');
  }
};



export const getAllUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/users`);
  return await handleResponse(response);
};


// src/api.js or wherever you keep API calls

export const fetchUpcomingBuses = async () => {
    try {
        const response = await fetch('/api/student-dashboard');

        if (!response.ok) {
            throw new Error('Failed to fetch upcoming buses');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};


export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create user');
  }

  return await response.json();
};

// Update user
export const updateUser = async (id, userData) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update user');
  }

  return await response.json();
};

// Delete user
export const deleteUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
  
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Failed to delete user');
  return await response.json();
};



// Bus API Service for current database structure
export const busAPI = {
  /**
   * Get all upcoming buses (status: NOT_STARTED or STARTED)
   * Ordered by start_time, limited to 8 buses
   */
  getUpcomingBuses: async () => {
    const response = await fetch(`${API_BASE_URL}/buses/upcoming`, {
      method: 'GET',
      credentials: 'include'
    });
    return handleResponse(response);
  },

  /**
   * Get bus details by ID
   * @param {number} busId - ID from bus_schedule table
   */
  getBusDetails: async (busId) => {
    const response = await fetch(`${API_BASE_URL}/buses/${busId}`, {
      method: 'GET',
      credentials: 'include'
    });
    return handleResponse(response);
  },

  /**
   * Get buses by route (departure → arrival)
   * @param {string} departure - Departure location (ECLC, LH, etc.)
   * @param {string} arrival - Arrival location
   */
  getBusesByRoute: async (departure, arrival) => {
    const response = await fetch(
      `${API_BASE_URL}/buses/route?departure=${encodeURIComponent(departure)}&arrival=${encodeURIComponent(arrival)}`, 
      {
        method: 'GET',
        credentials: 'include'
      }
    );
    return handleResponse(response);
  },

  /**
   * Get current running buses (status: STARTED)
   */
  getRunningBuses: async () => {
    const response = await fetch(`${API_BASE_URL}/buses/running`, {
      method: 'GET',
      credentials: 'include'
    });
    return handleResponse(response);
  },

  /**
   * Get bus schedule history (status: COMPLETED)
   * @param {string} [busName] - Filter by bus name
   * @param {string} [date] - Filter by date (YYYY-MM-DD)
   */
  getBusHistory: async (busName, date) => {
    let url = `${API_BASE_URL}/buses/history`;
    const params = [];
    
    if (busName) params.push(`busName=${encodeURIComponent(busName)}`);
    if (date) params.push(`date=${encodeURIComponent(date)}`);
    
    if (params.length) url += `?${params.join('&')}`;
    
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include'
    });
    return handleResponse(response);
  }
};



export const driverAPI = {
  getDriverSchedule: async (driverId) => {
    const res = await fetch(`http://localhost:8080/api/driver-schedule/${driverId}`, {
      credentials: 'include',
    });
    if (!res.ok) throw new Error("Failed to fetch schedule");
    return await res.json();
  },

  updateStatus: async (scheduleId, status) => {
    const res = await fetch(`http://localhost:8080/api/driver-schedule/update-status/${scheduleId}?status=${status}`, {
      method: 'PUT',
      credentials: 'include',
    });
    if (!res.ok) throw new Error("Failed to update status");
    return await res.text(); // or `res.json()` if your backend returns JSON
  }
};




// // Driver API Service
// export const driverAPI = {
//   /**
//    * Start a bus trip (update status to STARTED)
//    * @param {number} busId - ID from bus_schedule table
//    */
//   startBus: async (busId) => {
//     const response = await fetch(`${API_BASE_URL}/driver/buses/${busId}/start`, {
//       method: 'PUT',
//       credentials: 'include'
//     });
//     return handleResponse(response);
//   },

//   /**
//    * Complete a bus trip (update status to COMPLETED)
//    * @param {number} busId - ID from bus_schedule table
//    */
//   completeBus: async (busId) => {
//     const response = await fetch(`${API_BASE_URL}/driver/buses/${busId}/complete`, {
//       method: 'PUT',
//       credentials: 'include'
//     });
//     return handleResponse(response);
//   },

//   /**
//    * Report bus delay (update status to DELAYED)
//    * @param {number} busId - ID from bus_schedule table
//    */
//   delayBus: async (busId) => {
//     const response = await fetch(`${API_BASE_URL}/driver/buses/${busId}/delay`, {
//       method: 'PUT',
//       credentials: 'include'
//     });
//     return handleResponse(response);
//   },

//   getDriverSchedule: async () => {
//     const response = await fetch(`${API_BASE_URL}/driver-schedule`, {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('authToken')}`
//       }
//     });
//     return handleResponse(response);
//   }
// };

// Authentication Service
export const authAPI = {
  login: async (id, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ id, password })
    });
    return handleResponse(response);
  },

  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    return handleResponse(response);
  },

  getCurrentUser: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include'
    });
    return handleResponse(response);
  }
};