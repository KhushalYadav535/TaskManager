import { toast } from 'react-toastify';

// Function to show notifications
export const notify = (message, type) => {
    toast[type](message);
}

// Base URL for API
export const API_URL = 'http://localhost:8080'; // Adjust the port if necessary
