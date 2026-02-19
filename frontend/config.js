// Frontend Configuration
// This file handles API endpoint configuration for different environments

const API_CONFIG = {
    // Automatically detect the API base URL
    BASE_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:5000'
        : window.location.origin
};

// Export API endpoints
const API = {
    LOGIN: `${API_CONFIG.BASE_URL}/api/users/login`,
    REGISTER: `${API_CONFIG.BASE_URL}/api/users/register`,
    APPLY: `${API_CONFIG.BASE_URL}/api/apply`,
    APPLICATIONS: `${API_CONFIG.BASE_URL}/api/applications`
};

// For debugging
console.log('API Configuration:', API_CONFIG.BASE_URL);
