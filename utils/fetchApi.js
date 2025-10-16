import { useStoreLogin } from "../store/login";
import { useUser } from "../context/UserContext"; // Import the hook to get user context

// const baseUrl = "https://abc.in";
// const v3BaseUrl = "";

export const createNewPasswordApi = async (email, password) => {
  const url = "https://nmtdevserver.com/well/wellilab-api-gateway/public/api/create-new-password";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      throw {
        status: false,
        message: data.message,
        errors: data.data || null,
      };
    }

    return {
      status: true,
      message: data.message,
      message_italian: data.message_italian || data.message,
    };

  } catch (error) {
    console.error("Error creating new password:", error);
    throw error;
  }
};


export const verifyResendOtpApi = async (email, otp) => {
  const url = "https://nmtdevserver.com/well/wellilab-api-gateway/public/api/verify-otp";

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp })
    });

    const data = await response.json();

    // If response is not OK or status is false
    if (!response.ok || !data.status) {
      throw {
        status: false,
        message: data.message,
        errors: data.data || null
      };
    }

    // Return success response with token and user name
    return {
      status: true,
      message: data.message,
      token: data.data.token,
      name: data.data.name
    };

  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};


export const resendOtpApi = async (email) => {
  const url = "https://nmtdevserver.com/well/wellilab-api-gateway/public/api/resend-otp";

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    // If the response is not OK, throw the error response
    if (!response.ok) {
      throw {
        status: false,
        message: data.message
      };
    }

    // Return success response with message
    return {
      status: true,
      message: data.message
    };

  } catch (error) {
    console.error("Error resending OTP:", error);
    throw error; // Rethrow the error object with status and message
  }
};


export const verifyOtp = async ({ email, otp }) => {
  const response = await fetch(`https://nmtdevserver.com/well/wellilab-api-gateway/public/api/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, otp })
  });

  const data = await response.json();
  if (!response.ok) throw data;
  return data;
};

export const registerUser = async (name, email, password, c_password) => {
  const url = "https://nmtdevserver.com/well/wellilab-api-gateway/public/api/register";

  try {
    // Basic validations
    if (!name || !email || !password || !c_password) {
      throw new Error("All fields are required.");
    }

    if (password !== c_password) {
      throw new Error("Password and Confirm Password must match.");
    }

    const payload = { name, email, password, c_password };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    // Handle non-successful responses
    if (!response.ok || !result?.status) {
      const error = new Error(result.message);
      error.details = result.data || null;
      throw error;
    }

    // Return the successful response data
    return result;

  } catch (error) {
    // Optional: Log the error for debugging
    console.error("Registration Error:", error.message, error.details);
    throw error;
  }
};


// hammadde
export const loginUser = async (formData) => {
  const response = await fetch('https://lumeo.com.tr/api/login/ ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.msg);
  }

  return data;
}; 


export async function logoutUser(accessToken, refreshToken) {
  const response = await fetch(`https://lumeo.com.tr/api/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Logout API error:", data);
    throw new Error(data?.msg || `Logout failed with status ${response.status}`);
  }

  return data;
}


export const createOrganization = async (formData, accessToken) => {
  if (!accessToken) {
    console.log("Access Token used:", accessToken);
    return [];
  }

  try {
    console.log("Sending data to API:", formData); // Debugging the formData

    const response = await fetch("https://lumeo.com.tr/api/organizations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Bearer token for authentication
      },
      body: JSON.stringify(formData), // Sending formData as JSON
    });

    const data = await response.json(); // Parsing the response to JSON

    if (!response.ok) {
      console.error("API returned error:", data); // Log API errors
      throw new Error(data.message); // Handling error with message from API
    }

    // On success, return the relevant success data
    return {
      success: true,
      data: {
        message: data.message, // Assuming the API returns a success message
        organizationId: data.id, // Assuming API returns organization ID
        status: data.status, // Assuming the API returns status information
      }
    };
  } catch (error) {
    console.error("Caught fetch error:", error); // Network or server error
    return { success: false, error: { message: error.message || "An error occurred." } }; // Handle error
  }
};


