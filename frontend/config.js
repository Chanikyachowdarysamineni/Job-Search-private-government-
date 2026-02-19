// Frontend Configuration
// This file handles API endpoint configuration for different environments

const API_CONFIG = {
    // Configure your backend API URL here
    // For separate frontend deployment, set BACKEND_URL to your backend API
    // For combined deployment, it will use the same origin
    
    BACKEND_URL: 'YOUR_BACKEND_API_URL', // Replace with your deployed backend URL
    
    get BASE_URL() {
        // If localhost, use local backend
        if (window.location.hostname === 'localhost') {
            return 'http://localhost:5000';
        }
        
        // If BACKEND_URL is set (not placeholder), use it
        if (this.BACKEND_URL && this.BACKEND_URL !== 'YOUR_BACKEND_API_URL') {
            return this.BACKEND_URL;
        }
        
        // Otherwise, assume backend is on same origin (combined deployment)
        return window.location.origin;
    }
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