export async function fetchOrganizations(accessToken) {
  try {
    const response = await fetch('https://lumeo.com.tr/api/organizations/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      return { success: false, error: errorData };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Network Error:", error);
    return { success: false, error };
  }
}

export const updateOrganization = async (id, formData, accessToken) => {
  try {
    const response = await fetch(`https://lumeo.com.tr/api/organizations/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json();

    if (!response.ok) {
      console.error("API returned error:", json);
      return { success: false, error: json.error || {}, message: json.message || "Update failed" };
    }

    return { success: true, data: json.data, message: json.message }; // ✅ Extract and return message
  } catch (error) {
    console.error("Caught fetch error:", error);
    return { success: false, error, message: "Network error occurred" };
  }
};


export const createUser = async (payload, accessToken) => {
  try {
    const res = await fetch(`https://lumeo.com.tr/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    // Log the raw response status and data for debugging
    console.log('Response status:', res.status);
    console.log('Response data:', data);

    // Check if the response body indicates success
    if (data?.message === 'User added successfully') {
      return { success: true, message: data.message, data };
    }

    return { success: false, message: data?.detail || 'Error creating user' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


export const fetchUsers = async (accessToken) => {
  try {
    const response = await fetch('https://lumeo.com.tr/api/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.error);

    return data;
  } catch (error) {
    console.error('Fetch users error:', error);
    return [];
  }
};

export const updateUser = async (accessToken, id, data, isFormData = false) => {
  try {
    const headers = isFormData
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        };

    const response = await fetch(`https://lumeo.com.tr/api/users/${id}/`, {
      method: 'PUT',
      headers,
      body: isFormData ? data : JSON.stringify(data),
    });

    const result = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      data: result,
    };
  } catch (error) {
    return {
      ok: false,
      error: 'Network error or server unreachable',
    };
  }
};

export async function createProject(data, accessToken) {
  if (!accessToken) {
    console.error("No access token found. Please log in.");
    return { success: false, message: "No access token provided." };
  }

  try {
    const response = await fetch("https://lumeo.com.tr/api/projects/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log("API response status:", response.status);
    console.log("API response JSON:", result);

    if (!response.ok) {
      const errorMsg = result?.message || "API returned an error.";
      return { success: false, message: errorMsg };
    }

    return {
      success: true,
      message: result.message || "Project created successfully.",
      data: result.data,
    };
  } catch (error) {
    console.error("Network or fetch error:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}

export async function getOrganizationsWithUsers(accessToken) {
  if (!accessToken) {
    console.error("No access token found. Please log in.");
    return [];
  }

  try {
    const response = await fetch('https://lumeo.com.tr/api/organizations-with-all-users/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error?.message || 'Failed to fetch organizations');
    }

    const data = await response.json();
    return Array.isArray(data) ? data : []; // Ensure it's always an array
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return [];
  }
}

export async function updateProject(projectId, data, accessToken) {
  try {
    const response = await fetch(`https://lumeo.com.tr/api/projects/${projectId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    console.error('Update failed', err);
    return { success: false, message: 'Update failed' };
  }
}

export async function fetchProjects(accessToken) {
  if (!accessToken) {
    console.error("No access token found. Please log in.");
    return [];
  }

  try {
    const response = await fetch("https://lumeo.com.tr/api/projects/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });


    if (!response.ok) {
      console.error("Failed to fetch projects, status code:", response.status);
      return [];
    }

    const data = await response.json();
    console.log("Fetched Data:", data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export const createTask = async (formData, accessToken) => {
  try {
    const response = await fetch('https://lumeo.com.tr/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message,
      };
    }

    return {
      success: true,
      message: data.message,
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Network error. Please try again.',
    };
  }
};

// /utils/fetchApi.js

// export async function updateTask(taskId, updatedData, accessToken) {
//   try {
//     const response = await fetch(`https://lumeo.com.tr/api/tasks/${taskId}/`, {
//       method: 'PUT', // or 'PATCH' if only partial updates
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,

//       },
//       body: JSON.stringify(updatedData),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update task');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Update error:', error);
//     throw error;
//   }
// }

export async function updateTask(taskId, formData, accessToken) {
  try {
    const response = await fetch(`https://lumeo.com.tr/api/tasks/${taskId}/`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // Do NOT set 'Content-Type' here for FormData
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to update task: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
}


export async function fetchTasks(accessToken) {
  if (!accessToken) {
    console.error("No access token found. Please log in.");
    return [];
  }

  try {
    const response = await fetch("https://lumeo.com.tr/api/tasks/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch tasks. Status:", response.status);
      return [];
    }

    const data = await response.json();
    console.log("Fetched tasks:", data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

const fetchGoogleToken = async (token) => {
  try {
    const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`;
    console.log('Fetching token info from:', url);

    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Token Fetch Failed:', errorText);
      throw new Error('Invalid token');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Google token info:', error.message);
    return null;
  }
};

export { fetchGoogleToken };


const fetchWithToken = async (url, data = {}, options = {}) => {
  try {
    const authToken = useStoreLogin.getState().authToken;

    if (!authToken) {
      window.location.href = "/login";
      return { error: "No auth token, redirecting to login." };
    }

    // Set up the headers
    const headers = {
      ...options.headers,
      token: authToken,
      apihost: baseUrl,
    };

    // Set up the fetch options
    const fetchOptions = {
      ...options,
      headers,
      method: options.method || "GET",
    };
    let newUrl;

    // If the method is POST, PUT, or DELETE, include the data in the body as JSON
    if (
      fetchOptions.method === "POST" ||
      fetchOptions.method === "PUT" ||
      fetchOptions.method === "DELETE"
    ) {
      fetchOptions.body = data;
      if (!url.includes("/file/upload")) {
        fetchOptions.body = JSON.stringify(fetchOptions.body);
      }
      newUrl = url.startsWith("http") ? url : `${v3BaseUrl}${url}`;
    } else {
      // For GET or other methods, construct the URL with query parameters
      newUrl = url.startsWith("http") ? url : `${v3BaseUrl}${url}`;
      const queryString = new URLSearchParams(data).toString();
      newUrl = `${newUrl}?${queryString}`;
    }

    let response = await fetch(newUrl, fetchOptions);

    if (!response.ok) {
      if (response.status === 403) {
        try {
          await useStoreLogin.getState().getNewAuthToken();
        } catch (error) {
          window.location.href = "/login";
          return { error: "Error fetching new auth token." };
        }
        return await fetchWithToken(url, data, options); // Retry with new token
      } else {
        const errorData = await response.json();
        return {
          error: `HTTP error! status: ${response.status}`,
          details: errorData,
        };
      }
    }

    return await response.json();
  } catch (error) {
    return { error }
  }
};

export const fetchWithOutToken = async (url, data = {}, options = {}) => {
  try {
    const headers = {
      ...options.headers,
      apihost: baseUrl,
    };

    const fetchOptions = {
      ...options,
      headers,
      method: options.method || "GET",
    };

    // If the method is POST, PUT, or DELETE, include the data in the body as JSON
    if (
      fetchOptions.method === "POST" ||
      fetchOptions.method === "PUT" ||
      fetchOptions.method === "DELETE"
    ) {
      fetchOptions.body = JSON.stringify(data);
      url = url.startsWith("http") ? url : `${v3BaseUrl}${url}`;
    } else {
      // For GET or other methods, construct the URL with query parameters
      url = url.startsWith("http") ? url : `${v3BaseUrl}${url}`;
      const queryString = new URLSearchParams(data).toString();
      url = `${url}?${queryString}`;
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: `HTTP error! status: ${response.status}`,
        details: errorData,
      };
    }
    return await response.json(); // Return the response in JSON format
  } catch (error) {
    return { error };
    // return { error: "Fetch failed.", details: error.message };
  }
};

export const fetchWithToken_old = async (url, data = {}, options = {}) => {
  try {
    const authToken = useStoreLogin.getState().authToken;

    if (!authToken) {
      window.location.href = "/login";
      return { error: "No auth token, redirecting to login." };
    }

    // Set up the headers
    const headers = {
      ...options.headers,
      token: authToken,
    };

    // Set up the fetch options
    const fetchOptions = {
      ...options,
      headers,
      method: options.method || "GET",
    };
    let newUrl;

    // If the method is POST, PUT, or DELETE, include the data in the body as JSON
    if (
      fetchOptions.method === "POST" ||
      fetchOptions.method === "PUT" ||
      fetchOptions.method === "DELETE"
    ) {
      fetchOptions.body = data;
      if (!url.includes("/file/upload")) {
        fetchOptions.body = JSON.stringify(fetchOptions.body);
      }
      newUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
    } else {
      // For GET or other methods, construct the URL with query parameters
      newUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
      const queryString = new URLSearchParams(data).toString();
      newUrl = `${newUrl}?${queryString}`;
    }

    let response = await fetch(newUrl, fetchOptions);

    if (!response.ok) {
      if (response.status === 403) {
        try {
          await useStoreLogin.getState().getNewAuthToken();
        } catch (error) {
          window.location.href = "/login";
          return { error: "Error fetching new auth token." };
        }
        return await fetchWithToken(url, data, options); // Retry with new token
      } else {
        const errorData = await response.json();
        return {
          error: `HTTP error! status: ${response.status}`,
          details: errorData,
        };
      }
    }

    return await response.json(); // Return the response in JSON format
  } catch (error) {
    return { error }
    // return { error: "Fetch failed.", details: error.message };
  }
};

export const fetchWithOutToken_old = async (url, data = {}, options = {}) => {
  try {
    // Set up the headers
    const headers = {
      ...options.headers,
    };

    // Set up the fetch options
    const fetchOptions = {
      ...options,
      headers,
      method: options.method || "GET",
    };

    // If the method is POST, PUT, or DELETE, include the data in the body as JSON
    if (
      fetchOptions.method === "POST" ||
      fetchOptions.method === "PUT" ||
      fetchOptions.method === "DELETE"
    ) {
      if (!url.includes("/file/upload")) {
        fetchOptions.body = JSON.stringify(data);
      } else {
        fetchOptions.body = data;
      }
      url = url.startsWith("http") ? url : `${baseUrl}${url}`;
    } else {

      // For GET or other methods, construct the URL with query parameters
      url = url.startsWith("http") ? url : `${baseUrl}${url}`;
      const queryString = new URLSearchParams(data).toString();

      url = `${url}?${queryString}`;
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        error: `HTTP error! status: ${response.status}`,
        details: errorData,
      };
    }
    return await response.json();
  } catch (error) {
    return { error }
  }
};

export default fetchWithToken;